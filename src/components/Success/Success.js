import React from "react";

import SuccessImage from "../../assets/success-image.svg";
import {Typography} from "@mui/material";

import style from "./Success.module.css";

const Success = (props) => {
    return (
        props.success &&
        <div className={style.container}>
            <Typography >
                <h1 className={style.successTitle}>User successfully registered</h1>
            </Typography>

                <img src={SuccessImage} alt="success"/>

        </div>
    );
}

export default Success;