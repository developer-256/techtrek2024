import About from '@/components/HomePageComponents/About'
import Speaker from '@/components/HomePageComponents/Speaker'
import Ticket from '@/components/HomePageComponents/Ticket'
import MaxContainer from '@/components/MaxContainer'
import CountdownTimer from '@/components/techtrek/countdown'
import HeroSection from '@/components/techtrek/herosection'
import EventSchedule from '@/components/techtrek/runds'
import SpeakerSection from '@/components/techtrek/speakers'
import TeamSection from '@/components/techtrek/team'
import React from 'react'

const Home = () => {
  return (
    <section>
      <MaxContainer>Hello</MaxContainer>
      <HeroSection />
      <EventSchedule />
      <TeamSection />
      <SpeakerSection />
      {/* <CountdownTimer eventDate={"05-3-2024"} /> */}
    </section>
  )
}

export default Home