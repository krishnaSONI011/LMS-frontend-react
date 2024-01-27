import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';
import { useAuth } from '../../components/context/authContext';
const NewUser = () => {
  const [auth,setAuth] = useAuth()
  const { email } = useParams();
  const navi = useNavigate();
const[data,setData] = useState([])
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email1, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function createUser() {
    try {
      const response = await axios.post('https://lms-backend-production-fcd7.up.railway.app/api/user/add-user', {
        firstname,
        lastname,
        email,
        password,
      });
      setData(response)
      if (response.data.status) {
        localStorage.setItem('auth', JSON.stringify(response.data.user));
        navi('/');
        toast.success(response.data.message, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setAuth(true)
        const userId = response.data.user.id
        const date = new Date()
        const day = date.getDate().toString(); 
        const year = date.getFullYear().toString(); 
        const month = (date.getMonth() + 1).toString();
        const attadenceResponse = await axios.post('https://lms-backend-production-fcd7.up.railway.app/api/attendence/send-attendence',{
            userId,
            year,
            month,
            day
        })
        if(attadenceResponse.data.status){
          toast.success(attadenceResponse.data.message,{
              position: 'bottom-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            })
      }
      }
      else if(!response.data.status){
        toast.error(response.data.message, {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
      }
    } catch (err) {
        
      console.error(err);
      toast.error(data, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  }
  React.useEffect(()=>{

      console.log(data)
  },[data])
  return (
    <React.Fragment>
      <div className="font-1 text-center text-lg py-4">Hi! Welcome</div>
      
        <div className="flex justify-center font-2">
          <input
            type={'text'}
            name="firstname"
            className="bg-gray-50 w-32 p-1 px-2 border rounded-md mx-4"
            placeholder="Ram"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type={'text'}
            name="lastname"
            className="bg-gray-50 w-32 p-1 px-2 border rounded-md mx-4"
            placeholder="Doe"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="text-center pt-4">
          <input
            type="email"
            name="email"
            className="bg-gray-50 p-3 border rounded-md w-72"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="text-center pt-4">
          <input
            type="password"
            name="password"
            className="bg-gray-50 p-3 border rounded-md w-72"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center pt-4">
          <button
            className="active:scale-95 duration-200 bg-[#e6f7ff] px-6 font-1 rounded-2xl py-4"
            onClick={createUser}
          >
            Submit
          </button>
        </div>
      
    </React.Fragment>
  );
};

export default NewUser;
