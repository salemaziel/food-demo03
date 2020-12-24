import React from 'react'

import Section from '../../Section'
import CarneTaco from '../../../images/jpg/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-570x380.jpg'

import BannerImage from '../../../images/jpg/pexels-ella-olsson-1640774.jpg'
import HeroSectionTextOnly from '../../HeroSectionTextOnly'
import HeroSectionTxtBtnLeft from '../../HeroSectionTxtBtnLeft'
import HeroSectionTxtBtnRight from '../../HeroSectionTxtBtnRight'
import FoodBowlBg from '../../../images/jpg/pexels-anthony-leong-2092897-1920x.jpg'
import MenuSectionImageBg from '../Menu/MenuSectionImageBg'
import BigImageCardsSection from '../../BigImageCardsSection'
import WoodFloor1 from '../../../images/background/bg-1.jpg'
import CtaSectionBgImage from '../../CtaSectionBgImage'
import {navigateTo} from 'gatsby'

const AboutPage = (props) => {
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
                  <HeroSectionTextOnly
          className="font-weight-bold"
      bg=""
      textColor="dark"
      size="sm"
      bgImage=""
      bgImageOpacity={1}
      title="About Us"
      subtitle=""
      description=""
      listTitle1=""
      listItem1=""
      listItem2=""
      listTitle2=""
      listItem3=""
      listItem4=""
      description1="As you wait for your delicious meal to arrive, let us share a little bit about us with you!"
      description2=""
      description3=""
      description4=""
      description5=""
      description6=""
      description7=""
      bottomPic=""
      bottomPicAlt=""
    />
            <HeroSectionTxtBtnRight
      bg=""
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={0.05}
      title=""
      subtitle=""
      description1="We first opened our doors here in the heart of Escondido in the summer of 2010, but our legacy had been established long before. Three generations ago, our roots sprouted from a quaint little town called Cotija—in the Mexican state of Michoacán."
      description2="Our Owner settled in the San Diego area with his family. He spent many years honing his skills, perfecting his recipes, and creating memorable menu items, which eventually led him to open the first restaurant in 1974 in the city of Vista with his children. As our family has grown, we have had the opportunity to open new restaurant locations."
      description3=""
      description4=""
      description5=""
      description6=""
      description7=""
      buttonText="Get Started"
      buttonColor="yellow"
      image={CarneTaco}
      link="/#"
      /*buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/");
        }}*/
    />

            <HeroSectionTxtBtnLeft
      bg=""
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={0.05}
      title=""
      subtitle=""
      description1="All of us at the restaurant have the greatest respect for the time you spend with us, and it is always our goal to be consistent with the cleanliness of our establishment and mouthwatering food we prepare, in addition to our famous friendly service you’ve come to expect."
      description2="So please make yourself at home, enjoy our authentic home-made recipes, and come back to visit us again soon!"
      description3=""
      description4=""
      description5=""
      description6=""
      description7=""
      buttonText="Get Started"
      buttonColor="yellow"
      image={CarneTaco}
      link="/#"
      /*buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/");
        }}*/
    />

<MenuSectionImageBg
  Title="Mexican Restaurant"
  Subtitle="Serving Escondido Since 2010"
  /*BgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1608672765/rbl-art-designs/pexels-anthony-leong-2092897-1920x_zxu8df.jpg"*/
  BgImage={FoodBowlBg}
  />
        <BigImageCardsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />

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



export default AboutPage
