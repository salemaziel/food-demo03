import React from 'react'
import MenuHeaderWhiteBg from './MenuHeaderWhiteBg'
import MenuPanel from './MenuPanel'

import Overlay3 from '../../../images/demo/default/overlay/overlay-3.png'


const Section4Dessert = (props) => {
    return(
        <>
<div id="tm-bottom-b" className="tm-block-bottom-b uk-block uk-block-default">
    <div className=" uk-container-center">
      <section className="tm-bottom-b uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <div className="uk-panel">


          <MenuHeaderWhiteBg
                  HeaderTitle="Dessert"
                  HeaderSubtitle="Served with coffee or tea"
                />

            {/*<div className="uk-text-center">
              <div data-uk-scrollspy="{cls:'uk-animation-slide-top', delay:100}">
                <img className src="images/demo/menu/food-6.png" alt="dessert" width={300} height={200} />
              </div>
              <br />
              <h3 className="uk-h2 uk-module-title-alt">Dessert</h3>
              <h5 className="uk-margin-top-remove uk-margin-large-bottom">served with coffee or tea</h5>
            </div>*/}
            <div className="uk-grid uk-grid-width-medium-1-2 uk-grid-width-large-1-3" data-uk-grid-margin>
              
            <MenuPanel
                    items={[
                      {
                        MenuItem1: "warm dark chocolate cake",
                        MenuItem1Price: "$1.50",
                        MenuItem1Description:
                          "",

                        MenuItem2: "banana split",
                        MenuItem2Price: "$2.50",
                        MenuItem2Description:
                          "",

                        MenuItem3: "apple tart",
                        MenuItem3Price: "$2.50",
                        MenuItem3Description:
                          "",
                      },
                    ]}
                  />
                  <MenuPanel
                    items={[
                      {
                        MenuItem1: "new york cheese cake",
                        MenuItem1Price: "$3.50",
                        MenuItem1Description:
                          "",

                        MenuItem2: "Apple Pie",
                        MenuItem2Price: "$2.50",
                        MenuItem2Description:
                          "",

                        MenuItem3: "Carrot Cake",
                        MenuItem3Price: "$2.50",
                        MenuItem3Description:
                          "",
                      },
                    ]}
                  />
                  <MenuPanel
                    items={[
                      {
                        MenuItem1: "Banana Cake",
                        MenuItem1Price: "$3.50",
                        MenuItem1Description:
                          "",

                        MenuItem2: "Choco chip cookies",
                        MenuItem2Price: "$2.50",
                        MenuItem2Description:
                          "",

                        MenuItem3: "vanilla eclair",
                        MenuItem3Price: "$3.50",
                        MenuItem3Description:
                          "",
                      },
                    ]}
                  />
              
              
              
              
              
              
              
              <div className="uk-panel uk-panel-space">
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">warm dark chocolate cake</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">banana split</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 2.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">apple tart</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 2.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">new york cheese cake</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">orange cake</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 2.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">chocolate cake</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Apple Pie</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Carrot Cake</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Banana Cake</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Belgian Waffle</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
              </div>
              <div className="uk-panel uk-panel-space">
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Tiramisu</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 2.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Classic Italian Tiramisu</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 2.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">muffins</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Choco chip cookies</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 2.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Butter jam</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 3.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">macaroons</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">vanilla eclair</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Baked Cheesecake</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Cappuccino Cake</h3>
                  <div className="uk-badge-note uk-badge-notification uk-badge">n</div>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 2.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Blueberry Cheesecake</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 3.50</span>
                </div>
              </div>
              <div className="uk-panel uk-panel-space tm-secondary-background uk-border-rounded">
                <div className="uk-text-center">
                  <h3 className="uk-h2 uk-module-title-alt uk-margin-remove">Coffee</h3>
                  <h5 className="uk-margin-top-remove uk-margin-large-bottom">best way to start your day</h5>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Espresso</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 3.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Cappuccino</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Caffe Latte</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 2.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Macchiato</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 2.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Americano</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 1.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Mochaccino</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 3.50</span>
                </div>
                <div className="tm-menu-item">
                  <h3 className="tm-menu-name">Vanilla Latte</h3>
                  <span className="tm-menu-dots" />
                  <span className="tm-menu-price">$ 2.00</span>
                </div>
              </div>
            </div>
            <img className="tm-img-bottom-right" src={Overlay3} alt="demo" width={250} height={200} />
          </div>
        </div>
      </section>
    </div>
  </div>

        </>
    )
}

export default Section4Dessert