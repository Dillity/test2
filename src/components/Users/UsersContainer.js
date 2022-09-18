import React, {useEffect} from "react";
import {connect} from "react-redux";

import {getCurrentPage, getIsLastPage, getSuccess, getUsersSelector} from "../../selectors/selectors";
import Users from "./Users";
import {getUsers} from "../../redux/users/usersThunk";
import {setPage} from "../../redux/users/usersAction";


const UsersContainerComponent = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage);
    }, [props.currentPage, props.success]);

    return (
        <Users {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        currentPage: getCurrentPage(state),
        isLastPage: getIsLastPage(state),
        success: getSuccess(state)
    }
}

export const UsersContainer = connect(mapStateToProps, {getUsers, setPage})(UsersContainerComponent);