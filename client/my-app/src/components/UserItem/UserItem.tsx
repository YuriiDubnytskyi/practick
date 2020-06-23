import React from 'react';
import "./UserItem.css"

interface IUserItemProps {
    nickname:string,
    email:string,
    startChat:Function
}

const UserItem: React.FunctionComponent<IUserItemProps> = (props:any) => {
    return (
        <div className='user-chat'>
            <p className='user-nickname'>{props.nickname}</p>
            <button className='btn--speak' onClick={()=>props.startChat(props.email)}>Chat+</button>
        </div>
    )
};

export default UserItem;