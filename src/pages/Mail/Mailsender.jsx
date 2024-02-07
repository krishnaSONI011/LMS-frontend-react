import React,{useState} from 'react'
import axios from 'axios'
import MailerProfile from './MailerProfile'
import Mailwriter from './Mailwriter'
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react'
const Mailsender = () => {
  const [reciverData,setReciverData] = useState([])
  const {search} = useLocation()
  const queryParams = new URLSearchParams(search);
  const page_id = queryParams.get('page_id')
  const reciver_id = queryParams.get('reciver_id')
  async function getReciversData(){
    try {
        const userId = reciver_id
        const response = await axios.get(`http://localhost:8080/api/user/get-user/${userId}`)
        setReciverData(response.data.user )
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
  getReciversData()
},[])
  return (
    <div className='flex'>
  {
    page_id === '0' ? 
    <MailerProfile online={reciverData.online} name={reciverData.firstname + ' ' +reciverData.lastname }  email={reciverData.email}/> : <span></span>}
      <Mailwriter page_id={page_id}/>
    </div>
  )
}

export default Mailsender
