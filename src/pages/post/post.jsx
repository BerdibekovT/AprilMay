import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import { useNavigate} from "react-router-dom"


const Post = ({id, title, img, description}) => {

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
                    image={`https://book-shop.fly.dev/api/files/Rent/${id}/${img}`}
                    alt={"Pic"}
                />
                <CardContent>
                    <Typography p={0} gutterBottom variant={"h5"} component={"div"}>
                        {title}
                    </Typography>
                    <Typography p={0} variant={"body2"} color={"text.secondary"}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Post;