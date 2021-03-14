import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import classNames from 'classnames'
import {useCombobox} from 'downshift'

import {formatDate, formatNumber, formatTime} from './utils'
import ErrorBoundary from './ErrorBoundary'
import Loading from './Loading'
import styles from './check.module.scss'

function Check() {
  const [errorKey, resetErrorBoundary] = React.useState(0)

  return (
    <div className={styles.container}>
      <ErrorBoundary
        key={errorKey}
        reset={() => resetErrorBoundary(errorKey + 1)}
      >
        <GlobalCase />
      </ErrorBoundary>
    </div>
  )
}

function GlobalCase() {
  const [errorKey, resetErrorBoundary] = React.useState(0)

  const {data, error} = useSWR('https://covid19.mathdro.id/api', (url) =>
    axios.get(url).then(({data}) => data),
  )

  if (error) {
    throw error
  }

  if (!data) {
    return <Loading />
  }

  return (
    <>
      <div className={styles.globalCaseContainer}>
        <h1 className={styles.globalCaseTitle}>kasus global</h1>
        <p className={styles.globalCaseTimestamp}>
          Terakhir Diperbaharui Pada {formatDate(data.lastUpdate)} Pukul{' '}
          {formatTime(data.lastUpdate)} WIB
        </p>
        <div className={styles.globalCaseStatsContainer}>
          <GlobalCaseStatsItem>
            Terinfeksi: <strong>{formatNumber(data.confirmed.value)}</strong>
          </GlobalCaseStatsItem>
          <GlobalCaseStatsItem>
            Sembuh: <strong>{formatNumber(data.recovered.value)}</strong>
          </GlobalCaseStatsItem>
          <GlobalCaseStatsItem>
            Meninggal: <strong>{formatNumber(data.deaths.value)}</strong>
          </GlobalCaseStatsItem>
        </div>
      </div>
      <ErrorBoundary
        key={errorKey}
        reset={() => resetErrorBoundary(errorKey + 1)}
      >
        <CountryCase />
      </ErrorBoundary>
    </>
  )
}

function GlobalCaseStatsItem({children}) {
  return (
    <div className={styles.globalCaseStatsItem}>
      <p className={styles.globalCaseStatsText}>{children}</p>
    </div>
  )
}

function CountryCase() {
  const [selectedCountry, setSelectedCountry] = React.useState({
    name: 'Indonesia',
  })
  const {data: countries, error: countriesError} = useSWR(
    'https://covid19.mathdro.id/api/countries',
    async (url) => {
      const {countries} = await axios.get(url).then(({data}) => data)
      return countries
    },
  )
  const {data: countryCase, error: countryCaseError} = useSWR(
    countries
      ? `https://covid19.mathdro.id/api/countries/${selectedCountry.name}`
      : null,
    (url) => axios.get(url).then(({data}) => data),
  )

  const handleChangeSelectedCountry = (country) => {
    setSelectedCountry(country)
  }

  if (countryCaseError) {
    throw countryCaseError
  } else if (countriesError) {
    throw countriesError
  }

  if (!countryCase) {
    return <Loading />
  }

  return (
    <div className={styles.countryCaseContainer}>
      <DropdownCombobox
        items={countries}
        selectedItem={selectedCountry}
        handleSelectedItemChange={handleChangeSelectedCountry}
      />
      <div className={styles.countryCaseInfo}>
        <h2 className={styles.countryCaseTitle}>{selectedCountry.name}</h2>
        <p className={styles.countryCaseTimestamp}>
          Terakhir Diperbaharui Pada {formatDate(countryCase.lastUpdate)} Pukul{' '}
          {formatTime(countryCase.lastUpdate)} WIB
        </p>
      </div>
      <div className={styles.countryCaseStatsContainer}>
        <CountryCaseStatsItem
          name="Terinfeksi"
          value={countryCase.confirmed.value}
        />
        <CountryCaseStatsItem
          name="Sembuh"
          value={countryCase.recovered.value}
        />
        <CountryCaseStatsItem
          name="Meninggal"
          value={countryCase.deaths.value}
        />
      </div>
    </div>
  )
}

function CountryCaseStatsItem({value, name}) {
  return (
    <div className={styles.countryCaseStatsItem}>
      <div className={styles.countryCaseStatsItemMark}></div>
      <p className={styles.countryCaseStatsItemValue}>{formatNumber(value)}</p>
      <p className={styles.countryCaseStatsItemName}>{name}</p>
    </div>
  )
}

function DropdownCombobox({items, selectedItem, handleSelectedItemChange}) {
  const [inputItems, setInputItems] = React.useState(items)
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    selectedItem: selectedItem ? selectedItem.name : '',
    onSelectedItemChange: ({selectedItem}) =>
      handleSelectedItemChange(selectedItem),
    onInputValueChange: ({inputValue}) => {
      setInputItems(
        items.filter((item) =>
          item.name.toLowerCase().startsWith(inputValue.toLowerCase()),
        ),
      )
    },
  })
  return (
    <div className={styles.dropdownComboboxContainer}>
      <label {...getLabelProps({className: styles.dropdownComboboxLabel})}>
        Kasus per negara:
      </label>
      <div {...getComboboxProps({className: styles.dropdownCombobox})}>
        <input {...getInputProps({className: styles.dropdownComboboxInput})} />
        <div className={styles.divider}></div>
        <button
          type="button"
          aria-label="toggle menu"
          {...getToggleButtonProps({
            className: styles.dropdownComboboxToggleButton,
          })}
        >
          &#8595;
        </button>
      </div>
      <ul
        {...getMenuProps({
          className: classNames(styles.dropdownComboboxMenu, {
            [styles.dropdownComboboxMenuOpen]: isOpen,
          }),
        })}
      >
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              key={`${item.name}${index}`}
              {...getItemProps({
                item: item.name,
                index,
                className: classNames(styles.dropdownComboboxItem, {
                  [styles.dropdownComboboxItemHighlight]:
                    highlightedIndex === index,
                }),
              })}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Check
