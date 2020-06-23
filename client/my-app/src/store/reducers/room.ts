import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {IRoomRedux} from '../../interfaces/IRedux'

const initialState:IRoomRedux = {
    room:''
};

const room = (state:IRoomRedux = initialState,action:any)=>{
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