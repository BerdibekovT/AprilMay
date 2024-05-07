import React from 'react';
import './header.css'
import Button from '@mui/material/Button';
import { Box, Container, Grid } from "@mui/material";


const Header = () => {
    return (
        <>
            <Container sx={{padding:5, flexDirection:"row", columnGap:10, justifyContent:"center", display:{sm:"none", md:"flex"}}}>
                <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Главная</Button>

                <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Поле</Button>

                <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Спортзал</Button>

                <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Корт</Button>

                <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Бассейн</Button>

                <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Арена</Button>



            </Container>
            <Button sx={{color: "#5B5B5B", fontSize: "20px", display:{sm:"block", md:"none"}}} variant="text" >menu</Button>
        </>
    );
};

export default Header;