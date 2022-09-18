import React, {useEffect} from "react";
import {connect} from "react-redux";

import SignUp from "./SignUp";
import {getIsFetching, getPositionsSelector} from "../../selectors/selectors";
import {getPositions} from "../../redux/positions/positionsThunk";
import {submitUser} from "../../redux/users/usersThunk";


const SignUpContainerComponent = (props) => {

    useEffect(() => {
        props.getPositions();
    }, []);


    return (
        <SignUp {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        positions: getPositionsSelector(state),
        isFetching: getIsFetching(state)
    }
}

export const SignUpContainer = connect(mapStateToProps, {getPositions, submitUser})(SignUpContainerComponent);