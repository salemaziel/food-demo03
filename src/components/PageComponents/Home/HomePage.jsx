import React from "react";

import Section1Intro from "./section1Intro";

import HeroSectionTxtBtnRight from "../../HeroSectionTxtBtnRight";
import CtaSectionBgImage from "../../CtaSectionBgImage";
import { navigateTo, Link } from "gatsby";

import Hero from "./Hero";
import Section2Favs from './Section2Favs'
import MenuSectionImageBg from '../Menu/MenuSectionImageBg'

import WoodFloor1 from '../../../images/background/bg-1.jpg'
import FoodBowlBg from '../../../images/jpg/pexels-anthony-leong-2092897-1920x.jpg'
import OaxacaBg from '../../../images/oaxaca-3128326_1920_muaiuw.png'
import CarneTaco from '../../../images/jpg/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-570x380.jpg'

import FoodPic1 from '../../../images/delikatesa4.jpg'
import FoodPic2 from '../../../images/delikatesa2.jpg'
import FoodPic3 from '../../../images/delikatesa3.png'
import FoodPic4 from '../../../images/delikatesa1.jpg'



import Fade from 'react-reveal/Fade'

import SectionPhotoSideCaption from '../../SectionPhotoSideCaption'

//import ToTopScroller from '../../toTopScroller'

const Homepage = () => (
  <>
    <Hero />

    <Section1Intro />
    <SectionPhotoSideCaption
        Pic1={FoodPic1}
        Pic2={FoodPic2}
        Pic3={FoodPic3}
        Pic4={FoodPic4}
        CursiveTitle="Discover"
        SubTitle="MENU"
        Description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Molestiae distinctio possimus tempore voluptatem, quo repellendus
        quas culpa quasi, hic optio sapiente molestias necessitatibus,
        aliquam excepturi consequatur a voluptates quam beatae!"
        link="/menu"
        linkText="View Full Menu"
        />
  <MenuSectionImageBg
  Title="Morning Breakfast"
  Subtitle="Begin your day by indulging in a hearty breakfast"
  /*BgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1608672765/rbl-art-designs/pexels-anthony-leong-2092897-1920x_zxu8df.jpg"*/
  BgImage={FoodBowlBg}
  />
    <Section2Favs />
<Fade top>
    <HeroSectionTxtBtnRight
      bg="darkbrown"
      textColor="light"
      size="md"
      bgImage={OaxacaBg}
      bgImageOpacity={0.05}
      title="Order Online"
      subtitle="Our online menu allows you to place an order for pickup, with the option to pay at checkout. Add-ons include delivery service!"
      description1=""
      description2=""
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
    
    </Fade>





    <Fade top>
    <CtaSectionBgImage
      bg="dark"
      textColor="white"
      size="md"
      bgImage={WoodFloor1}
      bgImageOpacity={0.8}
      title="Reserve A Table"
      subtitle=""
      buttonText="Get Started"
      buttonColor="yellow"
      buttonOnClick={() => {
        // Navigate to pricing page
        navigateTo("/#");
      }}
    />
    </Fade>
  </>
);

export default Homepage;
