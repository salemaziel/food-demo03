import React from 'react'
import Section from '../../Section'
import CalendarSection from './CalendarSection'
import BannerImage from '../../../images/jpg/pexels-ella-olsson-1640774.jpg'
import WoodFloor1 from '../../../images/background/bg-1.jpg'
import CtaSectionBgImage from '../../CtaSectionBgImage'
import {navigateTo} from 'gatsby'


const EventsPage = (props) => {
    return(
        <>
        <Section
        bg=""
        bgImage={BannerImage}
        bgImageOpacity={1}
        bgImageRepeat="no-repeat"
        className=""
        size="lg"
        />
        <CalendarSection />

        <CtaSectionBgImage
      bg="dark"
      textColor="white"
      size="md"
      bgImage={WoodFloor1}
      bgImageOpacity={0.8}
      title="Order Online Now"
      subtitle=""
      buttonText="Get Started"
      buttonColor="yellow"
      buttonOnClick={() => {
        // Navigate to pricing page
        navigateTo("/#");
      }}
    />


        </>
    )
}

export default EventsPage