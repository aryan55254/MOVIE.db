import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Qts from './components/Qts'
function Home() {
  return (
    <div className='bg-black'>
    <Nav />
    <Hero />
    <Hero2 />
    <Qts />
    </div>
  )
}

export default Home