import React from 'react'

const Avatar = (props) => {
  
  const handle = (index)=>{
    props.setActive(index)
    console.log(index)
    console.log(props.active)
  }
  return (
    <div className={`p-3 duration-200 ${props.active === props.in ? 'bg-red-100 rounded-lg' : ''}`} onClick={()=> handle(props.in)}>
        <img src={props.image} className={`duration-200 rounded-full  w-18 ${props.active === props.in ? 'scale-75' : ''}`} alt="" />
      </div>
  )
}

export default Avatar
