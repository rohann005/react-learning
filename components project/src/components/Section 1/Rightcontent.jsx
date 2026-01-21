import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (dets) => {
  return (
    <div className='w-3/4 flex gap-14 shrink-0 overflow-x-auto  '>
      {dets.user.map(function(elem ,idx){
        return <Rightcard key={idx} id={idx} img={elem.img}  tag={elem.tag} />
      }
    )}
      
      
    </div>
  )
}

export default Rightcontent