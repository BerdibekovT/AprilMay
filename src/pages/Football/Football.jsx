import React, {useEffect, useState} from 'react';
import PocketBase from 'pocketbase'
import {Grid, Container, Typography } from "@mui/material";

const Football = () => {

    const [loading, setLoading] = useState(true);
    const [field, setField] = useState([]);

    const pb = new PocketBase("https://book-shop.fly.dev/");

    const getField = async () => {
        const Result = await pb.collection("Rent").getList(1, 50, {
            $autoCancel: false,
        });

        setField(Result);
        setLoading(false);
    };

    useEffect(()=>{
        getField();
    }, []);

    return (
        <>

        </>
    );
};

export default Football;