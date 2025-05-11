import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    //type 1
    //useEffect(()=>{},[]); first ma funciton second ma dependency
    //dependency ma kei caina vane first ma site load or reload hune bela run hunca- like showiwng feed when opeing fb

    // type2
    // useEffect(()=>{},[statename]);
    // can take multiple states , tyo state change huda cahi yo run hunxa plus first time ni


    // type3
    // useEffect(()=>{

    // }); dependency hunna , site ma j change aayei ni yo trigger hunxa, it hamoers the performance


    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('trigered')
    },[count])
  return (
    <div>
      <h4>use effect -- {count}</h4>
      <button onClick={()=>{
        setCount(count+1)
      }}>+</button>
    </div>
  )
}

export default UseEffect
