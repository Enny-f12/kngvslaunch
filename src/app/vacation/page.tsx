import React from 'react'
import PartnersSchool from '@/components/program/Vacation/PartnersSchool/PartnersSchool'
import ActivitiesSection from '@/components/program/Vacation/schools/ActivitiesSection'
import Vacation from '@/components/program/Vacation/vacation/Vacation'
const page = () => {
  return (
    <div>
     <Vacation/>
     <ActivitiesSection/>
     <PartnersSchool/>
     
    </div>
  )
}

export default page