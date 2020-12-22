import React from "react";
import MenuItem from './MenuItem'

const MenuPanel2 = (props) => {
  return (
    <>
        <div className="uk-panel uk-panel-space">
            <MenuItem
              items={[
                {
                  Title: "food 1",
                  Price: "$9.88",
                  Description: "lorem ipsum description text",
                },
                {
                  Title: "food 1",
                  Price: "$9.88",
                  Description: "lorem ipsum description text",
                },
                {
                  Title: "food 1",
                  Price: "$9.88",
                  Description: "lorem ipsum description text",
                },
                {
                  Title: "food 1",
                  Price: "$9.88",
                  Description: "lorem ipsum description text",
                },
                {
                  Title: "food 1",
                  Price: "$9.88",
                  Description: "lorem ipsum description text",
                },
              ]} 
              
              
              
              
              />
        </div>
    </>
  );
};

export default MenuPanel2;
