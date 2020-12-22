import React from 'react'
import Fade from 'react-reveal/Fade'

const MenuSectionImageBg = (props) => {
    return(
        <div id="tm-top-b" className="tm-block-top-b uk-block uk-block-default tm-block-fullwidth tm-grid-collapse">
        <div className="uk-container uk-container-center">
          <section className="tm-top-b uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin>
            <div className="uk-width-1-1">
              <div className="uk-panel uk-text-center uk-contrast tm-header-height tm-overlay-secondary">
                <div 
                className="tm-background-cover uk-cover-background uk-flex uk-flex-center uk-flex-middle" 
                style={{
                  backgroundPosition: '50% 0px', 
                  backgroundImage: `url(${props.BgImage})`
                  }} 
                  data-uk-parallax="{bg: '-200'}">
                  <div className="uk-position-relative uk-container">
                  <Fade top>
                    <div data-uk-parallax="{opacity: '0,1', scale: '0.75,1', viewport: '0.5'}">

                      <h1 className="uk-module-title-alt uk-margin-top">{props.Title}</h1>
                      <h3 className="uk-sub-title">
                      {props.Subtitle}
                      </h3>
                    </div>
                    </Fade>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
}

export default MenuSectionImageBg