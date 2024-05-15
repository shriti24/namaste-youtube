import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list =["music", "romance", "popular"]
  return (
    <div>
      {list.map((name)=> 
      <Button name={name}/>)}
      </div>
  )
}

export default ButtonList