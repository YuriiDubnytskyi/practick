import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {INotificationRedux} from '../../interfaces/IRedux'

const initialState:INotificationRedux = {
    notifications:[]
};

const addNotification = (state:any,addData:any) => {
    state[0][addData] = state[0][addData] + 1
    return state 
}

const message = (state:INotificationRedux = initialState,action:any)=>{
    switch (action.type){
        case actionTypes.INIT_NOTIFICATION:
            return updateObject(state,{
                notifications:[action.initData]
            })
        case actionTypes.ADD_NOTIFICATION:
            return updateObject(state,{
                notifications:[...state.notifications,addNotification(state.notifications,action.addData)]
            })
        
        default: {
            return state
        }
    }
}

export default message