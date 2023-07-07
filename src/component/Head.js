import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { SERACH_API} from '../utils/constant';
import { cacheResult } from '../utils/searchSlice';
import { fetchSearchVideoAction } from '../utils/fetchSearchVideoSlice'


const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowsuggestion] = useState(false);
  const searchCache = useSelector(store => store.search);


 const getSearchVideo = async() => {
   if(searchQuery.length > 0) dispatch(fetchSearchVideoAction(searchQuery))
    setShowsuggestion(false); 
    setSearchQuery("");
  }

  useEffect(()=>{ 
    const timer = setTimeout(()=> {
      if(searchCache[searchQuery]){
        setSuggestion(searchCache[searchQuery])
      }else{
        getSearchSuggetionResult()
      }
    }, 200);

    return ()=>{
      clearTimeout(timer);
    }

  }, [searchQuery])

  const getSearchSuggetionResult = async() => {
    const data =  await fetch(SERACH_API+searchQuery);
    const json =  await data.json();
    setSuggestion(json[1]);
    dispatch(cacheResult({
      [searchQuery]:json[1]
       //iphone:[1,2,3]
    }))
  }
 
  const newLocal = 'Search';
  return (
    <div className='grid grid-flow-col shadow mt-1 p-1'>
      <div className='col-span-1 flex'>
         <img alt="menu" className="h-6 my-2 mx-2 cursor-pointer" 
         onClick={()=>dispatch(toggleMenu())}
         src="https://www.svgrepo.com/show/506800/burger-menu.svg"/>
         <img alt="logo" className="h-6 my-2 ml-9" 
         src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"/>
      </div>
      <form className='col-span-10' 
      onSubmit={(e) => {
        e.preventDefault();
        getSearchVideo();
      }}
      
      >
        <div className='flex my-1'>
          <input className='w-1/2 border border-gray-400 rounded-l-full p-1 px-2' type="text" 
                placeholder="Search"
                value={searchQuery} 
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={() => setShowsuggestion(true)}
                >
          </input>
          <button className='border border-gray-400 rounded-r-full w-16 bg-gray-200 flex justify-center'>
            <img className='w-4 h-4 mt-2' src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"/>
          </button>
         
        </div>
        {
          (suggestion.length != 0 && showSuggestion) && (
            <div className='bg-white absolute shadow w-[36rem] border border-gray-400 rounded-lg'>
                <ul>
                  { suggestion.map((item, index) => {
                   return (
                    <li className="w-full py-2 px-2 shadow-sm hover:bg-gray-100" key={index} onClick={() => {
                      setSearchQuery(item);
                      getSearchVideo();
                    }}>{item}</li>
                     
                   )
                   
                  })}    
                </ul>
                
           </div>
          )
        }
       
      </form>
     
      <div className='col-span-1 mt-1'>
        <span className='border rounded-full p-1 text-xl border-black cursor-pointer'>👤</span>
      </div>
    </div>
  )
}

export default Head