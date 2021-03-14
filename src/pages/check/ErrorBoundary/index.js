import React from 'react'
import {mutate} from 'swr'

import styles from './errorboundary.module.scss'

class ErrorBoundary extends React.Component {
  state = {error: null}

  static getDerivedStateFromError(error) {
    return {error}
  }

  async retryRequest(url) {
    await mutate(url, null, true)
    this.props.reset()
  }

  render() {
    if (this.state.error) {
      if (this.state.error.response) {
        return (
          <ErrorMessage
            message="Upsss, gagal memuat data"
            buttonText={'Coba lagi'}
            onClick={() =>
              this.retryRequest(this.state.error.response.config.url)
            }
          />
        )
      }

      if (this.state.error.request) {
        return (
          <ErrorMessage
            message="Upsss, gagal memuat data"
            buttonText={'Coba lagi'}
            onClick={() => this.retryRequest(this.state.error.config.url)}
          />
        )
      }

      return (
        <ErrorMessage
          message="Upss, ada yang salah"
          buttonText="Muat ulang halaman"
          onClick={() => window.location.reload()}
        />
      )
    }

    return this.props.children
  }
}

function ErrorMessage({message, buttonText, onClick}) {
  return (
    <div className={styles.errorMessage}>
      <p>{message}</p>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  )
}

export default ErrorBoundary
