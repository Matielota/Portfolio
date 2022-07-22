
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