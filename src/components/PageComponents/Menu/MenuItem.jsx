import React from "react";

const MenuItem = (props) => {
  return (
    <>
      {props.items.map((item, index) => (
        <div className="tm-menu-item tm-menu-compound" key={index}>
          <h3 className="tm-menu-name">{item.Title}</h3>
          {/*<div className="uk-badge-danger uk-badge">hot</div>*/}
          <span className="tm-menu-dots" />
          <span className="tm-menu-price">{item.Price}</span>
          <span className="tm-menu-desc">{item.Description}</span>
        </div>
      ))}
    </>
  );
};

export default MenuItem;
