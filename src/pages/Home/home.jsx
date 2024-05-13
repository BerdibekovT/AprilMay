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
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <Container>
            <Box sx={{paddingTop:10}}>
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
            </Box>
            <Box sx={{paddingTop:20}}>
                <Typography variant={"h2"} sx={{
                    textAlign:"center",
                    fontWeight:"400",
                    color: "#5b5b5b",
                }}>
                    Оформите подписку!
                </Typography>
                <Grid sx={{
                    padding:10
                }} container spacing={5}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className={"sub"}>
                            <h5>
                                Месячная подписка
                            </h5>
                            <p>
                                <span>559 сом</span> <br/>
                                479 сом
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className={"sub"}>
                            <h5>
                                Полугодовая подписка
                            </h5>
                            <p>
                                <span>2 795 сом</span> <br/>
                                2 395 сом
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className={"sub"}>
                            <h5>
                                Годовая подписка
                            </h5>
                            <p>
                                <span>6 790 сом</span> <br/>
                                5 790 сом
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                paddingTop:25,
            }}>
                <Typography variant={"h2"} sx={{
                    textAlign:"center",
                    fontWeight:"400",
                    color: "#5b5b5b",
                }}>
                    Все наши услуги
                </Typography>
                <Box sx={{
                    padding:30
                }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={4}>
                             <Link to={"/football"}> <Buttonforhome title={"Футбольное поле"}/></Link>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Link to={"/basketball"}>
                                <Buttonforhome title={"Баскетбольное поле"}/>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Link to={"golffield"}>
                                <Buttonforhome title={"Поле для гольфа"}/>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Link to={'/gym'}>
                                <Buttonforhome title={"Спортзал для качки"}/>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Link to={'/hockey'}>
                                <Buttonforhome title={"Хоккейная арена"}/>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Link to={'/bigtennis'}>
                                <Buttonforhome title={"Теннисный корт"}/>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

            </Box>

        </Container>
    );
};

export default Home;