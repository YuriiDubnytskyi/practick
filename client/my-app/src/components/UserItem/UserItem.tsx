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
        <div className='Chattt'>
            <p className=''>{props.nickname}</p>
            <button className='ChButton' onClick={()=>props.startChat(props.email)}>Chat+</button>
        </div>
        //End -------------
    )
};



export default UserItem;