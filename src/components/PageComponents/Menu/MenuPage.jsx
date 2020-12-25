import React from 'react'
import Section1Menu from './Section1Menu'
import Section2Menu from './Section2Menu'
import Section3MainMenu from './Section3MainMenu'
import MenuSectionImageBg from './MenuSectionImageBg'

import BreakfastBg from '../../../images/background/bg-image-2.jpg'
import Section4Dessert from './Section4Dessert'
import LogoWhite from '../.././../images/generic-logo-white.png'

import Bg1 from '../../../images/background/bg-1.jpg'
import Section from '../../Section'

import BannerImage from '../../../images/jpg/pexels-ella-olsson-1640774.jpg'

import WoodFloor1 from '../../../images/background/bg-1.jpg'
import CtaSectionBgImage from '../../CtaSectionBgImage'
import {navigateTo} from 'gatsby'
import MenuTabsSection from '../../MenuTabs/menuTabsSection'

const MenuPage = (props) => {
    return(
<>
<Section
        bg=""
        bgImage={BannerImage}
        bgImageOpacity={1}
        bgImageRepeat="no-repeat"
        className=""
        size="lg"
        />
  {/* header-a * /}
  <div id="tm-header-a" className="tm-block-header-a uk-block uk-block-default tm-block-fullwidth tm-grid-collapse ">
    <div className="uk-container uk-container-center">
      <section className="tm-header-a uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}">
        <div className="uk-width-1-1">
          <div className="uk-panel uk-text-center uk-contrast tm-overlay-secondary tm-header-height">
            <div className="tm-background-cover uk-cover-background uk-flex uk-flex-center uk-flex-middle" style={{backgroundPosition: '50% 0px', backgroundImage: 'url(images/background/bg-image-4.jpg)'}} data-uk-parallax="{bg: '-200'}">
              <div className="uk-position-relative uk-container">
                <div data-uk-parallax="{opacity: '1,0', y: '-50'}">
                  <div data-uk-scrollspy="{cls:'uk-animation-slide-top', delay:300}">
                    <h1 className="uk-module-title-alt uk-margin-top">Our Menu</h1>
                  </div>
                  <div data-uk-scrollspy="{cls:'uk-animation-slide-top', delay:800}">
                    <h5 className="uk-sub-title-small">The true taste of good design</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
    */}
<MenuTabsSection />
  {/* top-a */}

{/*

<Section1Menu />

*/}



  {/* top-b */}
{/*
  <MenuSectionImageBg
  Title="Morning Breakfast"
  Subtitle="Begin your day by indulging in a hearty breakfast"
  BgImage={BreakfastBg}
  />
*/}




  {/* top-c */}
{/*
      <Section2Menu />
    */}





  {/* top-d */}
{/*
  <MenuSectionImageBg
  Title="Main Course"
  Subtitle="We deliver hot meals to any location"
  BgImage={BreakfastBg}
  />


*/}

  {/*<div id="tm-top-d" className="tm-block-top-d uk-block uk-block-default tm-block-fullwidth tm-grid-collapse">
    <div className="uk-container uk-container-center">
      <section className="tm-top-d uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <div className="uk-panel uk-text-center uk-contrast tm-header-height tm-overlay-secondary">
            <div className="tm-background-cover uk-cover-background uk-flex uk-flex-center uk-flex-middle" style={{backgroundPosition: '50% 0px', backgroundImage: 'url(images/background/bg-image-5.jpg)'}} data-uk-parallax="{bg: '-200'}">
              <div className="uk-position-relative uk-container">
                <div data-uk-parallax="{opacity: '0,1', scale: '0.75,1', viewport: '0.5'}">
                  <h1 className="uk-module-title-alt uk-margin-top">Main Course</h1>
                  <h3 className="uk-sub-title">We deliver hot meals to any location</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>*/}



  {/* main content */}
{/*


  <Section3MainMenu />


*/}




  {/* bottom-a */}

  {/*
  <MenuSectionImageBg
  Title="Dessert &amp; Coffee"
  Subtitle="ENJOY THE VERY BEST IN DESSERTS AND COFFEE"
  BgImage={BreakfastBg}
  />


*/}

  {/*<div id="tm-bottom-a" className="tm-block-bottom-a uk-block uk-block-default tm-block-fullwidth tm-grid-collapse">
    <div className="uk-container uk-container-center">
      <section className="tm-bottom-a uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <div className="uk-panel uk-text-center uk-contrast tm-header-height tm-overlay-secondary">
            <div className="tm-background-cover uk-cover-background uk-flex uk-flex-center uk-flex-middle" style={{backgroundPosition: '50% 0px', backgroundImage: 'url(images/background/bg-image-6.jpg)'}} data-uk-parallax="{bg: '-200'}">
              <div className="uk-position-relative uk-container">
                <div data-uk-parallax="{opacity: '0,1', scale: '0.75,1', viewport: '0.5'}">
                  <h1 className="uk-module-title-alt uk-margin-top">Dessert &amp; Coffee</h1>
                  <h3 className="uk-sub-title">Enjoy the very best in desserts and coffee</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>*/}


  {/* bottom-b */}

<Section4Dessert />





  {/*<div id="tm-bottom-b" className="tm-block-bottom-b uk-block uk-block-default">
    <div className="uk-container uk-container-center">
      <section className="tm-bottom-b uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <div className="uk-panel">
            <div className="uk-text-center">
              <div data-uk-scrollspy="{cls:'uk-animation-slide-top', delay:100}">
                <img className src="images/demo/menu/food-6.png" alt="dessert" width={300} height={200} />
              </div>
              <br />
              <h3 className="uk-h2 uk-module-title-alt">Dessert</h3>
              <h5 className="uk-margin-top-remove uk-margin-large-bottom">served with coffee or tea</h5>
            </div>
            <div className="uk-grid uk-grid-width-medium-1-2 uk-grid-width-large-1-3" data-uk-grid-margin>
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
            <img className="tm-img-bottom-right" src="images/demo/default/overlay/overlay-3.png" alt="demo" width={250} height={200} />
          </div>
        </div>
      </section>
    </div>
  </div>*/}
 
 
 
  {/* bottom-e */}
  {/*<div id="tm-bottom-e" 
  className="tm-block-bottom-e uk-block uk-block-default tm-inner-shadow tm-overlay-secondary" 
  data-uk-parallax="{bg: '-200'}" 
  style={{backgroundImage: `url(${Bg1})`}}>
    <div className="uk-container uk-container-center">
      <section className="tm-bottom-e uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin>
        <div className="uk-width-1-1">
          <div className="uk-panel uk-text-center">
            <img src={LogoWhite} width={300} alt="demo" />
          </div>
        </div>
      </section>
    </div>
</div>*/}
  
  <CtaSectionBgImage
      bg="dark"
      textColor="white"
      size="md"
      bgImage={WoodFloor1}
      bgImageOpacity={0.8}
      title="Order Online Now"
      subtitle=""
      buttonText="Get Started"
      buttonColor="yellow"
      buttonOnClick={() => {
        // Navigate to pricing page
        navigateTo("/#");
      }}
    />

</>
    )
}

export default MenuPage