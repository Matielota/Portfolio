const initialState= {
    color:"#f50057",
    setting:"close"
}

function rootReducer(state = initialState, action){
    switch (action.type){ 
        case "SET_COLOR":
            return {
                ...state,
                color:action.payload
            }
            case "SET_SETTINGS":
                return {
                    ...state,
                setting:action.payload
                }
        default:
        return state;
}
}

export default rootReducer;