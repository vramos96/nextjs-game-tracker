import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const OverwatchSegment = ({ segment }) => {
    const unknownTextValue = "Unknown"
    return (
        <Grid container>
            {
                (segment?.type ?? "") === "overview" &&
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography>
                            Player Overview ({segment?.metadata?.name ?? unknownTextValue})
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Time played: {segment?.stats?.timePlayed?.displayValue ?? unknownTextValue }
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Wins: {segment?.stats?.wins?.displayValue ?? unknownTextValue }
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Time spent on fire: {segment?.stats?.timeSpentOnFire?.displayValue ?? unknownTextValue }
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Medals (Gold / Silver / Bronce): &nbsp; {segment?.stats?.medals?.displayValue ?? "?" } 
                            ({segment?.stats?.goldMedals?.displayValue ?? "?"} / { segment?.stats?.silverMedals?.displayValue ?? "?" } / { segment?.stats?.bronzeMedals?.displayValue ?? "?" })
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Damage done: {segment?.stats?.damageDone?.displayValue ?? unknownTextValue }
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Healing done: {segment?.stats?.healingDone?.displayValue ?? unknownTextValue }
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Eliminations: {segment?.stats?.eliminations?.displayValue ?? unknownTextValue }
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Deaths: {segment?.stats?.deaths?.displayValue ?? unknownTextValue }
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            KD: {segment?.stats?.kd?.displayValue ?? unknownTextValue }
                        </Typography>
                    </Grid>
                </Grid>
            }
        </Grid>
    )
}

export default OverwatchSegment
