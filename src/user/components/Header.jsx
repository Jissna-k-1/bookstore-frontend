import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaInstagram, FaPowerOff, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
 const [listStatus, setListStatus] = useState(false)
 const [dp,setDp] = useState("")
 const [token,setToken] = useState("")
 const [dropDown,setDropDown] = useState(false)

useEffect(()=>{
 if(sessionStorage.getItem("token")){
  const userToken = sessionStorage.getItem("token")
   setToken(userToken)
   const user = JSON.parse(sessionStorage.getItem("user"))
   setDp(user.picture)
 }
},[token])

const menuBtnClick=()=>{
  setListStatus(!listStatus)
}


  return (
    <>
    {/* header upper part -ttile, login  */}
      <div className='grid grid-cols-3 p-5'>

        {/* logo with title */}
        <div className='flex items-center'>
          <img width={'50px'} height={'60px'} src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png" alt="logo" />
          <h1 className='text-2xl font-bold ms-1 md:hidden'>BOOKSTORE</h1>
       </div>

       {/* title */}
       <div className="md:flex justify-center items-center hidden">
        <h1 className="text-3xl font-bold">BOOK STORE</h1>
       </div>

       {/* login */}
       <div className="md:flex justify-end items-center hidden">
        {/* icons-fb,twitter,ig */}
        <FaInstagram/>
        <FaFacebook className='mx-2'/>
        <FaTwitter/>

        {/* login link */}
       { 
        !token ?       
        <Link to={'/login'} className='ms-2 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'> <FaUser className='me-1'/> Login</Link>
        :
        <div className="relative inline-block text-left ms-2">
          <button onClick={()=>setDropDown(!dropDown)} style={{borderRadius:'50%'}} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'>
            <img width={'40px'} height={'40px'}  src="https://img.magnific.com/premium-vector/smiling-woman-avatar_937492-6135.jpg?semt=ais_hybrid&w=740&q=80" alt="profile picture" />
          </button>
         {
          dropDown &&
           <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden">
            <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-600 flex items-center'><FaAddressCard className='me-2'/> Profile</Link>
            <button className=' px-4 py-2 text-sm text-gray-600 flex items-center' ><FaPowerOff className='me-2'/> LogOut</button>
          </div>
         }
        </div>
       }

      </div>
    </div>

      {/* header lower part- links and menu + login btn */}
      <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>

        {/* div for menu bar & login btn in mobile screen*/}
        <div className="flex justify-between items-center md:hidden">
          {/* menu bar- btn */}
          <button onClick={menuBtnClick} className='cursor-pointer'> <FaBars/> </button>

          {/* login link  */}
          { 
        !token ?       
        <Link to={'/login'} className='ms-2 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'> <FaUser className='me-1'/> Login</Link>
        :
        <div className="relative inline-block text-left ms-2">
          <button onClick={()=>setDropDown(!dropDown)} style={{borderRadius:'50%'}} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'>
            <img width={'40px'} height={'40px'}  src="https://img.magnific.com/premium-vector/smiling-woman-avatar_937492-6135.jpg?semt=ais_hybrid&w=740&q=80" alt="profile picture" />
          </button>
         {
          dropDown &&
           <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden">
            <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-600 flex items-center'><FaAddressCard className='me-2'/> Profile</Link>
            <button className=' px-4 py-2 text-sm text-gray-600 flex items-center' ><FaPowerOff className='me-2'/> LogOut</button>
          </div>
         }
        </div>
       }

        </div>

        {/* ul for links */}
        <ul className={listStatus?"flex flex-col":"md:flex justify-center items-center hidden"}>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>HOME</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/books'}>BOOKS</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'}>CONTACT</Link></li>

        </ul>

      </nav>

    </>
  )
}

export default Header
