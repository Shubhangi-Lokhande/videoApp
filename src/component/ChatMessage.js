import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex p-2 bg-gray-100 my-1'>
       <img className='h-8 w-8 border border-black rounded-full p-1' alt="user" 
        src="https://cdn-icons-png.flaticon.com/128/456/456212.png"/>
        <div className='ml-2'>
            <span className='font-bold text-sm '>{name}</span>  
            <span className='px-2 text-sm'>{message}</span> 
        </div>
     
    </div>
  )
}

export default ChatMessage