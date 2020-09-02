import * as actionTypes from './actionTypes';
import {createUser} from "../../api/userApi"

export const userCreate = (data:{
        email:string,
        nickname:string,
        name:string,
        family_name:string
    },filterUserData:Function) => {
    return async (dispatch:any) => {
        await createUser(data)
        .then((res)=>{
            if(res === undefined){
                console.log("error")
            }else{
                dispatch(setUserData(filterUserData(res.data)))
            }
        })  
    };
};

export const setUser = (data:any) => {
    return async (dispatch:any) => {
        await dispatch(setUserData(data))
    };
};

export const setUserData = (data:any) => {
    return {
        type: actionTypes.SET_USER_DATA,
        data:data
    };
};

export const updateUserData = (data:any) => {
    return {
        type: actionTypes.UPDATE_USER_DATA,
        data:data
    };
};

export const deleteUser = () => {
    return {
        type: actionTypes.DELETE_USER,
    };
};

export const getAllUsers = (users:any) => {
    return {
        type: actionTypes.GET_ALL,
        users:users
    };
};

export const addMess = (mess:any) => {
    return {
        type: actionTypes.ADD_MESS,
        mess:mess
    };
};

export const addRoom = (room:any) => {
    return {
        type: actionTypes.ADD_ROOM,
        room:room
    };
};

export const addInitMess = (mess:any) => {
    return {
        type: actionTypes.ADD_INIT_MESS,
        mess:mess
    };
};

export const removeMess = () => {
    return {
        type: actionTypes.REMOVE_MESS
    }
}

export const initNotification = (initData:any) => {
    return {
        type: actionTypes.INIT_NOTIFICATION,
        initData:initData
    }
}

export const addNotification = (addData:any) => {
    return {
        type:actionTypes.ADD_NOTIFICATION,
        addData:addData
    }
}