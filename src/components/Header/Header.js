import React from "react";

import {Container, Grid} from "@mui/material";

import Logo from "../../assets/Logo.svg";
import style from "./Header.module.css";


const Header = (props) => {
    return (

<div className={style.mainContainer}>
        <Container className={style.container}>
            <Grid container>
                <Grid item flexGrow={1} className={style.img}>
                    <img src={Logo}/>
                </Grid>
                <Grid item>
                    <button className={style.btn}><a href="#users">Users</a></button>
                    <button className={style.btn}><a href="#signUp">Sign Up</a></button>
                </Grid>
            </Grid>
        </Container>
</div>
    )
}

export default Header;