import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import gameOptions from '../public/gameOptions.js'
import apexPlatformOptions from '../public/apexPlatformOptions.js'
import overwatchPlatformOptions from '../public/overwatchPlatformOptions.js'
import GameDataResults from './GameDataResults.js'
import { 
    Button,
    Typography, 
    Grid, 
    TextField, 
    Select, 
    InputLabel, 
    MenuItem,
    Card,
    CardContent
} from '@material-ui/core'
import { useState, useEffect } from 'react'
import styles from '../styles/GameTracker.module.css'

const GameTracker = () => {
    const [data, setData] = useState({})
    const [enableSubmit, setEnableSubmit] = useState(false)
    const [game, setGame] = useState("")
    const [platform, setPlatform] = useState("")
    const [input, setInput] = useState("")
    const handleGameChange = (event) => {
        setGame(event.target.value)
        setPlatform("")//Platform should change to blank since options are different between games
    }
    const handlePlatformChange = (event) => {
        setPlatform(event.target.value)
    }
    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
    const handleClearButton = () => {
        setEnableSubmit(false)
        setPlatform("")
        setGame("")
        setInput("")
    }
    const handleSubmitButton = async () => {
        const url = `http://localhost:3000/api/hello`
        axios({
            method: 'post',
            url: url,
            responseType: 'json',
            data: {
                game,
                platform,
                input
            }
        })
        .then((response) => {
            console.log(response)
            setData(response?.data ?? {})
        })
        .catch((error) => {
            console.log(error.response.data)
            setData(error?.response?.data ?? {})
        })
        .finally(() => {
            handleClearButton()
        })
    }
    useEffect(() => {
        setEnableSubmit( game !== "" && platform !== "" && input !== "" )
    }, [game, platform, input])
    return (
        <Card variant="outlined">
            <CardContent>
                <div className={styles.container}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <InputLabel required>Select a game</InputLabel>
                            <Select
                            id="a"
                            value={game}
                            onChange={handleGameChange}
                            fullWidth
                            >
                                { gameOptions.map( (item) => <MenuItem key={item.id} value={item.value}>{item.name}</MenuItem>) }
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel required>Select a platform</InputLabel>
                            <Select
                            id="b"
                            value={platform}
                            onChange={handlePlatformChange}
                            fullWidth
                            >
                            {
                                game === "apex" &&
                                apexPlatformOptions.map( (item) => <MenuItem key={item.id} value={item.value}>{item.name}</MenuItem> )
                            }
                            {
                                game === "overwatch" &&
                                overwatchPlatformOptions.map( (item) => <MenuItem key={item.id} value={item.value}>{item.name}</MenuItem> )
                            }
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel required>Input your id</InputLabel>
                            <TextField
                            value={input}
                            onChange={handleInputChange}
                            inputProps={{min: 0, style: { textAlign: 'center' }}}
                            fullWidth
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="default" style={{marginRight: '20px'}} onClick={handleClearButton}>
                                Clear
                            </Button>
                            <Button disabled={!enableSubmit} variant="contained" color="primary" onClick={handleSubmitButton}>
                                Submit
                            </Button>
                        </Grid>
                        {
                            game === "overwatch" &&
                            <Grid item xs={12}>
                                <Typography>
                                    <span style={{color: 'red'}}> PLEASE NOTE: </span> Player's profile must be public in order to fetch data correctly!
                                </Typography>
                            </Grid>
                        }
                        {
                            Object.keys(data).length > 0 && 
                            <Grid item xs={12}>
                                <GameDataResults data={data} />
                            </Grid>
                        }
                    </Grid>
                </div>
            </CardContent>
        </Card>
    )
}

export default GameTracker
