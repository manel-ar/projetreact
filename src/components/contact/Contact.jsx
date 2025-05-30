import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    
        <form className='form'>
            <label className=''>Votre Nom </label>
            <input type="text" placeholder='Nom' /><br />
            
            <label className=''>Votre Prenom </label>
            <input type="text" placeholder='Prenom' /><br />

            <label>Votre mot de passe </label>
            <input type="password" placeholder='password' /><br />

            <label>Votre E-mail </label>
            <input type="email" placeholder='E mail' /><br />

            <input type="submit" name='Envoyer' />
        </form>
    
  )
}

export default Contact