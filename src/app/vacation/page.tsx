import React from 'react'
import PartnersSchool from '@/components/program/Vacation/PartnersSchool'
import ActivitiesSection from '@/components/program/Vacation/ActivitiesSection'
import Vacation from '@/components/program/Vacation/Vacation'
import Activities from '@/components/program/Vacation/Activities'
const page = () => {
  return (
    <div>
     <Vacation/>
     <Activities/>
     <ActivitiesSection/>
     <PartnersSchool/>
     
    </div>
  )
}

export default page