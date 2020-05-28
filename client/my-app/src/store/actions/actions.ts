import * as actionTypes from './actionTypes';

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