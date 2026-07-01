import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';



function Home() {
  const navigate =useNavigate()
  const [searchKey, setSearchKey] = useState("")

 const handleSearch =()=>{
  if(!searchKey){
    toast.warning("Please provide a book title!!!")
  }else if(!sessionStorage.getItem("token")){
    toast.warning("Please login to search book!!!")
    setTimeout(() => {
     navigate('/login')
    },2500)
  }else if(sessionStorage.getItem("token") && searchKey){
    navigate('/books')
  }else{
    toast.error("Something went wrong!!")
  }
 }

  return (
    <>
    <Header/>
      <div>
        {/* landing part- serach part */}
        <div style={{height:'500px'}} className='flex justify-center items-center flex-col bg-[url(/bg-image.jpg)] bg-cover bg-center text-white'>
         <div style={{height:'500px', backgroundColor:'rgba(0,0,0,0.5)'}} className='w-full flex justify-center items-center flex-col'>
         <h1 className='text-5xl font-bold mb-2'>Wonderful Gifts</h1>
         <p>Gift your family and friends a book</p>
         {/* search */}
         <div className="mt-9 flex items-center">
          <input onChange={e=>setSearchKey(e.target.value)} className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2' placeholder='Search Books Here' type="text" />
          <button onClick={handleSearch} className='text-gray-500' style={{marginLeft:'-40px'}}><FaSearch/></button>
         </div>
        </div>

        </div>

        {/* new arrival */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
          <h2 className="text-2xl" style={{fontFamily:'cursive'}}>Explore Our Latest Collection</h2>
          {/* books row and col */}
          <div className="md:grid grid-cols-4 w-full mt-10">
            {/* duplicate book card-div  */}
            <div className="shadow rounded p-3 mx-4 md:mb-0 mb-5">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81C2QnortLL.jpg" alt="book" />
              <div className="flex justify-center items-center flex-col mt-4">
                <h3 className="text-blue-600 font-bold text-lg ">Author</h3>
                <h4 className='text-lg'>title</h4>
                <h4>$ price</h4>
              </div>
            </div>
            <div className="shadow rounded p-3 mx-4">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81C2QnortLL.jpg" alt="book" />
              <div className="flex justify-center items-center flex-col mt-4">
                <h3 className="text-blue-600 font-bold text-lg ">Author</h3>
                <h4 className='text-lg'>title</h4>
                <h4>$ price</h4>
              </div>
            </div>
            <div className="shadow rounded p-3 mx-4">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81C2QnortLL.jpg" alt="book" />
              <div className="flex justify-center items-center flex-col mt-4">
                <h3 className="text-blue-600 font-bold text-lg ">Author</h3>
                <h4 className='text-lg'>title</h4>
                <h4>$ price</h4>
              </div>
            </div>
            <div className="shadow rounded p-3 mx-4">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81C2QnortLL.jpg" alt="book" />
              <div className="flex justify-center items-center flex-col mt-4">
                <h3 className="text-blue-600 font-bold text-lg ">Author</h3>
                <h4 className='text-lg'>title</h4>
                <h4>$ price</h4>
              </div>
            </div>
          </div>

          {/* all books-link */}
          <div className="text-center my-16">
            <Link to={'/books'} className="p-3 bg-black text-white">Explore More...</Link>
          </div>

        </section>

        {/* author */}
        <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10'>
          {/* author content */}
          <div className="text-center">
           <h1 className="text-3xl font-bold">FEATURED AUTHORS</h1>
           <h2 className="text-xl" style={{fontFamily:'cursive'}}>Captivates With Every Word</h2> 
           <p className='text-justify mt-9'>[Author Name] is a passionate storyteller whose work blends imagination, emotion, and relatable human experiences. With a unique voice and an eye for detail, [he/she/they] has crafted stories that resonate with readers of all ages. Drawing inspiration from everyday life, personal journeys, and the world around [him/her/them], [Author Name] continues to create compelling narratives that spark curiosity and ignite the love for reading.</p>
           <p className='text-justify mt-3'>Over the years, [Author Name] has built a reputation for writing books that are not only entertaining but also thought-provoking. Whether exploring deep emotions, uncovering mysteries, or diving into fantastical worlds, [his/her/their] storytelling invites readers to reflect, imagine, and dream bigger.Beyond writing, [Author Name] actively engages with readers, participates in literary events, and remains committed to promoting the value of books and literacy. With every new work, [he/she/they] aims to inspire, empower, and connect with readers across the globe.</p>
         </div>

          {/* author img */}
          <div className="p-5 flex justify-center items-center">
             <img className='w-full' src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="authour img" />
          </div>
      
       </section>

       {/* testimony */}
       <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
          <h2 className="text-xl" style={{fontFamily:'cursive'}}>See What Others Are Saying</h2>
          <div className="my-10 flex justify-center items-center flex-col">
            {/* user image */}
            <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://slw-comicverse.dslw.unibas.ch/img/members/loricourt.png" alt="user" />

            {/* feedback */}
             <p className='mt-5' style={{fontFamily:'cursive'}}>Treasa Alexander</p>
             <p className='text-justify mt-4'><span className='font-bold me-2'>“Fantastic collection and super fast delivery!”</span>
              I love shopping here. The variety of books is amazing, and I always find something new to read. My order arrived earlier than expected and in perfect condition. Highly recommended!The website is easy to navigate and the recommendations feel personal. I appreciate the detailed book descriptions — they really help me choose the right book every time.</p>
          </div>

        </section>

      </div>
         

         
       
        
      
    <Footer/>
    <ToastContainer position="top-center" autoClose={2000} theme="colored"/>
    
    </>
  )
}

export default Home
