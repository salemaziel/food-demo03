import React from "react";
import MenuPanel from "./MenuPanel";
import MenuHeaderWhiteBg from './MenuHeaderWhiteBg'

const Section3MainMenu = (props) => {
  return (
    <>
      <div id="tm-main" className="tm-block-main uk-block uk-block-default">
    <div className="uk-container-center">
      <div className="tm-middle uk-grid" data-uk-grid-match data-uk-grid-margin>
        <div className="tm-main uk-width-medium-1-1">
          <main id="tm-content" className="tm-content">
            <article className="uk-article tm-article">
              <div className="tm-article-wrapper">
                <div className="tm-article-content uk-margin-large-bottom uk-margin-top-remove">
                  <div className="tm-article">
                    <div id="pasta" />
                    <MenuHeaderWhiteBg
                  HeaderTitle="Pasta"
                  HeaderSubtitle="Delicious and mouth watering delicacies"
                />
                    {/*<div className="uk-text-center">
                      <div data-uk-scrollspy="{cls:'uk-animation-slide-top', delay:200}">
                        <img className src="images/demo/menu/food-3.png" alt="pasta" width={300} height={200} />
                      </div>
                      <br />
                      <h3 className="uk-h2 uk-module-title-alt">Pasta</h3>
                      <h5 className="uk-margin-top-remove uk-margin-large-bottom">Delicious and mouth watering delicacies</h5>
            </div>*/}
                    <div className="uk-grid uk-grid-width-medium-1-2 uk-grid-width-large-1-3" data-uk-grid-margin>
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
                          <h3 className="tm-menu-name">Penne Arrabiata</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Tomato sauce . parsley . snap peas . parmesan . red chilli (chilli – optional)</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Linguine Dania</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 8.50</span>
                          <span className="tm-menu-desc">Tomato sauce . garlic . parsley . mascarpone</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Gaucho Pesto</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Linguini Carbonara</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 7.50</span>
                          <span className="tm-menu-desc">Bacon .egg . cream . fried onion . parmesan</span>
                        </div>
                      </div>*/}
                      {/*<div className="uk-panel uk-panel-space">
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Tagliatelle Bolognese</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 3.50</span>
                          <span className="tm-menu-desc">Ground beef . tomato sauce . red wine . spices</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Agliolio Linguine</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 8.50</span>
                          <span className="tm-menu-desc">Caramelized onions . tomatoes . mashed potatoes. tilapia</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Creamed Mushroom Penne</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Butternut Ravioli</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 7.50</span>
                          <span className="tm-menu-desc">Chicken . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                        </div>
                      </div>*/}
                      {/*<div className="uk-panel uk-panel-space">
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Gnocchi Rose</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Prawns Tagliatelle</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 8.50</span>
                          <span className="tm-menu-desc">Caramelized onions . tomatoes . mashed potatoes. tilapia</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Spaghetti Meatballs</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Ricotta Lasagna</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <div className="uk-badge-note uk-badge-notification uk-badge">n</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 7.50</span>
                          <span className="tm-menu-desc">spinach . ricotta cheese . mozzarella . white wine sauce . parmesan . green salad</span>
                        </div>
                      </div>*/}
                    </div>
                    <br />
                    <div id="specials" />
                    <MenuHeaderWhiteBg
                  HeaderTitle="Specials"
                  HeaderSubtitle="Served with either fries, mashed potatoes or steamed vegetables"
                />


                    {/*<div className="uk-text-center">
                      <div data-uk-scrollspy="{cls:'uk-animation-slide-top', delay:200}">
                        <img className src="images/demo/menu/food-4.png" alt="specials" width={300} height={200} />
                      </div>
                      <br />
                      <h3 className="uk-h2 uk-module-title-alt">Specials</h3>
                      <h5 className="uk-margin-top-remove uk-margin-large-bottom">Served with either fries, mashed potatoes or steamed vegetables</h5>
                    </div>*/}
                    <div className="uk-grid uk-grid-width-medium-1-2 uk-grid-width-large-1-3" data-uk-grid-margin>
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
                          <h3 className="tm-menu-name">Penne Arrabiata</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Tomato sauce . parsley . snap peas . parmesan . red chilli (chilli – optional)</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Linguine Dania</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 8.50</span>
                          <span className="tm-menu-desc">Tomato sauce . garlic . parsley . mascarpone</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Gaucho Pesto</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Linguini Carbonara</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 7.50</span>
                          <span className="tm-menu-desc">Bacon .egg . cream . fried onion . parmesan</span>
                        </div>
                      </div>*/}
                      {/*<div className="uk-panel uk-panel-space">
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Tagliatelle Bolognese</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 3.50</span>
                          <span className="tm-menu-desc">Ground beef . tomato sauce . red wine . spices</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Agliolio Linguine</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 8.50</span>
                          <span className="tm-menu-desc">Caramelized onions . tomatoes . mashed potatoes. tilapia</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Creamed Mushroom Penne</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Butternut Ravioli</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 7.50</span>
                          <span className="tm-menu-desc">Chicken . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                        </div>
                      </div>*/}
                      {/*<div className="uk-panel uk-panel-space">
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Linguine Dania</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 8.50</span>
                          <span className="tm-menu-desc">Tomato sauce . garlic . parsley . mascarpone</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Penne Arrabiata</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Tomato sauce . parsley . snap peas . parmesan . red chilli (chilli – optional)</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Linguini Carbonara</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 7.50</span>
                          <span className="tm-menu-desc">Bacon .egg . cream . fried onion . parmesan</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Gaucho Pesto</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Chicken breast . spiced bread crumbs . chips or mashed potatoes . aioli sauce</span>
                        </div>
                      </div>*/}
                    </div>
                    <div id="pizza" />
                    <MenuHeaderWhiteBg
                  HeaderTitle="Pizza"
                  HeaderSubtitle="Add ons: Tuna . Mushrooms . Pineapples. Black Olives."
                />



                   {/*} <div className="uk-text-center">
                      <div data-uk-scrollspy="{cls:'uk-animation-slide-top', delay:200}">
                        <img className src="images/demo/menu/food-5.png" alt="pizza" width={300} height={200} />
                      </div>
                      <br />
                      <h3 className="uk-h2 uk-module-title-alt">Pizza</h3>
                      <h5 className="uk-margin-top-remove uk-margin-large-bottom">Add ons: Tuna . Mushrooms . Pineapples. Black Olives.</h5>
                    </div>*/}
                    <div className="uk-grid uk-grid-width-medium-1-2 uk-grid-width-large-1-3" data-uk-grid-margin>
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
                          <h3 className="tm-menu-name">Napoletana</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Pomodoro sauce . anchovies . kalamata olives . tomatoes . mozzarella. feta chesse . red onions . fresh mint</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">The Greek</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 8.50</span>
                          <span className="tm-menu-desc">Mozzarella . pomodoro sauce . grilled zucchini . feta chesse . red onions . fresh mint</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Calabria</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Mozzarella . pomodoro sauce . green chilies . salami picanti . kalamata olives</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Gorgonzolla</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 7.50</span>
                          <span className="tm-menu-desc">Mozzarella . pomodoro sauce . gorgonzolla cheese . fresh rocket. feta chesse . red onions . fresh mint</span>
                        </div>
                </div>*/}
                      {/*<div className="uk-panel uk-panel-space">
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Roma</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">n</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 8.50</span>
                          <span className="tm-menu-desc">Pomodoro sauce . mozzarella . grilled eggplant . rocket . parmesan. pesto. prosciutto</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Pollo</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 8.50</span>
                          <span className="tm-menu-desc">Pomodoro sauce . mozzarella . spiced chicken . grilled red onion. feta chesse . red onions . fresh mint</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Capresa</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <div className="uk-badge-note uk-badge-notification uk-badge">n</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Pesto . mozzarella . basil . tomatoes . sundried tomatoes. feta chesse . red onions . fresh mint</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Crispy Bacon</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <div className="uk-badge-note uk-badge-notification uk-badge">n</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 7.50</span>
                          <span className="tm-menu-desc">spinach . ricotta cheese . mozzarella . white wine sauce . parmesan . green salad</span>
                        </div>
                      </div>*/}
                      {/*<div className="uk-panel uk-panel-space">
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Calabria</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Mozzarella . pomodoro sauce . green chilies . salami picanti . kalamata olives</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Napoletana</h3>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 6.50</span>
                          <span className="tm-menu-desc">Pomodoro sauce . anchovies . kalamata olives . tomatoes . mozzarella. feta chesse . red onions . fresh mint</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">The Greek</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 8.50</span>
                          <span className="tm-menu-desc">Mozzarella . pomodoro sauce . grilled zucchini . feta chesse . red onions . fresh mint</span>
                        </div>
                        <div className="tm-menu-item tm-menu-compound">
                          <h3 className="tm-menu-name">Gorgonzolla</h3>
                          <div className="uk-badge-note uk-badge-notification uk-badge">v</div>
                          <span className="tm-menu-dots" />
                          <span className="tm-menu-price">$ 7.50</span>
                          <span className="tm-menu-desc">Mozzarella . pomodoro sauce . gorgonzolla cheese . fresh rocket. feta chesse . red onions . fresh mint</span>
                        </div>
                      </div>*/}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  </div>


    </>
  );
};

export default Section3MainMenu;
