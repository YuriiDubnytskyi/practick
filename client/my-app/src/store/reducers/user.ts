import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { IUserRedux } from '../../interfaces/IRedux';

const initialState:IUserRedux = {
    id:'',
    name:'',
    email:'',
    nickname:'',
    family_name:'',
    isAuth:false
};

const user = (state:IUserRedux = initialState,action:any)=>{
    switch (action.type){
        case actionTypes.SET_USER_DATA:
            return updateObject(state,{
                id:action.data.id,
                name:action.data.name,
                email:action.data.email,
                nickname:action.data.nickname,
                family_name:action.data.family_name,
                isAuth:true
            })
        case actionTypes.UPDATE_USER_DATA:
            return updateObject(state,{
                name:action.data.name,
                nickname:action.data.nickname,
                family_name:action.data.family_name,
            })
        case actionTypes.DELETE_USER:
            return updateObject(state,{
                id:0,
                name:'',
                email:'',
                nickname:'',
                family_name:'',
                isAuth:false
        })
        default: {
            return state
        }
    }
}

export default user