import React, { useContext } from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider } from "@mui/material";
import Form from './Form';
import ExpenseList from './ExpenseList';

import { ExpenseTrackerContext } from '../context/context';
import InfoCard from './InfoCard';

const Main = ({desktop}) => {

    const { balance } = useContext(ExpenseTrackerContext);

    const mobileSx = {maxHeight: 950, fontSize: "60%"};
    const desktopSx = {maxHeight: 550, fontSize: "60%"};

  return (
    <div>
        <Card sx={desktop ? desktopSx : mobileSx}>
            <CardHeader title="Expense Traker" subheader="Powered by Speechly" sx={{paddingBottom: "10px"}} />
            <CardContent sx={{paddingTop: 0, paddingBottom: 0}}>
                <Typography variant='h5' align='center' sx={{padding: "0 auto"}}>Total Balance: ${balance}</Typography>
                <Typography variant="subtitle1" sx={{lineHeight: "1.5em", marginTop: "5px"}}>
                    <InfoCard />
                </Typography>
                <Divider />

                <Form />
            </CardContent>

            <CardContent sx={{paddingTop: "5px", paddingBottom: "5px"}}>
                <Grid container spacing={2} sx={{paddingTop: 0}}>
                    <Grid item sx={{paddingTop: 0, width: "100%"}}>
                        <ExpenseList />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default Main;