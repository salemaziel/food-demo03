import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TeamBios3 from "./TeamBios3";

import Food1 from '../images/pexels-ella-olsson-1640774.jpg'

function BigImageCardsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <TeamBios3
          items={[
            {
              image:"https://uploads.divjoy.com/pexels-52739-1125x750.jpeg",
              name: "Food One",
              role: "$6.99",
            },
            {
              image: "https://uploads.divjoy.com/pexels-52739-1125x750.jpeg",
              name: "Lisa Zinn",
              role: "Software Engineer",
            },
            {
              image: "https://uploads.divjoy.com/pexels-7051-1125x750.jpeg",
              name: "Sarah Howard",
              role: "Designer",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default BigImageCardsSection;
