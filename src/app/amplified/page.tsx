import React from 'react'
import Footer from '@/components/landing-page/footer/Footer'
import AmplifiedKitchen from '@/components/program/amplified/kitchen/AmplifiedKitchen'
import RecipeGallery from '@/components/program/amplified/pictures/RecipeGallery'
const page = () => {
  return (
    <div>
        <AmplifiedKitchen/>
        <RecipeGallery/>
        <Footer/>
    </div>
  )
}

export default page