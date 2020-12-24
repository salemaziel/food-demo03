import React from 'react'


const MenuHeaderWhiteBg = (props) => {
    return(
        <div className="uk-text-center">
        <br />
        <h3 className="uk-h2 uk-module-title-alt">{props.HeaderTitle}</h3>
        <h5 className="uk-margin-top-remove uk-margin-large-bottom">

          {props.HeaderSubtitle}
        </h5>
      </div>
    )
}

export default MenuHeaderWhiteBg