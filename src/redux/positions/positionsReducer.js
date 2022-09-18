import {GET_POSITIONS} from "./positionsType";


let initialState = {
    positions: []
}

const positionsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POSITIONS:
            return {
                ...state,
                positions: action.positions
            }

        default:
            return state;
    }
}

export default positionsReducer;