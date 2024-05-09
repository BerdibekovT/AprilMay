import React, {useState} from 'react';
import {Grid, Container, Typography} from "@mui/material";
import PocketBase from "pocketbase";
import Post from "../Post/Post";

const Product = () => {

    const [loading, setLodaing] = useState(true);
    const [news, setNews] = useState([]);

    const pb = new PocketBase("https://book-shop.fly.dev/");

    const getNews = async ()=>{
        const result = await pb.collection("Rent").getList(1,50, {
            $autoCancel: false,
        });

        setNews(result);
        setLodaing(false);
    };

    useEffect(()=>{
        getNews();
    }, []);

    return (
        <Container>
            <Typography
                mt={2}
                pb={1}
                fontWeight={550}
                gutterBottom
                variant={"h7"}
                component={"div"}
            >
                Все помещения
            </Typography>

            <Grid container spacing={1.5}>
                {!loading ? (
                    news?.item?.map((e)=> (
                        <Grid key={e.id} item xs={12} sm={6} md={4}>
                            <Post id={e.id} subtitle={e.title} img={e.img}/>
                        </Grid>
                    ))
                ) : (
                    <p>
                        no file
                    </p>
                )}
            </Grid>
        </Container>
    );
};

export default Product;