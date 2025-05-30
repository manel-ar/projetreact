import React, { useState,useEffect } from 'react'

const EffectWithParams = () => {
    const[count,setCount]=useState(0)
    useEffect(() => {
      document.title=`le nombre de cliques est: ${count}`
    //   il faut que la fonction onclick change pour que count sexecute
    }, [count])
    
  return (
    <div>
        <p>vous avez cliquez {count} fois</p>
        <button onClick={()=>setCount(count+1)}>cliquez ici</button>
    </div>
  )
}

export default EffectWithParams