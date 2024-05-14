import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import { useNavigate} from "react-router-dom"


const Post = ({id, title, img, definition}) => {

    const navigate = useNavigate();

    const navigateToField = () =>{
        navigate(`/Rent/${id}`)
    };

    return (
        <Card sx={{ maxHeight: 246 }}>
            <CardActionArea onClick={navigateToField}>
                <CardMedia
                    component={"img"}
                    height={"140"}
                    image={`https://book-shop.fly.dev/api/files/Rent/${id}/${img[0]}`}
                    alt={"Pic"}
                    sx={{
                        height: "200px",
                    }}
                />
                <CardContent>
                    <Typography p={0} gutterBottom variant={"h5"} component={"div"} sx={{
                        color: "#5b5b5b",
                        fontFamily: "Roboto",
                        textAlign: "center",
                    }}>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Post;