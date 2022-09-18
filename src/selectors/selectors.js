export const getUsersSelector = (state) => {
    return state.users.users
}
export const getCurrentPage = (state) => {
    return state.users.currentPage
}
export const getIsLastPage = (state) => {
    return state.users.isLastPage
}
export const getPositionsSelector = (state) => {
    return state.positions.positions
}
export const getSuccess = (state) => {
    return state.users.submitSuccess
}
export const getIsFetching = (state) => {
    return state.users.isFetching
}