import React from 'react'

const TopBar = () => (
    <>
    <div className="tm-toolbar uk-clearfix">
  {/* toolbar left */}
  <div className="uk-float-left">
    <div>
      <ul className="uk-subnav uk-subnav-line">
        {/*<li><a href="http://goo.gl/LqPQNI" target="_blank">Buy Now</a></li>
        <li><a href="#">Login</a></li>*/}
        <li> <p>Open: 7:30am - 11:00pm</p></li>
      </ul>
    </div>
    {/*<div className=" uk-hidden-small">
      <p>Open daily: 7:30 am to 11:00 pm</p>
      </div>*/}
  </div>
  {/* toolbar right */}
  <div className="uk-float-right">
    <div>
      <a href="https://www.dribbble.com/arrowthemes" className="uk-icon-button uk-icon-dribbble" target="_blank" />
      <a href="https://www.facebook.com/arrowthemes" className="uk-icon-button uk-icon-facebook" target="_blank" />
      <a href="https://www.twitter.com/arrowthemes" className="uk-icon-button uk-icon-twitter" target="_blank" />
    </div>
  </div>
</div>
    </>
)

export default TopBar