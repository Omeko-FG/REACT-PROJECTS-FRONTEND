import React from 'react'
import Question from './Question';


const Accord = ({data}) => {
    console.log(data)
  return (
    <div className='row'>
    {
       data.map(item => <Question key={item.id} {...item} />)
    }
</div>  )
}

export default Accord