import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const ApexSegment = ({ segment }) => {
    const unknownTextValue = "Unknown"
    return (
        <Grid container>
            {
                (segment?.type ?? "") === "overview" &&
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography>
                            Player Overview
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Level: {segment?.stats?.level?.displayValue ?? unknownTextValue}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Kills: {segment?.stats?.kills?.displayValue ?? unknownTextValue}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Damage: {segment?.stats?.damage?.displayValue ?? unknownTextValue}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Revives: {segment?.stats?.revives?.displayValue ?? unknownTextValue}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            { segment?.stats?.rankScore?.displayName ?? "RANK SCORE"}
                        </Typography>
                        {
                        (segment?.stats?.rankScore?.metadata?.iconUrl ?? "") !== "" &&
                            <img
                            width="100"
                            height="100"
                            src={segment?.stats?.rankScore?.metadata?.iconUrl ?? ""}
                            />
                        }
                        <Typography>
                            { segment?.stats?.rankScore?.metadata?.rankName ?? unknownTextValue}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>
                            { segment?.stats?.arenaRankScore?.displayName ?? "ARENA RANK SCORE"}
                        </Typography>
                        {
                        (segment?.stats?.arenaRankScore?.metadata?.iconUrl ?? "") !== "" &&
                            <img
                            width="100"
                            height="100"
                            src={segment?.stats?.arenaRankScore?.metadata?.iconUrl ?? ""}
                            />
                        }
                        <Typography>
                            { segment?.stats?.arenaRankScore?.metadata?.rankName ?? unknownTextValue}
                        </Typography>
                    </Grid>
                </Grid>
            }
            {
                (segment?.type ?? "") === "legend" &&
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography>
                            { segment?.metadata?.name ?? unknownTextValue }
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            (segment?.metadata?.imageUrl ?? "") !== "" &&
                            <img
                            width="100"
                            height="100"
                            src={segment?.metadata?.imageUrl?? ""}
                            />
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Kills: { segment?.stats?.kills?.displayValue ?? unknownTextValue }
                        </Typography>
                    </Grid>
                </Grid>
            }
        </Grid>
    )
}

export default ApexSegment
