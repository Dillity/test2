import React from "react";
import {Grid, Typography} from "@mui/material";

import SingleUser from "./SingleUser/SingleUser";
import style from "./Users.module.css";

const Users = (props) => {

    const handleClick = () => {
        let newPage = props.currentPage + 1;
        props.setPage(newPage);
    }

    return (
        <div className={style.container} id="users">

            <Typography textAlign="center">
                <h1 className={style.title}>
                    Working with GET request
                </h1>
            </Typography>

            <Grid container justifyContent="center"
                  alignItems="center" className={style.mainGrid}>
                {props.users.map(user => (<SingleUser key={user.id} name={user.name} email={user.email} phone={user.phone} position={user.position} photo={user.photo} />))}
            </Grid>

            <div className={style.btn}>

                {!props.isLastPage &&
                    <button onClick={handleClick}>Show more</button>
                }
            </div>
        </div>
    );
}

export default Users;