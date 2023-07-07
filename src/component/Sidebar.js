import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
 
  if(!isMenuOpen) return null 
  return (
    <div className='w-48'>
        <section className='shadow-lg p-2'>
          <ul>
            <li><Link to="/" className='hover:underline visited:text-purple-800 hover:text-bold'>Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>Originals</li>
          </ul> 
        </section>
        <section className='shadow-lg p-2'>
          <ul>
            <li>Library</li>
            <li>History</li>
            <li>Watch later</li>
            <li>Downloads</li>
          </ul> 
        </section>
    </div>
  )
}

export default Sidebar