import axios from "axios";
import React from "react";

import { LuTrash2 } from "react-icons/lu";
import { toast } from "react-toastify";

const MyTodo = (props) => {
  async function deleteFunc() {
    const id_todo = props.id;
    try {
      let response = await axios.delete(
        `https://lms-backend-production-fcd7.up.railway.app/api/todo/delete-todo/${id_todo}`
      );
      if (response) {
        toast.success(response.data.message , {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        props.setCount(props.count + 1);
        
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="px-4 mt-3 flex justify-evenly items-center">
        <div className="p-2 bg-slate-200 rounded">{props.text}</div>
        <button
          onClick={deleteFunc}
          className="bg-red-400 text-white hover:bg-red-500 p-3 rounded"
        >
          <LuTrash2 />
        </button>
      </div>
    </>
  );
};

export default MyTodo;
