import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
    const poweredByUrl = "https://tracker.gg/"
    return (
        <footer className={styles.footer}>
            <h3>
                Powered by &nbsp;
                <a target="_blank" href={poweredByUrl}>
                    {poweredByUrl}
                </a>
            </h3>
        </footer>
    )
}

export default Footer
