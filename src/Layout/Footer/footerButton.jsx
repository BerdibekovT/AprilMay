import React from 'react';
import Button from "@mui/material/Button";

const FooterButton = ({title}) => {
    return (
        <>
            <Button variant="text" sx={{
                color: "#5B5B5B",
                fontSize:"12px",
            }}> {title} </Button>
        </>
    );
};

export default FooterButton;