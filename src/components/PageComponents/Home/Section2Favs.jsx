import React from 'react'
import MenuHeaderWhiteBg from "../Menu/MenuHeaderWhiteBg";
import MenuPanel from "../Menu/MenuPanel";
import Section from "../../Section";
import { Container } from "react-bootstrap";


const Section2Favs = (props) => {
    return(
        <>
    <Section bg="white" textColor="" bgImage="" bgImageOpacity="" className="">
      <Container>
        <MenuHeaderWhiteBg
          HeaderTitle="Customer Favorites"
          HeaderSubtitle="served with bread and butter"
        />
        <div
          className="uk-grid uk-grid-width-medium-1-2 uk-grid-width-large-1-3"
          data-uk-grid-margin
        >
          <MenuPanel
            items={[
              {
                MenuItem1: "classic nachos",
                MenuItem1Price: "$6.50",
                MenuItem1Description:
                  "Corn chips topped with cheese sauce, served with sour cream, guacamole &amp; pico de gallo",

                MenuItem2: "Avocado shell stuffed",
                MenuItem2Price: "$8.50",
                MenuItem2Description:
                  "Caramelized onions . tomatoes . mashed potatoes. tilapia",

                MenuItem3: "Baked potato jackets",
                MenuItem3Price: "$6.50",
                MenuItem3Description:
                  "Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce",
              },
            ]}
          />
          <MenuPanel
            items={[
              {
                MenuItem1: "nachos grande",
                MenuItem1Price: "$3.50",
                MenuItem1Description:
                  "Corn chips. Mexican fried chili beans. sour cream guacamole &amp; salsa. chili lamb mince",

                MenuItem2: "quesadillas acapulco",
                MenuItem2Price: "$4.50",
                MenuItem2Description:
                  "A flour tortilla. cheese tomatoes jalapeño. fresh cilantro. vegetable arrabbiata",

                MenuItem3: "Three Street Tacos",
                MenuItem3Price: "$6.50",
                MenuItem3Description:
                  "Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce",
              },
            ]}
          />
          <MenuPanel
            items={[
              {
                MenuItem1: "rolled tacos",
                MenuItem1Price: "$6.50",
                MenuItem1Description:
                  "Corn chips topped with cheese sauce, served with sour cream, guacamole &amp; pico de gallo",

                MenuItem2: "Carne Asada Fries",
                MenuItem2Price: "$10.50",
                MenuItem2Description:
                  "Fries topped with cheese sauce, served with sour cream, guacamole &amp; pico de gallo",

                MenuItem3: "Baked potato jackets",
                MenuItem3Price: "$6.50",
                MenuItem3Description:
                  "Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce",
              },
            ]}
          />
        </div>
      </Container>
    </Section>

        </>
    )
}

export default Section2Favs