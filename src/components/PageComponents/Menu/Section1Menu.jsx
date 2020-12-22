import React from "react";
import MenuPanel from "./MenuPanel";
import MenuHeaderWhiteBg from "./MenuHeaderWhiteBg";
import MenuPanel2 from "./MenuPanel2";

const Section1Menu = (props) => {
  return (
    <>
      <div id="tm-top-a" className="tm-block-top-a uk-block uk-block-default">
        <div className="uk-container uk-container-center">
          <section
            className="tm-top-a uk-grid"
            data-uk-grid-match="{target:'> div > .uk-panel'}"
            data-uk-grid-margin
          >
            <div className="uk-width-1-1">
              <div className="uk-panel">
                <MenuHeaderWhiteBg
                  HeaderTitle="Appetizers"
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

                {/*<img
                  className="tm-img-top-left"
                  src="images/demo/default/overlay/overlay-2.png"
                  alt="demo"
                  width={250}
                  height={125}
                />
                <img
                  className="tm-img-bottom-right"
                  src="images/demo/default/overlay/overlay-3.png"
                  alt="demo"
                  width={250}
                  height={200}
                />*/}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Section1Menu;
