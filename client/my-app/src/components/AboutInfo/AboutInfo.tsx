import * as React from 'react';
import "./AboutInfo.css"

interface IAboutInfoProps {
    update:boolean,
    family_name:string,
    name:string,
    nickname:string,
    setName:Function,
    setFamilyName:Function,
    setNickname:Function,
    saveUpdates:Function,
    setUpdate:Function,
    canselUpdates:Function,
    deleteAcount:Function
}

const AboutInfo: React.FunctionComponent<IAboutInfoProps> = (props:IAboutInfoProps) => {
  return (
            <div className='wrapper_about'> 
                <div className='about-container'>
                    <div>
                        <p className='title'>Your Account</p>
                        <p className='user-value'>Name -- {props.name}</p>
                        {props.update 
                                ?<input 
                                    className='user-value_input' 
                                    value={props.name} 
                                    name="name" 
                                    onChange={(e:any)=> props.setName(e.target.value)}/>
                                :<></>
                                }
                        <p className='user-value'>Surname -- {props.family_name}</p>
                        {props.update 
                                ? <input 
                                    className='user-value_input' 
                                    value={props.family_name} 
                                    name="family_name" 
                                    onChange={(e:any)=> props.setFamilyName(e.target.value)}/>
                                :<></>
                                }
                        <p className='user-value'>Nickname -- {props.nickname} users can find you</p>
                        {props.update 
                                ? <input 
                                    className='user-value_input' 
                                    value={props.nickname} 
                                    name="nickname" 
                                    onChange={(e:any)=> props.setNickname(e.target.value)}/>
                                :<></>}
                        {props.update 
                            ? <>
                                <br/>
                                <button className='btn btn--save' onClick={()=>props.saveUpdates()}>Save</button>
                                <button className='btn btn--cansel' onClick={()=>props.canselUpdates()}>Cancel</button>
                            </>
                            : <button className='btn btn--update' onClick={()=> props.setUpdate(true)}>Update</button> }
                    </div>
                    <div className='delete-container'>
                        <p className='sub-title'>Danger Zone</p>
                        <button  className='btn btn--delete' onClick={()=>props.deleteAcount()}>DELETE ACOUNT</button> 
                    </div> 
                </div>
            </div>
        )
};

export default AboutInfo;
