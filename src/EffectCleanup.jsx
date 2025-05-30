import React, { useState, useEffect } from 'react'

const EffectCleanup = () => {
    const [count, setCount] = useState(0)
   
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(x=>x+1);
        }, 1000)

        return () => clearInterval(interval)

    }, [])

    return (
        <div>
            conteur:{count}
            
        </div>
    )
}

export default EffectCleanup