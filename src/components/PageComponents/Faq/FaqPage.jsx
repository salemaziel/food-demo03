import React from 'react'
import Section from '../../Section'
import Section1Faq from './Section1Faq'

import BannerImage from '../../../images/jpg/pexels-ella-olsson-1640774.jpg'
import WoodFloor1 from '../../../images/background/bg-1.jpg'
import CtaSectionBgImage from '../../CtaSectionBgImage'
import {navigateTo} from 'gatsby'


const FaqPage = (props) => {
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

        <Section1Faq />


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

export default FaqPage