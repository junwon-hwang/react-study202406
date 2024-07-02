import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNavigation.module.scss'

const Mainnavigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/product'>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Mainnavigation