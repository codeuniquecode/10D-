import React, { useState } from 'react'

const Color = () => {
    const [color, setColor] = useState("red");
  return (
    <div>
      <h3>mine fav color is {color}</h3>
      <button onClick={()=>{
        setColor("blue")
      }}>blue</button>

    <button onClick={()=>{
        setColor("yellow")
    }}>Yellow</button>




    </div>
  )
}

export default Color
