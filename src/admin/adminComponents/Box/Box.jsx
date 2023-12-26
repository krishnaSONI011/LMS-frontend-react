import React 
 from "react";

 const Box =props=>{
    return(
        <>
        <div className="bg-color-2 rounded-lg">
            <div className="p-4">
                 <p className="text-white text-xl">{props.title}</p>
                 <p className="text-center text-white text-xl">0</p>
            </div>
        </div>
        </>
    )
 }
 export default Box;