import React from 'react';
import './home.css'
import castle from "../../pics/minecraft-castle.png"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

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
                    Все виды спорта
                </h2>
                <div className={"div3buttons"}>
                    <Accordion sx={{
                        color: "#5B5B5B",
                        border: "3px solid #5B5B5B",
                        width: "789px",
                        fontSize: "48px",
                        borderRadius: "36px",
                        textAlign: "center",
                        marginTop: "33px",
                        marginLeft: "150px"
                    }}>
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header">
                            <p>
                                Футбол
                            </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nam perspiciatis reiciendis repellat tempore.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        color: "#5B5B5B",
                        border: "3px solid #5B5B5B",
                        width: "789px",
                        fontSize: "48px",
                        borderRadius: "36px",
                        textAlign: "center",
                        marginTop: "33px",
                        marginLeft: "150px"
                    }}>
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header">
                            <p>
                                Футбол
                            </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nam perspiciatis reiciendis repellat tempore.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        color: "#5B5B5B",
                        border: "3px solid #5B5B5B",
                        width: "789px",
                        fontSize: "48px",
                        borderRadius: "36px",
                        textAlign: "center",
                        marginTop: "33px",
                        marginLeft: "150px"
                    }}>
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header">
                            <p>
                                Футбол
                            </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nam perspiciatis reiciendis repellat tempore.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        color: "#5B5B5B",
                        border: "3px solid #5B5B5B",
                        width: "789px",
                        fontSize: "48px",
                        borderRadius: "36px",
                        textAlign: "center",
                        marginTop: "33px",
                        marginLeft: "150px"
                    }}>
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header">
                            <p>
                                Футбол
                            </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nam perspiciatis reiciendis repellat tempore.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default Home;