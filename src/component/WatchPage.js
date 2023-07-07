import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import { resetState } from '../utils/fetchSearchVideoSlice'
import LiveChat from './LiveChat';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() =>{
    dispatch(closeMenu());
    dispatch(resetState());
  },[])

  return (
    <div className='flex flex-col mb-12 w-full'>
    <div className='ml-10 m-8 flex justify-start'> 
     <div className='border-4'>
      <iframe width="1000" height="550" 
        src={"https://www.youtube.com/embed/"+searchParams.get('v')}
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
      </iframe>
      </div>
      <div className='shadow border border-black w-3/4 rounded-lg p-2 ml-1'>
       <LiveChat/>
      </div>
    </div>
    <CommentContainer/>
    </div>
    
  )
}

export default WatchPage