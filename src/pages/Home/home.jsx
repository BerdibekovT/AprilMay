import React from 'react';
import './home.css'
import castle from "../../pics/minecraft-castle.png"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Home = () => {
    return (
        <>
            <div className={"home"}>
                <div className={"homediv"}>
                    <p>
                        Занимайте помещения только у нас. Низкие цены а также скидки для постоянных клиентов!
                    </p>
                </div>
                <img src={castle} alt=""/>
            </div>
            <div className={"div2home"}>
                <h2>
                    Оформите подписку!
                </h2>
                <div className={"subs"}>
                    <div className={"sub"}>
                        <h5>
                            Ежемесячная <br/>подписка
                        </h5>
                        <p>
                            Lorem dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                        </p>
                    </div>
                    <div className={"sub"}>
                        <h5>
                            Ежемесячная <br/>подписка
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!                        </p>
                    </div>
                    <div className={"sub"}>
                        <h5>
                            Ежемесячная <br/>подписка
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum provident sint!                        </p>
                    </div>
                </div>
            </div>
            <div className={"div3home"}>
                <h2>
                    Все наши услуги
                </h2>
                <div className={"div3buttons"}>
                    <div className={"buttonrow"}>
                        <Stack direction="row" spacing={8}>
                            <Button sx = {{
                                width: 304,
                                height: 208,
                                color: "#5B5B5B",
                                borderRadius: "36px",
                                border: 3,
                                borderColor: "#5B5B5B",
                                fontSize: "24px",
                                textAlign: "center",
                                ":hover": {
                                    width: 304,
                                    height: 208,
                                    color: "#ffffff",
                                    borderRadius: "36px",
                                    border: 3,
                                    borderColor: "#5B5B5B",
                                    fontSize: "24px",
                                    textAlign: "center",
                                    background: "#5B5B5B"
                                }
                            }} variant="outlined" href="#outlined-buttons">
                                Футбольное поле
                            </Button>
                            <Button sx = {{
                                width: 304,
                                height: 208,
                                color: "#5B5B5B",
                                borderRadius: "36px",
                                border: 3,
                                borderColor: "#5B5B5B",
                                fontSize: "24px",
                                textAlign: "center",
                                ":hover": {
                                    width: 304,
                                    height: 208,
                                    color: "#ffffff",
                                    borderRadius: "36px",
                                    border: 3,
                                    borderColor: "#5B5B5B",
                                    fontSize: "24px",
                                    textAlign: "center",
                                    background: "#5B5B5B"
                                }
                            }} variant="outlined" href="#outlined-buttons">
                                Баскетбольное поле
                            </Button>
                            <Button sx = {{
                                width: 304,
                                height: 208,
                                color: "#5B5B5B",
                                borderRadius: "36px",
                                border: 3,
                                borderColor: "#5B5B5B",
                                fontSize: "24px",
                                textAlign: "center",
                                ":hover": {
                                    width: 304,
                                    height: 208,
                                    color: "#ffffff",
                                    borderRadius: "36px",
                                    border: 3,
                                    borderColor: "#5B5B5B",
                                    fontSize: "24px",
                                    textAlign: "center",
                                    background: "#5B5B5B"
                                }
                            }} variant="outlined" href="#outlined-buttons">
                                Хоккейная арена
                            </Button>
                        </Stack>
                    </div>
                    <div className={"buttonrow"}>
                        <Stack direction="row" spacing={8}>
                            <Button sx = {{
                                width: 304,
                                height: 208,
                                color: "#5B5B5B",
                                borderRadius: "36px",
                                border: 3,
                                borderColor: "#5B5B5B",
                                fontSize: "24px",
                                textAlign: "center",
                                ":hover": {
                                    width: 304,
                                    height: 208,
                                    color: "#ffffff",
                                    borderRadius: "36px",
                                    border: 3,
                                    borderColor: "#5B5B5B",
                                    fontSize: "24px",
                                    textAlign: "center",
                                    background: "#5B5B5B"
                                }
                            }} variant="outlined" href="#outlined-buttons">
                                Теннисный корт
                            </Button>
                            <Button sx = {{
                                width: 304,
                                height: 208,
                                color: "#5B5B5B",
                                borderRadius: "36px",
                                border: 3,
                                borderColor: "#5B5B5B",
                                fontSize: "24px",
                                textAlign: "center",
                                ":hover": {
                                    width: 304,
                                    height: 208,
                                    color: "#ffffff",
                                    borderRadius: "36px",
                                    border: 3,
                                    borderColor: "#5B5B5B",
                                    fontSize: "24px",
                                    textAlign: "center",
                                    background: "#5B5B5B"
                                }
                            }} variant="outlined" href="#outlined-buttons">
                                Бассейн
                            </Button>
                            <Button sx = {{
                                width: 304,
                                height: 208,
                                color: "#5B5B5B",
                                borderRadius: "36px",
                                border: 3,
                                borderColor: "#5B5B5B",
                                fontSize: "24px",
                                textAlign: "center",
                                ":hover": {
                                    width: 304,
                                    height: 208,
                                    color: "#ffffff",
                                    borderRadius: "36px",
                                    border: 3,
                                    borderColor: "#5B5B5B",
                                    fontSize: "24px",
                                    textAlign: "center",
                                    background: "#5B5B5B"
                                }
                            }} variant="outlined" href="#outlined-buttons">
                                Гольф поле
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;