import React from 'react';
import './header.css'
import Button from '@mui/material/Button';


const Header = () => {
    return (
        <div className={"header"}>
            <ul>
                <li>
                    <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text" >Главная</Button>
                </li>
                <li>
                    <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text">Поле</Button>
                </li>
                <li>
                    <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text">Спортзал</Button>
                </li>
                <li>
                    <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text">Корт</Button>
                </li>
                <li>
                    <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text">Бассейн</Button>
                </li>
                <li>
                    <Button sx={{color: "#5B5B5B", fontSize: "24px"}} variant="text">Каток</Button>
                </li>
            </ul>
        </div>
    );
};

export default Header;