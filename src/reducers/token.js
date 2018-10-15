import {TOKEN,TOKEN_ERROR,DELETE_TOKEN,DELETE_TOKEN_ERROR,SET_CURRENT_USER} from '../actions/movies';

const initialState={
    user:"",
    error:"",
    login:false
}

export default (state=initialState,action)=>{
    switch (action.type){
        case TOKEN:
            return {
                ...state,
                user:action.payload,
                login: action.payload !== undefined ? true : false          
            }
        case TOKEN_ERROR:
            return{
                ...state,
                error:action.payload
            }
        case DELETE_TOKEN:
            return {
                ...state,
                user:action.payload,
                login:false          
            }
        case DELETE_TOKEN_ERROR:
            return{
                ...state,
                error:action.payload
            }
        case SET_CURRENT_USER:
            return{
                ...state,
                user:action.payload,
                login:true
            }
        default:
            return state;
    }
}