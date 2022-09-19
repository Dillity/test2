import React, {Fragment, useEffect, useState} from "react";
import {Card, Grid, Tooltip, Typography} from "@mui/material";

import altImg from "../../../assets/photo-cover.svg";
import style from "./SingleUser.module.css";

const SingleUser = (props) => {

    const [photoIsRight, setPhotoIsRight] = useState(true);

    useEffect(() => {
        if(props.photo.includes(".png")) {
            setPhotoIsRight(false);
        }
    }, [props.photo]);

    const handleCopy = (email) => {
        navigator.clipboard.writeText(email);
    }

    return (
        <Fragment>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12} className={style.gridItem}>
                <Card className={style.card}>
                    <img src={photoIsRight ? props.photo : altImg} alt="user"  className={style.img}/>

                    <Typography className={style.name}><body>{props.name}</body></Typography>
                    <Typography className={style.content} textAlign="center">
                        <body>{props.position}</body>
                        <Tooltip title={props.email}>
                            <body onClick={() => {handleCopy(props.email)}}>{props.email}</body>
                        </Tooltip>
                        <body>{props.phone}</body>
                    </Typography>
                </Card>
            </Grid>
        </Fragment>
    );
}

export default SingleUser;