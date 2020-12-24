import React from "react";
import Section from "../../Section";
import SectionHeader from "../../SectionHeader";
import Container from "react-bootstrap/Container";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarSection = (props) => {
  return (
    <>
      <Section
        bg=""
        bgImage=""
        bgImageOpacity=""
        textColor=""
        size="lg"
        className="mb-5"
      >
        <Container>
          <SectionHeader
            title="Events Calendar"
            subtitle="What's going on and when"
            className="text-center"
          />
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={[
              { title: "Christmas", date: "2020-12-25" },
              { title: "Hanukkah Start", date: "2020-12-10" },
              { title: "Hanukkah End", date: "2020-12-18" },
            ]}
          />
        </Container>
      </Section>
    </>
  );
};

export default CalendarSection;
