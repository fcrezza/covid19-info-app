import React from 'react'
import {Link} from 'react-router-dom'

import styles from './header.module.scss'
import logoSVG from './logo.svg'

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link className={styles.logoLink}>
        <img src={logoSVG} alt="logo" className={styles.logoImage} />
      </Link>
    </div>
  )
}

export default Header
