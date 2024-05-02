import React from 'react';
import './header.css'
import Button from '@mui/material/Button';
import { Box, Container, Grid } from "@mui/material";


const Header = () => {
    return (
        <Grid container sx={{padding:5}}>
            <Grid item xs={12} sm={6} md={2} >
                <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text" >Главная</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text" >Поле</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text" >Спортзал</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text" >Корт</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text" >Бассейн</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
                <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text" >Арена</Button>
            </Grid>
        </Grid>
    );
};

export default Header;