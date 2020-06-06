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
        <div className=''>
            <p className=''>{props.nickname}</p>
            <button className='' onClick={()=>props.startChat(props.email)}>Chat+</button>
        </div>
        //End -------------
    )
};



export default UserItem;