const initialState= {
    color:"#f50057"
}

function rootReducer(state = initialState, action){
    switch (action.type){ 
        case "SET_COLOR":
            return {
                color:action.payload
            }
        
        default:
        return state;
}
}

export default rootReducer;