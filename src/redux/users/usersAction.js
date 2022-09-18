import {GET_USERS, IS_FETCHING, IS_LAST_PAGE, SET_PAGE, SUBMIT_SUCCESS} from "./usersType";

export const setUsers = (users) => ({type: GET_USERS, users});
export const setPage = (page) => ({type: SET_PAGE, page});
export const setIsLastPage = (status) => ({type: IS_LAST_PAGE, status});
export const setSubmitSuccess = (status) => ({type: SUBMIT_SUCCESS, status});
export const setIsFetching = (status) => ({type: IS_FETCHING, status});
