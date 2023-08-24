import React, { useState } from "react";

import Sidebar from "./sidebar.js";
const Header = () => {
  const [ShowSidebar, setShowsidebar] = useState(false);

  const openSidebar = () => {
    let main = document.querySelector(".container");
    let nav = document.querySelector(".nav-bar");
    if (ShowSidebar === false) {
      setShowsidebar(true);

      nav.style.marginLeft = "250px";
      main.style.marginLeft = "250px";
    } else {
      setShowsidebar(false);
      nav.style.marginLeft = "initial";
      main.style.marginLeft = "initial";
    }
  };

  return (
    <>
      {ShowSidebar && <Sidebar />}

      <nav className="nav-bar">
        <ul className="list-items">
          <li
            className="class1"
            onClick={openSidebar}
            style={{ paddingLeft: "10px" }}
          >
            <i className="fa fa-list" style={{ padding: "5px" }} />
            List
          </li>
          <li>
            <img src="./images/board.png" alt="" className="icons" /> Board
          </li>
          <li>
            <img src="./images/plus.png" alt="" className="icons" />
            View
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
