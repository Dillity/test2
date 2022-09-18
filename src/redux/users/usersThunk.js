import {tokenAPI, usersAPI} from "../../api/api";
import {setIsFetching, setIsLastPage, setPage, setSubmitSuccess, setUsers} from "./usersAction";

export const getUsers = (page) => (dispatch) => {
    usersAPI.getUsers(page).then(response => {
        if(response.data.links.next_url === null) {
            dispatch(setIsLastPage(true));
        }
        dispatch(setUsers(response.data.users));
    });
}

export const submitUser = (name, email, phone, position, photo) => (dispatch) => {
    dispatch(setIsFetching(true));
    tokenAPI.getToken().then(response => {
        if(response.data.success) {
            usersAPI.submitUser(response.data.token, name, email, phone, position, photo).then(response => {
                if(response.data.success) {
                    dispatch(setPage(1));
                    dispatch(setSubmitSuccess(true));
                }
            });
        }
        dispatch(setIsFetching(false));
    });
}