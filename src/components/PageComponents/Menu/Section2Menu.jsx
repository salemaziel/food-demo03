import React from "react";
import MenuPanel from "./MenuPanel";
import MenuHeaderWhiteBg from './MenuHeaderWhiteBg'

const Section2Menu = (props) => {
  return (
    <>
      <div id="tm-top-c" className="tm-block-top-c uk-block uk-block-default">
        <div className="uk-container uk-container-center">
          <section
            className="tm-top-c uk-grid"
            data-uk-grid-match="{target:'> div > .uk-panel'}"
            data-uk-grid-margin
          >
            <div className="uk-width-1-1">
              <div className="uk-panel">
                <MenuHeaderWhiteBg
                  HeaderTitle="Breakfast"
                  HeaderSubtitle="Can be served toasted or plain"
                />
                {/*<div className="uk-text-center">
              <div data-uk-scrollspy="{cls:'uk-animation-slide-top', delay:100}">
                <img className src="images/demo/menu/food-2.png" alt="breakfast" width={300} height={200} />
              </div>
              <br />
              <h3 className="uk-h2 uk-module-title-alt"></h3>
              <h5 className="uk-margin-top-remove uk-margin-large-bottom">Can be served toasted or plain</h5>
              </div>*/}

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

                  {/*<div className="uk-panel uk-panel-space">
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">daily cheese sandwich</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 6.50</span>
                  <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                </div>
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">tuna salad</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 8.50</span>
                  <span className="tm-menu-desc">Caramelized onions . tomatoes . mashed potatoes. tilapia</span>
                </div>
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">ham &amp; cheese sandwich</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 6.50</span>
                  <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                </div>
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">halloumi fromage</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 7.50</span>
                  <span className="tm-menu-desc">Chicken . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                </div>
              </div>*/}
                  {/*<div className="uk-panel uk-panel-space">
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">French Salad</h3>
                  <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 3.50</span>
                  <span className="tm-menu-desc">Green vegetables . spiced bread crumbs . chips or mashed potatoes . french dressing</span>
                </div>
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">club omelette</h3>
                  <div className="uk-badge-danger uk-badge">hot</div>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 8.50</span>
                  <span className="tm-menu-desc">Caramelized onions . tomatoes . mashed potatoes. tilapia</span>
                </div>
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">belgian waffles</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 6.50</span>
                  <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                </div>
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">pancake stack</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 7.50</span>
                  <span className="tm-menu-desc">Chicken . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                </div>
            </div>*/}
                  {/*<div className="uk-panel uk-panel-space">
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">quiche of the day</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 6.50</span>
                  <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                </div>
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">Italian breakfast</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 8.50</span>
                  <span className="tm-menu-desc">Caramelized onions . tomatoes . mashed potatoes. tilapia</span>
                </div>
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">garden vegetable</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 6.50</span>
                  <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                </div>
                <div className="tm-menu-item tm-menu-compound">
                  <h3 className="tm-menu-name">English breakfast</h3>
                  <div className="uk-badge-note uk-badge-notification uk-badge">n</div>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 7.50</span>
                  <span className="tm-menu-desc">Beef . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                </div>
              </div>*/}
                </div>
                {/*<img
                  className="tm-img-top-left"
                  src="images/demo/default/overlay/overlay-3.png"
                  alt="demo"
                  width={250}
                  height={200}
                />
                <img
                  className="tm-img-bottom-right"
                  src="images/demo/default/overlay/overlay-2.png"
                  alt="demo"
                  width={250}
                  height={125}
                />*/}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Section2Menu;
