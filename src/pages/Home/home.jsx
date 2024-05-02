import React from 'react';
import './home.css'
import castle from "../../pics/minecraft-castle.png"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Buttonforhome from "./button";

const Home = () => {
    return (
        <>
            <Container sx={{paddingTop:10}}>
                <Grid container spacing={5}>
                    <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className={"homediv"}>
                            <p>
                                Занимайте помещения только у нас. Низкие цены а также скидки для постоянных клиентов!
                            </p>
                        </div>
                    </Grid>
                    <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className={"homeimg"}>
                            <img src={castle} alt=""/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{paddingTop:20}}>
                <Typography variant={"h2"} sx={{textAlign:"center"}}>
                    Оформите подписку!
                </Typography>
                <Grid sx={{
                    padding:10
                }} container spacing={5}>
                    <Grid item xs={12} sm={12} md={4} lg={1} xl={4}>
                        <div className={"sub"}>
                            <h5>
                                Ежемесячная подписка
                            </h5>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className={"sub"}>
                            <h5>
                                Ежемесячная подписка
                            </h5>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className={"sub"}>
                            <h5>
                                Ежемесячная подписка
                            </h5>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                paddingTop:25,
            }}>
                <Typography variant={"h2"} sx={{textAlign:"center"}}>
                    Все наши услуги
                </Typography>
                <Box sx={{
                    padding:30
                }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={12} md={4}>
                            <Buttonforhome/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Buttonforhome/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Buttonforhome/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Buttonforhome/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Buttonforhome/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Buttonforhome/>
                        </Grid>
                    </Grid>
                </Box>

            </Box>

        </>
    );
};

export default Home;