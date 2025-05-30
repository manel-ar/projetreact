import React from 'react'
import "./calcul.css"
const Calcul = (props) => {
    const {module1,module2}=props
    const moyenne=(module1+module2)/2
  return (
    <div>
        <input type="text" name="valeur1" id='val1' />
        <input type="text" name="valuer2" id='val2'/>
        
        <h3>
  La moyenne de <span className="mod1">{module1}</span> et <span className="mod2">{module2}</span> est : 
  <span className={moyenne >= 10 ? 'mod2' : 'mod1'}> {moyenne} </span>
</h3>
    </div>
  )
}

export default Calcul