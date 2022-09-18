import React from "react";
import {Typography} from "@mui/material";

import SignUpForm from "./SignUpForm";
import style from "./SignUp.module.css";

const SignUp = (props) => {
    return (
        <div className={style.mainContainer} id="signUp">

            <Typography textAlign="center">
                <h1 className={style.title}>
                    Working with POST request
                </h1>
            </Typography>

            {props.positions.length === 0 ? null :
                <SignUpForm positions={props.positions} isFetching={props.isFetching} submitUser={props.submitUser}/>
            }
        </div>
    );
}

export default SignUp;