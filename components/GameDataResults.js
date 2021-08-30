import React from 'react'
import { useMemo } from 'react'
import ApexDataResults from '../components/ApexDataResults'
import OverwatchDataResults from '../components/OverwatchDataResults'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'

const GameDataResults = ({ data }) => {
    const { success = false, game = "", result = {}, message = "Server responded with an error" } = data
    const responseComponent = useMemo(() => {
        if(success){
            if( game === "apex" ) return <ApexDataResults data={result} />
            if ( game === "overwatch") return <OverwatchDataResults data={result} />
            return (
                <Grid container>
                    <Grid item xs={12}>
                        <Typography>
                            This app does not support provided game data.
                        </Typography>
                    </Grid>
                </Grid>
            )
        }else{
            return (
                <Grid item xs={12}>
                    <Typography>
                        { message }
                    </Typography>
                </Grid>
            )
        }
    }, [success, game, result])
    return (
        <Card variant="outlined">
            <CardContent>
                { 
                    responseComponent
                }
            </CardContent>
        </Card>
    )
}

export default GameDataResults
