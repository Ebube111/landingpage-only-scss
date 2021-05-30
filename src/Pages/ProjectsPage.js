import React, { useState } from "react";
import Title from "../Components/Title";
import Cartegories from "../Components/Cartegories";
import MenuItem from "../Components/MenuItem";
import projects from "../Components/allprojects";

const allCategories = [
  "All",
  ...new Set(projects.map((item) => item.category)),
];
console.log(allCategories);

const ProjectsPage = () => {
  const [catergories, setCartegories] = useState(allCategories);
  const [menuItems, setMenuItem] = useState(projects);

  const filter = (category) => {
    if (category === "All") {
      setMenuItem(projects);
      return;
    }
    const filteredData = projects.filter((item) => {
      return item.category === category;
    });
    setMenuItem(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={"projects"} span={"projects"} />
        <div className="portfolios-data ">
          <Cartegories filters={filter} cartegories={catergories} />
          <MenuItem menuItem={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
