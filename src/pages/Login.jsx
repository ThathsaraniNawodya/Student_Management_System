import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'



const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/studentlogin', values)
        .then(result => {
            if(result.data.loginStatus) {
                localStorage.setItem("valid", true)
                navigate('/dashbord')
            } else {
                setError(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="w-1/2 bg-blue-100 fixed h-2/3 rounded-lg px-3  ml-96 border-2 shadow-inner shadow-blue-500/50 mt-24 gap-x-48 ">
      
      <h1 className="text-2xl text-black ml-64 ">Login </h1>
    <div className='d-flex justify-content-center align-items-center  loginPage'>
        <div className='p-3 rounded w-max border loginForm'>
            <div className='text-warning'>
                {error && error}
            </div>
            
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="studentID" className="block text-gray-700 text-sm font-bold mb-2"><strong>Email</strong></label>
                    <input type="text" name='studentID' autoComplete='off' placeholder='Enter Email'
                     onChange={(e) => setValues({...values, email : e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className='mb-3'> 
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2"><strong>Password</strong></label>
                    <input type="password" name='password' autoComplete='off' placeholder='Enter Email'
                     onChange={(e) => setValues({...values, password : e.target.value})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <Link to="/addstudent"
         className=" bg-sky-600 hover:bg-sky-200 text-white font-bold py-2 px-4  focus:outline-none focus-within:shadow-lg ml-10 border rounded">
      Log in
      </Link>
               <div className='mt-6'>
                    <input type="checkbox" name="tick" id="tick" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                    <label htmlFor="password">You are Agree with terms & conditions</label>
                    </div>
               
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login