import React from 'react';
import Button from "@mui/material/Button";
import { Box, Container, Grid } from "@mui/material";
import FooterButton from "./footerButton";
import './footer.css'


const Footer = () => {
    return (
        <div className={"footer"}>
            <Container>
                <Box sx={{display: "flex"}}>
                    <Grid container  sx={{padding:5, flexDirection:"row", columnGap:10, }}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                            <FooterButton title={"Главная"}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FooterButton title={"О нас"}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FooterButton title={"Поддержка"}/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Footer;