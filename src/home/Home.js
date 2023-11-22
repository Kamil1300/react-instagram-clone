import React from 'react'
import "./Home.css"
import Header from "../components/Header"
import Profile from "../components/profile/Profile"
import Post from '../components/post/Post'

const Home = () => {
  return (
    <>
    <Header/>
    <Profile/>
    {/* <Post/> */}
    </>
  )
}

export default Home