import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

//import HeroImage from '../../../images/background/bg-image-4.jpg'
import HeroImage from "../../../images/jpg/pexels-ella-olsson-1640774.jpg";
import LogoWhite from "../../../images/generic-logo-white.png";

import LazyHero from "react-lazy-hero";

import heroStyles from "./home.module.css";

const Hero = () => (
  <>
    <section /*className={heroStyles.HeroSection}*/>
      <LazyHero
        /*imageSrc={props.bgImage}*/
        /*imageSrc="https://res.cloudinary.com/dexdumfqy/image/upload/v1608672766/rbl-art-designs/pexels-ella-olsson-1640774_snwle8.jpg"*/
        imageSrc={HeroImage}
        isCentered={true}
        isFixed={false}
        minHeight="100vh"
        opacity={0.2}
        color="#000"
      >
        <Container fluid="md">
          <Row className={heroStyles.qcRow}>
            <Col>
              <div className="NoDesktop">
                <img
                  /*src="https://res.cloudinary.com/dexdumfqy/image/upload/v1608665507/rbl-art-designs/generic-logo-white_sjpuyn.png"*/
                  src={LogoWhite}
                  alt="Food Demo 3 Logo"
                  className="d-block NoDesktop"
                  style={{}}
                />
              </div>

              <div className="text-center NoDesktop">
                <h2 className="NoDesktop text-white text-center font-italic">
                  “Serving the best Mexican food to Escondido for 10 years.”
                </h2>
                {/*<h4 className="NoDesktop text-white text-center "></h4>*/}
              </div>
              <div className="NoMobile">
                <img
                  /*src="https://res.cloudinary.com/dexdumfqy/image/upload/v1608665507/rbl-art-designs/generic-logo-white_sjpuyn.png"*/
                  src={LogoWhite}
                  alt="Food Demo 3 Logo"
                  className="logoHero"
                />
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
