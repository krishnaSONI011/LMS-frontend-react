import React from "react";
import MyTodo from "./MyTodo";

const TodoWriter = ()=>{
    return(
        <>
        <div className="h-[150px]">
            <div className="h-full overflow-y-scroll">
             <MyTodo />
            </div>
        </div>
        </>
    )
}
export default TodoWriter;