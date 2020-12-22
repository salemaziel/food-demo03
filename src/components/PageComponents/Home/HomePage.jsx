import React from "react";

import Section1Intro from "./section1Intro";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";

import HeroSectionTxtBtnRight from "../../HeroSectionTxtBtnRight";
import CtaSectionBgImage from "../../CtaSectionBgImage";
import { navigateTo, Link } from "gatsby";

import Header1 from "../../../images/demo/default/slider/1.jpg";
import Hero from "./Hero";
import Section2Favs from './Section2Favs'

import WoodFloor1 from '../../../images/background/bg-1.jpg'

//import ToTopScroller from '../../toTopScroller'

const Homepage = () => (
  <>
    <Hero />

    <Section1Intro />
    <Section2Favs />

    <HeroSectionTxtBtnRight
      bg="darkbrown"
      textColor="light"
      size="md"
      bgImage=""
      bgImageOpacity={0.8}
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
      image="https://res.cloudinary.com/dexdumfqy/image/upload/v1600149824/rbl-art-designs/stock-photo-homemade-carne-asada-street-tacos-with-cheese-cilantro-and-onion-413734795-1500x1000_mqxj0e.jpg"
      link="/#"
      /*buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/");
        }}*/
    />

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
  </>
);

export default Homepage;
