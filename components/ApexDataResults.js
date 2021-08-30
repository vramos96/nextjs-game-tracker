import React from 'react'
import ApexSegment from './ApexSegment'
import { Grid, Typography } from '@material-ui/core'

const ApexDataResults = ({ data }) => {
    const segments = data?.segments ?? {}
    return (
        <Grid container spacing={2}>
            <Grid container>
                <Grid item xs>
                    {
                        (data?.platformInfo?.avatarUrl ?? "") !== "" &&
                        <img width="100px" height="100px" src={data?.platformInfo?.avatarUrl ?? ""} alt="Player Avatar" />
                    }
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4">
                        { data?.platformInfo?.platformUserIdentifier ?? "Player's name goes here" }
                    </Typography>
                </Grid>
            </Grid>
            { segments.map( (segment, index) => {
                return <ApexSegment key={index} segment={segment} />
            } ) }
        </Grid>
    )
}

export default ApexDataResults
