import React, {useState} from 'react';
import ChatMessage from './ChatMessage';
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import {generateName, generateMessage} from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messages);
  const [liveMsg, setLiveMsg] = useState("");
  
useEffect(() => {
  const timer = setInterval(() => {
    dispatch(addMessage({
      id: Math.random(),
      name: generateName(),
      text: generateMessage(20) + '.'
    }))
  }, 3000);

  () => {
    clearInterval(timer);
  }

}, []);

 
  return (
   <form  onSubmit={(e)=>{
    e.preventDefault(); 
    dispatch(addMessage({
      id:Math.random(),
      name:'Anvi',
      text:liveMsg
    }));
    setLiveMsg("")

  }}>
    <div className='h-[500px] overflow-y-scroll overflow-hidden flex flex-col-reverse'>
      {
        chatMessages.map(c => <ChatMessage 
          key = {c.id}
          name= {c.name}
          message= {c.text}
        />)
      }
      
    </div>
    <div>
        <input className='border border-black rounded w-80 p-2' 
          value={liveMsg} 
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button type="submit" className='p-2 bg-green-100'>Send</button>
      </div>
  </form>
  )
}

export default LiveChat