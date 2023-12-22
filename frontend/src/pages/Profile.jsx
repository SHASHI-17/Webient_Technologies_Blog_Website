import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from './Footer'
import ProfilePosts from '../components/ProfilePosts'
import axios from 'axios'
import { URL } from '../url'
import { UserContext } from '../context/UserContext'
import { useNavigate, useParams } from 'react-router-dom'

export const Profile = () => {
    const param=useParams().id;
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [posts, setPosts] = useState([])
    const {user,setUser}=useContext(UserContext);
    const navigate=useNavigate();
    const [updated,setUpdated]=useState();
    const fetchProfile=async ()=>{
        try {
            const res=await axios.get(URL+'/api/users/'+user._id);
            setEmail(res.data.email);
            setUsername(res.data.username);
        } catch (e) {
            console.log(e);
        }
    }



    const handleUserUpdate = async ()=>{
        setUpdated(false);
        try {
            const res=await axios.put(URL+'/api/users/'+user._id,{username,email},{withCredentials:true})
            console.log(res.data);
            setUpdated(true);
        } catch (e) {
                console.log(e);
                setUpdated(false);
        }
    }

    const handleUserDelete = async ()=>{
        try{
            const res=await axios.delete(URL+"/api/users/"+user._id,{withCredentials:true})
            setUser(null)
            navigate("/")
            // console.log(res.data)
        
          }
          catch(err){
            console.log(err)
          }
    }

    useEffect(()=>{
        fetchProfile();
},[param])

const fetchUserPosts=async ()=>{
    try{
      const res=await axios.get(URL+"/api/posts/user/"+user._id)
      console.log(res.data)
      setPosts(res.data)
  
  
    }
    catch(err){
      console.log(err)
    }
  }

    useEffect(()=>{
        fetchUserPosts()
      },[param])

    return (
        <div>
            <Navbar />
            <div className='px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start'>
                <div className='flex flex-col md:w-[70%] w-full mt-8 md:mt-0'>
                    <h1 className='text-xl font-bold mb-4'>Your Posts :</h1>
                    {posts?.map((p) => (
            <ProfilePosts key={p._id} p={p} />
          ))}
                </div>
                <div className='md:sticky md:top-12 flex flex-col justify-start md:justify-end items-start space-y-4 md:w-[30%] w-full md:items-end'>
                            <div className='flex flex-col space-y-4 items-start'>
                            <h1 className='text-xl font-bold mb-4'>Profile</h1>
                        <input onChange={(e)=>setUsername(e.target.value)} type="text" value={username}  placeholder='Your username' className='outline-none px-4 py-2 text-gray-500'/>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email}  placeholder='Your email' className='outline-none px-4 py-2 text-gray-500' />
                        
                        <div className='flex items-center space-x-4 mt-8'>
                                <button onClick={handleUserUpdate} className='text-white font-semibold bg-black px-4 py-2 
                                hover:text-black hover:bg-gray-400'>Update</button>
                                <button onClick={handleUserDelete} className='text-white font-semibold bg-black px-4 py-2 
                                hover:text-black hover:bg-gray-400'>Delete</button>
                        </div>
                        {updated && <h3 className='text-green-500 text-sm text-center mt-4'>User Updated Successfully</h3>}
                            </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
