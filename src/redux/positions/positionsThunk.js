import {positionsAPI} from "../../api/api";
import {setPositions} from "./positionsAction";

export const getPositions = () => (dispatch) => {
    positionsAPI.getPositions().then(response => {
        if(response.data.success) {
            dispatch(setPositions(response.data.positions));
        }
    })
}
