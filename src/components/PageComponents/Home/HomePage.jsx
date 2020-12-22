import React from "react";

import Section1Intro from "./section1Intro";

import HeroSectionTxtBtnRight from "../../HeroSectionTxtBtnRight";
import CtaSectionBgImage from "../../CtaSectionBgImage";
import { navigateTo, Link } from "gatsby";

import Hero from "./Hero";
import Section2Favs from './Section2Favs'
import MenuSectionImageBg from '../Menu/MenuSectionImageBg'

import WoodFloor1 from '../../../images/background/bg-1.jpg'
//import FoodBowlBg from '../../../images/pexels-anthony-leong-2092897.jpg'
import Fade from 'react-reveal/Fade'

import SectionPhotoSideCaption from '../../SectionPhotoSideCaption'

//import ToTopScroller from '../../toTopScroller'

const Homepage = () => (
  <>
    <Hero />

    <Section1Intro />
    <SectionPhotoSideCaption
        Pic1="https://www.konoba-mirakul.com/wp-content/uploads/2015/03/delikatesa4.jpg"
        Pic2="https://www.konoba-mirakul.com/wp-content/uploads/2015/03/delikatesa21.jpg"
        Pic3="https://www.gourmetsociety.co.uk/uploads/images/restaurants/093ce538894c95892f62dc93bb023636-image.png"
        Pic4="https://retrokitchenbar.com/wp-content/uploads/2014/05/menu-thumb-4-300x218.jpg"
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
  BgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1608672765/rbl-art-designs/pexels-anthony-leong-2092897-1920x_zxu8df.jpg"
  />
    <Section2Favs />
<Fade top>
    <HeroSectionTxtBtnRight
      bg="darkbrown"
      textColor="light"
      size="md"
      bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1608675409/rbl-art-designs/oaxaca-3128326_1920_muaiuw_masihl.png"
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
      image="https://res.cloudinary.com/dexdumfqy/image/upload/v1608672765/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e_irguci.jpg"
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
