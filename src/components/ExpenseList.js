import React, { useContext } from 'react';
import { ExpenseTrackerContext } from '../context/context';

import { List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { Avatar, IconButton, Slide} from "@mui/material";
import { MoneyOff, Delete } from '@mui/icons-material';
import { green, red } from '@mui/material/colors';


const ExpenseList = () => {

  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);


  let avatarBackground = (type) => {
    if (type==="Income") return green[500];
     else return red[500];
  }

  return (
    <div>


        <List
        dense={false}  
        sx={{maxHeight: 150, overflow: "auto", paddingTop: 0, width: "100%"}}
        >

          {transactions.map(t => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={t.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{bgcolor: avatarBackground(t.type)}}>
                    <MoneyOff />
                  </Avatar>
                </ListItemAvatar>

                <ListItemText primary={t.category} secondary={`$${t.amount} - ${t.date}`} />

                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label='delete' 
                  onClick={() => deleteTransaction(t.id)}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Slide>

          ))}

        </List>
    </div>
  )
}

export default ExpenseList