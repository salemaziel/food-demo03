import React from "react";
import Section from "./Section";
import "./SectionPhotoSideCaption.scss";
import {Link} from 'gatsby'

import Fade from "react-reveal/Fade";

const SectionPhotoSideCaption = (props) => {
  return (
    <>
      <Section
        bg=""
        bgImage=""
        bgImageOpacity=""
        textColor=""
        className="px-3"
        size="lg"
      >
        <section className="menu add-flex add-padding">
          <div className="menu-images">
              <Fade top>
            <img
              src={props.Pic1}
              alt="food pic 1"
            />
            </Fade>
            <Fade right>
            <img
              src={props.Pic2}
              alt="food pic 2"
            />
            </Fade>
           <Fade left>
            <img
              src={props.Pic3}
              alt="food pic 3"

            />
            </Fade>
            <Fade bottom>
            <img
              src={props.Pic3}
              alt="food pic 4"

            />
            </Fade>
          </div>
          <Fade top cascade>
          <div className="center-text">
            <h1>
              <span className="custom-font alex-brush">{props.CursiveTitle}</span>
              <br />
              {props.SubTitle}
            </h1>
            <h2>*</h2>
            <p className="">
              
              {props.Description}
            </p>
            <Link to={props.link} rel="preload">{props.linkText}</Link>
          </div>
          </Fade>
        </section>
      </Section>
    </>
  );
};

export default SectionPhotoSideCaption;
