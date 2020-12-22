import React from 'react'
import Dish6 from '../../../images/demo/default/content/dish-6.png'
import Overlay1 from '../../../images/demo/default/overlay/overlay-1.png'
import {Link} from 'gatsby'
import Fade from 'react-reveal/Fade'

import LogoGray from '../../../images/generic-logo.png'

const Section1Intro = (props) => {
    return(
        <>
<div>
  {/* logo */}
  <div id="tm-logo">
    <div className="uk-container uk-container-center">
      <a className="tm-logo uk-hidden-small uk-flex uk-flex-middle uk-flex-center" href="index.html">
        <img src={LogoGray} width={200} alt="demo" />
      </a>
    </div>
  </div>
  <div className="tm-header-box">
    <div className="uk-container uk-container-center">
      {/* header b */}
      <div id="tm-header-b" className="tm-block-header-b uk-block tm-padding-remove uk-block-default">
        <section className="tm-header-b uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin>              
          <div className="uk-width-1-1 uk-width-medium-1-3" style={{paddingLeft: '15px'}}>
            <div className="uk-panel uk-panel-box uk-panel-box-secondary uk-text-center">
              <Fade top>
              <div className="uk-text-center">
                <h3 className="tm-quote">good food is like music to the stomach. Every bite makes you want to dance</h3>
              </div>
              </Fade>
              <img className="tm-img-bottom" src={Dish6} alt="demo" width={200} height={160} /></div></div>
          <div className="uk-width-1-1 uk-width-medium-2-3">
          <Fade top>
            <div className="uk-panel uk-panel-box uk-text-center">

              <h1 className="uk-module-title-alt">Great food. Tastes good.</h1>
              <h3 className="uk-sub-title"> If you can dream it, you can do it.</h3>
              <p>Learn from the past, set vivid, detailed goals for the future, and live in the only moment of time over which you have any control: now. Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. If you can dream it, you can do it. Do it now, not tomorrow. Always continue the climb. It is possible for you to do.</p>


              <br />
              <Link to="/menu" rel="preload" className="uk-button-primary uk-button-large uk-button" target="_self">See the menu</Link>
              <Link to="/#" className="uk-button-secondary uk-margin-left uk-button-large uk-button" rel="preload" target="_self">Make reservations</Link>
              <img className="tm-img-bottom-right" src={Overlay1} alt="demo" width={250} height={185} />
            </div>
            </Fade>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Section1Intro