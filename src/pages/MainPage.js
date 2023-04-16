import {Link, redirect, useNavigate} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import MainTitle from "../components/MainTitle";
import Column1 from "../components/Column1";
import Column2 from "../components/Column2";
import Column3 from "../components/Column3";
import {Box, Container, CssBaseline, Grid} from "@mui/material";

function MainPage() {
    useEffect(() => {
    document.body.style.background='#251F36';
    });
    return(
        // <Box marginX={'0px'} sx={{ flexGrow: 1 }}>
        <Grid
            container
            spacing={0}
              maxWidth={'bg'}
              margin={'0px'}
              padding={'0px'}
              gap={'0px'}
            alignItems="stretch"
            sx={{  height:'100vh',}}



        >
            <Column1/>
            <Column2/>
            <Column3/>
        </Grid>
        // </Box>
    )
}

export default MainPage;

