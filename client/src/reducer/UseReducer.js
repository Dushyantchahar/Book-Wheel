export const initialState = false;
export const reducer =(state,action)=>{
        // e.preventdefault();
    if(action.type==="USER"){
        return action.payload;
    }
    return state;
}