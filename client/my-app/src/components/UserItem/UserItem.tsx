import React from 'react';
import "./UserItem.css"

interface IChatItemProps {
    nickname:any,
    email:any,
    startChat:any
}

const UserItem: React.FunctionComponent<IChatItemProps> = (props:any) => {
    return (
        //Style --------------
        <div className='user-chat'>
            <p className='user-nickname'>{props.nickname}</p>
            <button className='btn--speak' onClick={()=>props.startChat(props.email)}>Chat+</button>
        </div>
        //End -------------
    )
};



export default UserItem;