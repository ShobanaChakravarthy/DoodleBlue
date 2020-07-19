import React from "react";
import "../styles.css";

var selUser = "";
function Header(props) {
  function dropdown() {
    var res = [];
    for (var i = 0; i < props.contacts.length; i++) {
      res.push(
        <option value={props.contacts[i].fullName}>
          {props.contacts[i].fullName}
        </option>
      );
    }
    return res;
  }
  function handleDropdownChange(e) {
    selUser = e.target.value;
    props.selUser(selUser);
  }
  return (
    <div className="navHeader">
      <img
        className="searchTop"
        src={require("../assets/searchtop.png")}
        alt="img here"
        width="37px"
        height="37px"
      />
      <div className="navEnd">
        <label className="headerText">+ Add</label>
        <select
          className="headerText headerDropDown"
          onChange={handleDropdownChange}
        >
          {dropdown()}
        </select>
        <img
          className="headerText"
          src={require("../assets/profile.png")}
          alt="img here"
          width="29px"
          height="29px"
        />
      </div>
    </div>
  );
}
export default Header;
