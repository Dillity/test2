import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import usersReducer from "./users/usersReducer";
import positionsReducer from "./positions/positionsReducer";

let reducers = combineReducers({
    users: usersReducer,
    positions: positionsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;