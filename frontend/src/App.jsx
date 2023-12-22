import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/Login'
import { Register } from './pages/Register'
import { PostDetails } from './pages/PostDetails'
import { CreatePost } from './pages/CreatePost'
import { EditPost } from './pages/EditPost'
import { Profile } from './pages/Profile'
import { UserContextProvider } from './context/UserContext'
import { Myblogs } from './components/Myblogs'

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route exact  path='/' element={<Home/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/write' element={<CreatePost/>}></Route>
        <Route exact path='/edit/:id' element={<EditPost/>}></Route>
        <Route exact path='/myblogs/:id' element={<Myblogs/>}></Route>
        <Route exact path='/profile/:id' element={<Profile/>}></Route>
        <Route exact path='/posts/post/:id' element={<PostDetails />}></Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App