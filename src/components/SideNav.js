import React from "react";
import "../styles.css";
import ImageComp from "./ImageComp";

function SideNav() {
  return (
    <div className="sideNav">
      <img
        className="Menu"
        src={require("../assets/menu.png")}
        alt="img here"
        width="50.5px"
        height="20px"
      />
      <ImageComp
        fileName={require("../assets/home.png")}
        width="32px"
        height="32px"
      />
      <ImageComp
        fileName={require("../assets/person.png")}
        width="32px"
        height="32px"
      />
      <ImageComp
        fileName={require("../assets/document.png")}
        width="23px"
        height="23px"
      />
      <ImageComp
        fileName={require("../assets/refresh.png")}
        width="28px"
        height="28px"
      />
      <ImageComp
        fileName={require("../assets/database.png")}
        width="18px"
        height="30px"
      />
      <ImageComp
        fileName={require("../assets/calendar.png")}
        width="18px"
        height="18px"
      />
      <ImageComp
        fileName={require("../assets/settings.png")}
        width="34px"
        height="34px"
      />
    </div>
  );
}
export default SideNav;
