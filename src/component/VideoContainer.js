import React, { useEffect, useState } from 'react';
import {YOUTUBE_API} from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
const [videos, setVideos] = useState([]);
const searchVideoItems = useSelector((state) => state.searchVideo);
const searchVidQuery = (!searchVideoItems.loading && searchVideoItems.data.items != undefined)

  useEffect(() => {
    getVideo();
  }, [])


  useEffect(() => {
    getSearchVideos();
  }, [searchVidQuery]);


  const getVideo = async() => {
      const data =  await fetch(YOUTUBE_API);
      const json = await data.json();
       setVideos(json.items);
       
    }
    

  const getSearchVideos = async() => {
    (searchVideoItems.data.items != undefined) ? (setVideos(searchVideoItems.data.items))
                                              : null
  }

  return (
    
    <div className='flex flex-wrap'>
     
      {
        
        (searchVideoItems.data.items != undefined) ? (
          
            videos.map((item, index) => (
              <Link to={"/watch?v="+(item.id.videoId || item.id.channelId)} key={(item.id.videoId || item.id.channelId)}>
              <div className='w-72 shadow p-2 m-2'>
                <img className='rounded-lg' alt="thumbnail" src={item.snippet.thumbnails.high.url}/>
                <ul>
                    <li className='font-bold py-2'>{item.snippet.title}</li>
                    <li>{item.snippet.channelTitle}</li>
                    <li>{item.id.videoId || item.id.channelId}</li>
                    <li>{"/watch?v="+(item.id.videoId || item.id.channelId)}</li>
                </ul>
              </div>
            </Link>
            ))
          ) : (<>
        {
          videos.map((item, index)=>(
            <Link to={"/watch?v="+item.id} key={item.id} ><VideoCard info={item}/></Link>
          ))
        }
      </>)
      }
    </div>
  )

}
export default VideoContainer

// <Link to={"/watch?v="+item.id} key={item.id} ><VideoCard info={item}/></Link>