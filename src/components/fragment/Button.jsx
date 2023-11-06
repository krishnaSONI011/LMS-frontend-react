import React  from "react";

const Button = ({children})=>{
    return <button className='bg-black text-white py-2 px-10    rounded-lg text-lg'> {children} </button>
}
export default Button;