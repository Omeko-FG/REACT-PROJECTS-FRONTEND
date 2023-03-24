import React, { useState } from 'react'
import questions from '../helpers/data';
import { arrowdown, arrowup } from '../helpers/icons';
import Card from './Question';

const Question = ({id,question,answer}) => {

  const [show,setShow] = useState(false)

  const handleToggle =()=>{
 
   setShow(!show)

  }
  
  return (
    <div>
     { show ? (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}.{question}
            </h5>
            <button onClick={handleToggle}>{arrowup}</button>
          </div>
          <p>{answer}</p>
        </div>
      ):(<div className="card">
      <div className="ques">
        <h5>
          {id}.{question}
        </h5>
        <button onClick={handleToggle}>{arrowdown}</button>
      </div>
    </div>)}
       
    </div>
  )
}

export default Question