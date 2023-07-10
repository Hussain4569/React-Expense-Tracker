import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import useTransactions from '../customHooks/useTransactions';

ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({title}) => {

  let borderColor = title === "Income" ? "#5FD068" : "#F24C4C";

  const {total, chartData} = useTransactions(title);

  return (
    <Card sx={{borderBottom: `7px solid ${borderColor}`, maxHeight: 400}}>
        <CardHeader title={title} />
        <CardContent>
            <Typography variant='h5'>${total}</Typography>
            <Doughnut data={chartData} options={{radius: "65%"}} />
            {/*  */}
        </CardContent>
    </Card>
  )
}

export default Details;