import React from "react";

const MenuItem = ({ menuItem }) => {
  return (
    <div className="portfolios">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.icon1}></a>
                  <a href={item.icon2}></a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Placeholder paragragh</p>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItem;
