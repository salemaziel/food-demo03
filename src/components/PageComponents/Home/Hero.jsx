import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

import Row from "react-bootstrap/Row"


import HeroImage from '../../../images/background/bg-image-4.jpg'
//import Logo from '../../../images/logo-image.png'

import LazyHero from 'react-lazy-hero'

import heroStyles from "./home.module.css";


const Hero = () => (
  <>
  <section /*className={heroStyles.HeroSection}*/>
  <LazyHero
        /*imageSrc={props.bgImage}*/
        imageSrc={HeroImage}
        isCentered={true}
        isFixed={true}
        minHeight="100vh"
        opacity={0.2}
        color='#000'
      >


    <Container fluid="md">
        <Row className={heroStyles.qcRow}>

        <Col >
        <img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1608597423/viadelweb/logo-stuff/logo_c66qvi.png" alt="Food Demo 3 Logo" className="d-block" style={{}}  
        />

        <div className="text-center NoDesktop">
          <h2 className="NoDesktop text-white text-center font-italic">
          “Serving the best Mexican food to Escondido for 10 years.”
          </h2>
{/*<h4 className="NoDesktop text-white text-center ">- Dolly Parton</h4>*/}
</div> 
          <div className="NoMobile">
            <img src="https://res.cloudinary.com/dexdumfqy/image/upload/v1608597423/viadelweb/logo-stuff/logo_c66qvi.png" alt="Food Demo 3 Logo" className="logoHero" />
          </div>

        </Col>

      </Row>
      </Container>
      </LazyHero>
    {/*<HeroMobile />*/}
  </section>
  </>
);

export default Hero;
