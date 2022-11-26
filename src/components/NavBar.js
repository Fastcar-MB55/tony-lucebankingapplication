import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MenuItems } from "./MenuItems";

function NavBar() {

  const handleClick = (e) => {
    let targetEl = e.currentTarget;
    let link = targetEl.getElementsByClassName("nav-link")[0];
    let currentlyActive = Array.from(document.getElementsByClassName("active"));
    currentlyActive.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  };

  const pageUrl = window.location.hash === "" ? "#/" : window.location.hash;
  
  const activeItem = {
    home: pageUrl === "#/" ? " active" : "",
    createAccount: pageUrl === "#/CreateAccount/" ? " active" : "",
    login: pageUrl === "#/Login/" ? " active" : "",
    deposit: pageUrl === "#/Deposit/" ? " active" : "",
    withdraw: pageUrl === "#/Withdraw/" ? " active" : "",
    allData: pageUrl === "#/AllData/" ? " active" : "",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="p-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/safe.jpg"
              width="45"
              height="45"
              className="d-inline-block align-top"
            />{' '}
                Bad Bank Of America
          </Navbar.Brand>
        </Container>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {MenuItems.map(function (item, index) {
            return (
              <li
                className="nav-item px-4"
                key={index}
                onClick={(e) => handleClick(e)}
                id={index}
              >
                <a
                  className={"nav-link" + activeItem[item.id]}
                  href={item.url}
                  title={item.title}
                  data-toggle="tooltip"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
