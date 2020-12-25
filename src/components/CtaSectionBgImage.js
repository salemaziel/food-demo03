import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import Fade from 'react-reveal/Fade'

import {Helmet} from 'react-helmet'

function CtaSectionBgImage(props) {
  return (
    <>
              <Helmet>
  <script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async ></script>
  </Helmet>
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
      <Fade top>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md="auto" className="py-3 px-4">

            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={false}
            />

          </Col>
          <Col xs={12} md="auto" className="py-3 px-4">
            {/*<Button
              variant={props.buttonColor}
              size="lg"
              onClick={props.buttonOnClick}
              className="py-3 px-5 btn-lg btn-block"
            >
              {props.buttonText}
            </Button>*/}
            <span
                  className="uk-button-primary uk-button-large uk-button btn-lg btn-block px-5 py-2"
                  data-glf-cuid="8e7c87fd-2ed0-44b4-9886-8626e340905e"
                  data-glf-ruid="d3afdc87-1713-43aa-bd55-854fdf812f01"
                >
                  {" "}
                  {props.buttonText}
                </span>

          </Col>
        </Row>
        </Fade>
      </Container>
    </Section>

    </>
  );
}

export default CtaSectionBgImage;
