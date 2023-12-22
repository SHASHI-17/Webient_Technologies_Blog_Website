import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { Footer } from '../pages/Footer'
import { UserContext } from '../context/UserContext';
import { Link, useLocation } from 'react-router-dom';
import { URL } from '../url';
import Loader from './Loader';
import axios from 'axios';
import HomePosts from '../pages/HomePosts';

export const Myblogs = () => {


    const {search}=useLocation();
    const [posts, setPosts] = useState([]);
    const [noResults,setNoResults]=useState(false);
    const [loader,setLoader]=useState(false);
    const {user}=useContext(UserContext);
    console.log(user);
  
    const fetchPosts = async () => {
      setLoader(true);
      try {
        const res=await axios.get(URL+"/api/posts/user/"+user._id)
        setPosts(res.data);
        if(res.data.length===0){
          setNoResults(true);
        }else{
          setNoResults(false);
        }
        setLoader(false);
      } catch (e) {
        console.log(e);
      }
    }
  
    useEffect(() => {
      fetchPosts();
    }, [search])

  return (
    <div>
    <Navbar/>
    <div className='px-8 md:px-[200px] min-h-[80vh]'>
        
    {loader ? <div className='h-[40vh] flex justify-center items-center'><Loader/></div>:!noResults? posts.map((post) => {
          return           <>
          <Link to={user?`/posts/post/${post._id}`:"/login"}>
          <HomePosts key={post._id} post={post}/>
          </Link>
          </>
        }): <h3 className='text-center font-bold mt-16'>No posts available</h3>}
    </div>

    <Footer/>

    </div>
  )
}
