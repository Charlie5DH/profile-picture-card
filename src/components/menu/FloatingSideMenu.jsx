import React from "react";
import "./FloatingSideMenu.css";

const FloatingSideMenu = () => {
  const [active, setActive] = React.useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={active ? "floating-navigation active" : "floating-navigation"}
    >
      <div
        className={active ? "menu_toggle active" : "menu_toggle"}
        onClick={() => toggleActive()}
      ></div>
      <div className="floating-navigation-profile">
        <div className="floating-navigation-imageBox">
          <img
            src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="profile"
          />
        </div>
      </div>
      <ul className="floating-navigation-menu">
        <li>
          <a href="/">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="text">Profile</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <span className="text">Inbox</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FloatingSideMenu;
