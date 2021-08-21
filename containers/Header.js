import React from 'react'
import styles from '../styles/Home.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>{ process?.env?.NEXT_PUBLIC_APP_NAME ?? "MY TRACKER" }</h1>
        </header>
    )
}

export default Header