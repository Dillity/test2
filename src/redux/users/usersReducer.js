import {GET_USERS, IS_FETCHING, IS_LAST_PAGE, SET_PAGE, SUBMIT_SUCCESS} from "./usersType";

let initialState = {
    users: [],
    currentPage: 1,
    isLastPage: false,
    submitSuccess: false,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        case IS_LAST_PAGE:
            return {
                ...state,
                isLastPage: action.status
            }

        case SUBMIT_SUCCESS:
            return {
                ...state,
                submitSuccess: action.status
            }

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }

        default:
            return state;
    }
}

export default usersReducer;
