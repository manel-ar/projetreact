import React, { useState } from 'react'



const Use_hooks = () => {
    
    const [count,setCount]=useState(0);

    const incrementer=()=>{
        setCount(count+1)
        
    }
    

    return (
    <div className=''>
        <h1>compteur : {count}</h1>
        <button onClick={incrementer}>increment</button>
        <button onClick={()=>{setCount(count-1)}}>decrement</button>

    </div>
  )
}

export default Use_hooks