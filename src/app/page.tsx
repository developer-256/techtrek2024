import About from '@/components/HomePageComponents/About'
import Speaker from '@/components/HomePageComponents/Speaker'
import Ticket from '@/components/HomePageComponents/Ticket'
import React from 'react'

const Home = () => {
  return (
    <section>
      <About />
      <Speaker />
      <Ticket />
    </section>
  )
}

export default Home