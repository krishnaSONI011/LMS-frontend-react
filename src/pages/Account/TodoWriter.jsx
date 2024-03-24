import React, { useEffect, useState } from "react";
import MyTodo from "./MyTodo";
import axios from "axios";

const TodoWriter = (props) => {
  const [data, setData] = useState([]);
  const trigger = props.count;

  useEffect(() => {
    async function todoGetter() {
      try {
        const user = JSON.parse(localStorage.getItem("auth"));
        const userId = user.id;

        const response = await axios.post(
          "https://lms-backend-1-q2w4.onrender.com/api/todo/get-todo",
          { userId }
        );

        setData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }

    todoGetter();
  }, [trigger]);

  return (
    <>
      <div className="h-[150px]">
        <div className="h-full overflow-y-scroll scrollbar-hide">
          {data.map((t) => (
            <MyTodo
              key={t._id}
              text={t.text}
              id={t._id}
              count={props.count}  
              setCount={props.setCount}  
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoWriter;
