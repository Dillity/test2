import React, {Fragment, useEffect, useState} from "react";
import {Card, Grid, Typography} from "@mui/material";

import altImg from "../../../assets/photo-cover.svg";
import style from "./SingleUser.module.css";

const SingleUser = (props) => {

    const [photoIsRight, setPhotoIsRight] = useState(true);

    useEffect(() => {
        if(props.photo.includes(".png")) {
            setPhotoIsRight(false);
        }
    }, [props.photo]);


    return (
        <Fragment>
            <Grid item xl={4} lg={4} md={6} sx={12} >
                <Card className={style.card}>
                    <img src={photoIsRight ? props.photo : altImg}  className={style.img}/>

                    <Typography className={style.name}><body>{props.name}</body></Typography>
                    <Typography className={style.content} textAlign="center">
                        <body>{props.position}</body>
                        <body>{props.email}</body>
                        <body>{props.phone}</body>
                    </Typography>
                </Card>
            </Grid>
        </Fragment>
    );
}

export default SingleUser;