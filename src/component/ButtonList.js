import React from 'react';
import Button from './Button';

const buttonNames = ['All', 'Music', 'Mix', 'Mantras', 'Live', 'Meditation Music', "Motivation Music", "Movie Musical"]

const ButtonList = () => {
  return (
    <div>
      {
        buttonNames.map((item, index) => <Button key ={index} name={item}/>)
      }
    </div>
  )
}

export default ButtonList