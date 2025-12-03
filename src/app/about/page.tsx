import React from 'react'
import AboutUs from '@/components/aboutsection/about/AboutUs'
//import HistorySection from '@/components/aboutsection/about/HistorySection'
//import MissionSection from '@/components/aboutsection/about/MissionSection'
import ProgressImpact from '@/components/aboutsection/about/ProgressImpact'
import TeamSection from '@/components/aboutsection/about/Team'
import Mh from '@/components/aboutsection/about/Mh'
const page = () => {
  return (
    <div>
        
        <AboutUs/>
        <ProgressImpact/>
        <Mh/>
        
        <TeamSection/>
    </div>
  )
}

export default page