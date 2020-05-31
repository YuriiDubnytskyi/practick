import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState:any = {
    room:''
};

const room = (state:any = initialState,action:any)=>{
    switch (action.type){
        case actionTypes.ADD_ROOM:
            return updateObject(state,{
                room:action.room
            })
        default: {
            return state
        }
    }
}

export default room