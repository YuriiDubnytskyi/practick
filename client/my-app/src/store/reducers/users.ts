import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState:any = {
    users:[]
};

const users = (state:any = initialState,action:any)=>{
    switch (action.type){
        case actionTypes.GET_ALL:
            return updateObject(state,{
                users:[...action.users]
            })
        default: {
            return state
        }
    }
}

export default users