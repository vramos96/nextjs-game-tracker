import React from 'react'
import { Grid } from '@material-ui/core'
import styles from '../styles/Home.module.css'

const Header = () => {
    const leftImageSrc = "https://logodownload.org/wp-content/uploads/2019/02/apex-legends-logo-5.png"
    const appName = process?.env?.NEXT_PUBLIC_APP_NAME ?? "MY TRACKER"
    const rightImageSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/600px-Overwatch_circle_logo.svg.png"
    return (
        <header className={styles.header}>
           <Grid container spacing={3}>
            <Grid item xs={4}>
                <img width="100px" height="100px" src={leftImageSrc}></img>
            </Grid>
            <Grid item xs={4}>
                <h1>{ appName }</h1>
            </Grid>
            <Grid item xs={4}>
                <img width="100px" height="100px" src={rightImageSrc}></img>
            </Grid>
           </Grid>
        </header>
    )
}

export default Header