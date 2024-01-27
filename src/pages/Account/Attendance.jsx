import React,{useState} from 'react'
import DayBlock from './DayBlock';
import axios from 'axios';
const Attendance = () => {
     React.useEffect(()=>{
      getAttendence()
     },[]);
     const date = new Date()
     const [data,setData] = useState([])
    async function getAttendence(){
      try{
        const user = JSON.parse(localStorage.getItem('auth'));
        const userId = user.id
        const response = await axios.get(`https://lms-backend-production-fcd7.up.railway.app/api/attendence/get-attendence/${userId}`);
        if(response.data.status) setData(response.data.attendence)
        else console.log(response.data)
      }catch(err){
        console.log(err)
      }
     }
     React.useEffect(()=>{
      console.log(data)
     },[data])
    const [month,setMonth] = useState('');
    function monthSelector(){
        const date = new Date();
        const month_getter =  date.getMonth() +1 ;
        console.log( month_getter)
        // eslint-disable-next-line default-case
        switch(month_getter){
            case 1 : setMonth('January')
            break;
            case 2 : setMonth('February')
            break;
            case 3: setMonth('March')
            break;
            case 4: setMonth('April')
            break;
            case 5: setMonth('May')
            break;
            case 6: setMonth('June');
            break;
            case 7: setMonth('July')
            break;
            case 8: setMonth("August")
            break;
            case 9: setMonth("September");
            break;
            case 10: setMonth('October')
            break;
            case 11: setMonth('November');
            break;
            case 12 : setMonth('December');
            break;

        }

    }
    React.useEffect(()=>{
        monthSelector()
    },[])
  return (
    <div>
      {/* month holder   */}
      <div>
        <h1 className='font-1 text-xl text-center p-2'>{month}</h1>
      </div>
      {/* month holder end */}
      {/* day holder */}
      <div className='flex justify-evenly flex-wrap'>
      {Array.from({ length: (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') ? 31 : 30 }, (_, index) => {
          const isDayActive = data.some(dayData => dayData.day === (index + 1).toString() && dayData.month === (date.getMonth() + 1).toString());
          

          return <DayBlock key={index} day={index + 1} isActive={isDayActive} />;
        })}

      </div>
    </div>
  )
}

export default Attendance
