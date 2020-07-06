import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {IUsersRedux, IUserRedux} from '../../interfaces/IRedux'

const initialState:IUsersRedux = {
    users:[]
};

const users = (state:IUsersRedux = initialState,action:any)=>{
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