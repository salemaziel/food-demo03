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
              image:"https://images.unsplash.com/photo-1600473763749-5e4212ea0e69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
              name: "Jose Luis",
              role: "Cook",
            },
            {
              image: "https://images.unsplash.com/photo-1548078835-cb7d27702c1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
              name: "Maria",
              role: "Owner & Cook",
            },
            {
              image: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
              name: "Edgar",
              role: "Cook",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default BigImageCardsSection;
