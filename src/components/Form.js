import React, { useState, useContext, useEffect } from 'react'
import { TextField, Typography, Grid, Button, 
    FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { ExpenseTrackerContext } from '../context/context';
import {v4 as uuidv4} from "uuid";
import {incomeCategories, expenseCategories} from "../constants/categories"
import formatDate from '../utils/formatDate';

import { useSpeechContext } from '@speechly/react-client';
import CustomSnackbar from './CustomSnackbar';

const initialState = {
    amount: "",
    category: "",
    type: "Income",
    date: formatDate(new Date())
};

const Form = () => {

    const [formData, setFormData] = useState(initialState);
    const {addTransaction} = useContext(ExpenseTrackerContext);
    const { segment } = useSpeechContext();
    const [open, setOpen] = useState(false);

    const createTransaction = () => {
        if (Number.isNaN(Number(formData.amount)) || !formData.date.includes("-")) return;

        const transaction = {...formData, amount: Number(formData.amount), id: uuidv4() };
        addTransaction(transaction);
        setFormData(initialState);
        setOpen(true);
    }

    useEffect(() => {
      if (segment) {
        if (segment.intent.intent === "add_expense"){
            setFormData({...formData, type: "Expense"})
        } else if (segment.intent.intent === "add_income") {
            setFormData({...formData, type: "Income"})
        } else if ( segment.isFinal && segment.intent.intent === "create_transaction"){
            return createTransaction();
        } else if ( segment.isFinal && segment.intent.intent === "cancel_transaction"){
            return setFormData(initialState);
        }

        segment.entities.forEach( (e) => {
            switch (e.type) {
                case "amount":
                    setFormData({...formData, amount: e.value});
                    break;
                case "category":
                    let c = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`;
                    setFormData({...formData, category: c});
                    break;
                case "date":
                    setFormData({...formData, date: e.value})
                    break;
            }
        })

        if (segment.isFinal && formData.amount && formData.category && formData.date && formData.type) {
            createTransaction();
        }
      }
    }, [segment]);
    

    const categories = formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <div>
        <Grid container spacing={2}>

            <CustomSnackbar open={open} setOpen={setOpen} />

            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    { segment && segment.words.map(w => w.value).join(" ") }
                </Typography>
            </Grid>
            

            <Grid item xs={6}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Type"
                        value={formData.type}
                        onChange={e => setFormData({...formData, type: e.target.value})}
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>

            </Grid>

            <Grid item xs={6}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Category"
                        value={formData.category} 
                        onChange={e => setFormData({...formData, category: e.target.value})}
                    >
                        {
                            categories.map(c => <MenuItem value={c.type} key={c.type}>
                                {c.type}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <TextField 
                    type="number" 
                    id="standard-basic" 
                    label="Amount" 
                    variant="standard"
                    value={formData.amount}
                    onChange={e => setFormData({...formData, amount: e.target.value})} />
            </Grid>

            <Grid item xs={6}>
                <TextField 
                    type="date" 
                    id="standard-basic" 
                    label="Date" 
                    variant="standard"
                    value={formData.date} 
                    onChange={e => setFormData({...formData, date: formatDate(e.target.value)})} />
            </Grid>
            <Button variant='outlined' color="primary" fullWidth 
            sx={{margin: "10px", paddingBottom: 0}}
            onClick={createTransaction}>
                Create
            </Button>

        </Grid>
    </div>
  )
}

export default Form