import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's A Great Time For Burger</h3>
        <h1>
          <span>Burger</span>For <br />
          YOU
        </h1>
        <p className="details">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="header-btns">
          <a to="#" className="header-btn">
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
