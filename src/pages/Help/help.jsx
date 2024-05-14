import React from 'react';
import {Container, Grid, Box, Typography} from "@mui/material"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Help = () => {
    return (
        <>
            <Container sx={{
                padding: "200px"
            }}>
                <Grid item>
                    <Typography sx={{
                        color: "#5b5b5b",
                        fontSize: "36px",
                        textAlign: "center"
                    }}>
                        В случае ошибки свяжитесь с нами
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{
                        color: "#5b5b5b",
                        fontSize: "28px",
                        textAlign: "center",
                        textDecoration: "underline",
                        paddingTop: "100px"
                    }}>
                        +996 777 777 777
                    </Typography>
                </Grid>
                <Grid item sx={{
                    paddingTop: "140px"
                }}>
                    <Link to={"/"}>
                        <Button variant="outlined" sx={{
                            color: "#5B5B5B",
                            fontSize:"16px",
                            border: "4px solid #5b5b5b",
                            padding: 5,
                            borderRadius: "16px",
                            ":hover":{
                                color:"white",
                                background:"#5b5b5b",
                                border: "4px solid #5b5b5b",
                            }
                        }}> На главную </Button>
                    </Link>
                </Grid>
            </Container>
        </>
    );
};

export default Help;