import dayjs from 'dayjs'
import numeral from 'numeral'

export function formatNumber(number) {
  return numeral(number).format('0,0')
}

export function formatDate(date) {
  return dayjs(date).format('DD MMM YYYY')
}

export function formatTime(date) {
  return dayjs(date).format('HH:mm:ss')
}
