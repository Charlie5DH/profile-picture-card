import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [active, setActive] = React.useState(false);
  return (
    <div className={active ? "dropdown active" : "dropdown"}>
      <div className="dropdown-textbox">
        <input
          type="text"
          className="textBox"
          placeholder="Dropdown Menu"
          readOnly
          onClick={() => setActive(!active)}
        ></input>
      </div>
      <div className="options">
        <div>
          {" "}
          <ion-icon name="logo-html5"></ion-icon>HTML
        </div>
        <div>
          {" "}
          <ion-icon name="logo-vue"></ion-icon>JS
        </div>
        <div>
          {" "}
          <ion-icon name="logo-css3"></ion-icon>CSS
        </div>
        <div>
          {" "}
          <ion-icon name="logo-react"></ion-icon>React
        </div>
        <div>
          {" "}
          <ion-icon name="logo-vue"></ion-icon>Vue
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
