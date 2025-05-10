import React, { useState } from 'react'
import Button from './Button'

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>

    <p>{count}</p>
    {/* <button onClick={setCount(100)}>+</button> */}
    <button onClick={() => setCount(count+1)}>+</button>


      <h3>this is home page component</h3>
      <Button textInsideButton="register"/>
      <Button textInsideButton="login"/>
      <Button bgColor="yellow" textInsideButton="test"/>
      <Button textInsideButton={1} />
    </div>
  )
}

export default Home
