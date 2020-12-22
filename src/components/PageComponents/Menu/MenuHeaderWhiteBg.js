import React from 'react'
import Food1 from '../../../images/demo/menu/food-1.png'


const MenuHeaderWhiteBg = (props) => {
    return(
        <div className="uk-text-center">
        <div data-uk-scrollspy="{cls:'uk-animation-slide-top', delay:100}">
          <img
            className
            src={Food1}
            alt="appetizers"
            width={300}
          />
        </div>
        <br />
        <h3 className="uk-h2 uk-module-title-alt">{props.HeaderTitle}</h3>
        <h5 className="uk-margin-top-remove uk-margin-large-bottom">

          {props.HeaderSubtitle}
        </h5>
      </div>
    )
}

export default MenuHeaderWhiteBg