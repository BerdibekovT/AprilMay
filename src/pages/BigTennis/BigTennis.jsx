import React, {useEffect, useState} from 'react';
import PocketBase from 'pocketbase'
import {Grid, Container, Typography } from "@mui/material";
import Post from "../post/post";

const BigTennis = () => {

    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(0);
    const [field, setField] = useState([]);

    const pb = new PocketBase("https://book-shop.fly.dev/");

    const getField = async () => {
        const Result = await pb.collection("Rent").getList(1, 50, {
            $autoCancel: false,
            filter:'categor_id = "big_tennis12345"'
        });
        setField(Result);
        setLoading(false);
    };

    useEffect(()=>{
        getField();
    }, []);

    return (
        <>
            <Container>
                <Grid container spacing={1.5}>
                    {!loading?(
                        field?.items?.map((e)=>(
                            <Grid key={e.id} item xs={12} sm={6} md={4}>
                                <Post id={e.id} title={e.title} img={e.img}/>
                            </Grid>
                        ))
                    ) : (
                        <Typography sx={{fontSize:"24px"}}>
                            L0adiNgg......
                        </Typography>
                    )
                    }
                </Grid>
            </Container>
        </>
    );
};

export default BigTennis;