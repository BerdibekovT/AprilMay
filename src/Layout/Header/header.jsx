import React from 'react';
import './header.css'
import Button from '@mui/material/Button';
import { Box, Container, Grid } from "@mui/material";
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <>
            <Container sx={{padding:5, flexDirection:"row", columnGap:10, justifyContent:"center", display:{sm:"none", md:"flex"}}}>

                <Link to={"/"}>
                    <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Главная</Button>
                </Link>
                <Link to={"/football"}>
                    <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Футбол</Button>
                </Link>
                <Link to={"/basketball"}>
                    <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Баскетбол</Button>
                </Link>
                <Link to={"/bigtennis"}>
                    <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Теннис</Button>
                </Link>
                <Link to={"/pool"}>
                    <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Бассейн</Button>
                </Link>
                <Link to={"/volleyball"}>
                    <Button sx={{color: "#5B5B5B", fontSize: "20px"}} variant="text" >Волейбол</Button>
                </Link>
            </Container>
            <Button sx={{color: "#5B5B5B", fontSize: "20px", display:{sm:"block", md:"none"}}} variant="text" >menu</Button>
        </>
    );
};

export default Header;