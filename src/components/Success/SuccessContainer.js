import React from "react";
import {getSuccess} from "../../selectors/selectors";
import {connect} from "react-redux";
import Success from "./Success";

let mapStateToProps = (state) => {
    return {
        success: getSuccess(state)
    }
}

export const SuccessContainer = connect(mapStateToProps, null)(Success);