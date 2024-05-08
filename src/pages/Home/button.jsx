import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Buttonforhome = ({title}) => {
    return (
        <div>
            <Button variant="outlined" sx={{
                color: "#5B5B5B",
                fontSize:"16px",
                border: "4px solid #5b5b5b",
                padding: 5,
                width: "100%",
                borderRadius: "16px",
                ":hover":{
                    color:"white",
                    background:"#5b5b5b",
                    border: "4px solid #5b5b5b",
                }
            }}> {title} </Button>
        </div>
    );
};

export default Buttonforhome;