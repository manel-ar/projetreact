import React,{useEffect,useState} from 'react'

export const EffectComponent = () => {
   const [data, setData] = useState([])
   useEffect(() => {
    fetch("https://jsonplaceholder.org/posts")
    .then((res)=>res.json())
    .then((data)=>setData(data))

   }, [])
   
    
  return (
    <div>
        <h1>post</h1>
        <ul>
            {data.map((post)=><li>{post.title}</li>)}
        </ul>
        
    </div>
  )
}
