import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Buttonforhome = () => {
    return (
        <div>
            <Button variant="outlined" sx={{
                color: "#5B5B5B",
                fontSize:"24px",
                border: "4px solid #5b5b5b",
                padding: 10,
                ":hover":{
                    color:"white",
                    background:"#5b5b5b",
                    border: "4px solid #5b5b5b",
                }
            }}> Футбольное поле </Button>
        </div>
    );
};

export default Buttonforhome;