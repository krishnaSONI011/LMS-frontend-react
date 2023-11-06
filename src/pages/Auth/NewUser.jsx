import React from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../fragment/Button'
const NewUser = ()=>{
    const {email} = useParams()
    return <React.Fragment>
        <div className='font-1 text-center text-lg py-4'>
             Hi ! Welcome
        </div>
        <form>
            <div className='flex  justify-center  font-2'>
                <input type={'text'} name='name' className='bg-gray-50 w-32 p-1  px-2 border rounded-md mx-4' placeholder='Ram'/>
                <input type={'text'} name='name' className='bg-gray-50 w-32 p-1 px-2 border rounded-md mx-4' placeholder='Doe'/>
            </div>
            <div className='text-center pt-4'>
            <input type="email" name='email' className='bg-gray-50 p-3 border rounded-md w-72' placeholder='example@gmail.com' value={email}/>
            </div>
            <div className='text-center pt-4'>
            <input type="password" name='email' className='bg-gray-50 p-3 border rounded-md w-72' placeholder='password' />
            </div>
            <div className='text-center pt-4'>
                <Button>Submit</Button>
            </div>
        </form>

    </React.Fragment>
}

export default NewUser