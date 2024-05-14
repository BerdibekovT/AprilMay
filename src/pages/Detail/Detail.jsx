import React, {useEffect, useState} from 'react';
import { NavLink, useParams} from "react-router-dom";
import PocketBase from 'pocketbase';
import { Box, CircularProgress, Container, Typography, AppBar, Link } from "@mui/material";
import './detail.css'


const Detail = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const param = useParams();
    const pb = new PocketBase("https://book-shop.fly.dev/");

    const getPost = async ()=>{
        const result = await pb.collection("Rent").getOne(param.id, {
            $autoCancel: false,
        });
        setPost(result);
        console.log(result);
        setLoading(false);
    };

    useEffect(()=>{
        getPost();
    }, []);

    return (
        <>
            {!loading ? (
                <>
                    <Container className={"details"}>
                        <div style={{
                            display: "flex",
                            columnGap: "20px"
                        }}>
                            <img
                                height={350}
                                src={`https://book-shop.fly.dev/api/files/Rent/${post.id}/${post.img[0]}`}
                                alt=""
                            />
                            <img
                                height={350}
                                src={`https://book-shop.fly.dev/api/files/Rent/${post.id}/${post.img[1]}`}
                                alt=""
                            />
                        </div>
                        <div>
                            <div className={"detaildescription"} style={{
                                fontSize:"25px",
                                color:"#5b5b5b",
                                fontFamily: "Roboto",
                                textAlign: "left",
                                paddingTop: "100px"
                            }} dangerouslySetInnerHTML={{__html:post.definition_,}}>
                            </div>
                            <h3> Цена: {post.price} сом</h3>
                        </div>
                    </Container>
                </>
            ) : (
                <Box sx={{
                    display: "flex",
                    justifyContent:"center",
                    alignItems: "center",
                    height: "100px",
                    fontSize: "30px",
                    color:"#5b5b5b",
                    fontWeight: "400"
                }}>
                    Загрузка... &nbsp;
                    <CircularProgress/>
                </Box>
            )}

        </>
    );
};

export default Detail;