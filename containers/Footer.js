import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
    const poweredByUrl = "https://tracker.gg/"
    const createdByUrl = "https://github.com/vramos96"
    return (
        <footer className={styles.footer}>
            <h3>
                Powered by &nbsp;
                <a target="_blank" href={poweredByUrl}>
                    {poweredByUrl}
                </a>
                <br />
                Created by &nbsp;
                <a target="_blank" href="#">
                    {createdByUrl}
                </a>
            </h3>
        </footer>
    )
}

export default Footer
