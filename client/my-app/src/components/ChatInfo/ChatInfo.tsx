import * as React from 'react';
import './ChatInfo.css'

interface IChatInfoProps {
    leaveRoom:Function,
    chatUser:string|undefined,
    name:string,
    mess:({
        mess:string,
        email:string
    })[],
    email:string,
    message:string,
    setMess:Function,
    keyPressed:any,
    sendMsg:Function
}

const ChatInfo: React.FunctionComponent<IChatInfoProps> = (props:IChatInfoProps) => {
  return (
    <div className=''>
        <header className='header-chat'>
            <div className="logo1"><p className="logo__text1">WebChat</p></div>
            <p className='header-p'>
                <button className='header-btn' onClick={()=>props.leaveRoom()}>EXIT CHAT</button>
            </p>
            <div className="logo2"><p className="logo__text2">WebChat</p></div>
        </header>  
        
        <div className='wrapper2'>
            <p className='title-room'>{props.chatUser}---{props.name}</p>
            <div className='chat-mess'>
                {props.mess.map((el:any)=>{ 
                    if(el.email === props.email){
                        return <p className='right-mess'>{el.mess}</p> 
                    }else{
                        return <p className='left-mess'>{el.mess}</p> 
                    }   
                })}
            </div>
            <div className='send-mess'>
                <textarea 
                    rows={3} 
                    className='send-mess_input' 
                    value={props.message} 
                    onChange={(e:any)=>props.setMess(e.target.value)} 
                    onKeyPress={props.keyPressed}>
                </textarea>
                <button className='send-mess_btn' onClick={()=>props.sendMsg()}>Send</button>
            </div>
        </div>
    </div>
  );
};

export default ChatInfo;
