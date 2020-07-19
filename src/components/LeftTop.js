import React from "react";
import "../styles.css";

function LeftTop(props) {
  return (
    <div className="headerTop">
      <img
        className="headerImg"
        src={require("../assets/contact.png")}
        alt="img here"
        width="45px"
        height="52px"
      />
      <div className="headerT">
        <label className="headerCon">Contacts</label>
        <label className="headerCon1">Welcome to Contacts Page</label>
      </div>
      <div className="headerD">
        <label className="headerSort">Sort by:</label>
        <select className="headerSort1">
          <option>Date Created</option>
        </select>
      </div>
    </div>
  );
}
export default LeftTop;
