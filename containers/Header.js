import React from 'react'
import Image from 'next/image'
import { Grid } from '@material-ui/core'
import styles from '../styles/Home.module.css'

const Header = () => {
    const appName = process?.env?.NEXT_PUBLIC_APP_NAME ?? "MY TRACKER V2"
    return (
        <header className={styles.header}>
           <Grid container spacing={3}>
            <Grid item xs={4}>
                <Image 
                    src="/apex-legends-logo.png" 
                    alt="Apex Legends Logo" 
                    width={100} 
                    height={100} 
                />
                <Image 
                    src="/octane-image.jpg" 
                    alt="Apex Legends Logo" 
                    width={200} 
                    height={100} 
                />
            </Grid>
            <Grid item xs={4}>
                <h1>
                    { appName }
                </h1>
            </Grid>
            <Grid item xs={4}>
                <Image 
                    src="/roadhog-image.png" 
                    alt="Apex Legends Logo" 
                    width={100}
                    height={100} 
                />
                <Image 
                    src="/overwatch-logo.png" 
                    alt="Apex Legends Logo" 
                    width={100}
                    height={100}
                />
            </Grid>
           </Grid>
        </header>
    )
}

export default Header