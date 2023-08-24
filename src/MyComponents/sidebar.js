import React from "react";
import clickup from "./clickup.png";

const Sidebar = () => {
  return (
    <>
      <aside>
        <div className="sidebar">
          <ul>
            <li>
              <img src={clickup} alt="" className="clickup-img " />
            </li>
            <li>
              <i className="fa fa-search"></i>
              <input type="search" placeholder="Search" />
            </li>
            <li className="Home">
              <i className="fa fa-home"></i>Home
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
