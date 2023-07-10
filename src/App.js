import React, {useEffect, useRef} from "react";
import { Grid } from "@mui/material";
import {useMediaQuery} from "@mui/material";
import Details from "./components/Details";
import Main from "./components/Main";

import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from "@speechly/react-ui";
import { useSpeechContext } from "@speechly/react-client";

function App() {

  const {segment} = useSpeechContext();
  const main = useRef(null);

  const matches = useMediaQuery('(min-width:600px)');

  const cardHide = {margin: "5%", display: "none"};
  const cardDisplay = {margin: "5%"};

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(()=> {
    if (segment) {
      executeScroll();
    }

  }, [segment])

  return (
    <div>
      <Grid container spacing={0}
        alignItems="center"
        justify="center"
        sx={{height: "100vh", display: "flex", justifyContent: "center"}}
        >
        <Grid item xs={12} sm={3} sx={matches ? cardDisplay : cardHide} >
          <Details title="Income" />
        </Grid>

        <Grid ref={main} item xs={12} sm={3} sx={!matches && {margin: "5%"}} >
          <Main desktop={matches} />
        </Grid>

        <Grid item xs={12} sm={3} sx={matches ? cardHide : cardDisplay} >
          <Details title="Income" />
        </Grid>

        <Grid item xs={12} sm={3} sx={{margin: "5%"}} >
          <Details title="Expense" />
        </Grid>
      </Grid>

      <PushToTalkButtonContainer>
        <PushToTalkButton placement="bottom" size="70px" />
      </PushToTalkButtonContainer>
      
    </div>
  );
}

export default App;
