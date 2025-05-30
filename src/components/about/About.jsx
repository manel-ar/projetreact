import React from 'react'
import image from "./background.PNG"
import "./about.css"


const About = (props) => {
    const {name,age}=props
    const email=props.email
  return (
    <div className='about_us'>
        <h2>A propos de nous</h2>
        <p>Mon prenom est {name} , et j'ai {age},mon mail {email}</p>
        <img src={image} alt="Mon image de About" />
    </div>
  )
}

export default About