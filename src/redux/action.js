
export function setColor(values){
    return async function(dispatch){
        try{
            return dispatch({
                type:"SET_COLOR",
                payload: values
            })
        }catch{}
    }
}

export function setSettings(values){
    return async function(dispatch){
        try{
            return dispatch({
                type:"SET_SETTINGS",
                payload: values
            })
        }catch{}
    }

}