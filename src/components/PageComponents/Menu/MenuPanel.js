import React from "react";

const MenuPanel = (props) => {
  return (
    <>
      {props.items.map((item, index) => (
        <div className="uk-panel uk-panel-space" key={index}>
          <div className="tm-menu-item tm-menu-compound">
            <h3 className="tm-menu-name">{item.MenuItem1}</h3>
            {/*<div className="uk-badge-danger uk-badge">hot</div>*/}
            <span className="tm-menu-dots" />
            <span className="tm-menu-price">{item.MenuItem1Price}</span>
            <span className="tm-menu-desc">{item.MenuItem1Description}</span>
          </div>
          <div className="tm-menu-item tm-menu-compound">
            <h3 className="tm-menu-name">{item.MenuItem2}</h3>
            <span className="tm-menu-dots" />
            <span className="tm-menu-price">{item.MenuItem2Price}</span>
            <span className="tm-menu-desc">{item.MenuItem2Description}</span>
          </div>
          <div className="tm-menu-item tm-menu-compound">
            <h3 className="tm-menu-name">{item.MenuItem3}</h3>
            <span className="tm-menu-dots" />
            <span className="tm-menu-price">{item.MenuItem3Price}</span>
            <span className="tm-menu-desc">{item.MenuItem3Description}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuPanel;
