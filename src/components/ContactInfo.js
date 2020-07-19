import React from "react";
import "../styles.css";
function ContactInfo(props) {
  return (
    <div className="boxRight">
      <div className="box2">
        <div
          className="boxCircle"
          style={{ background: props.boxS["boxColor"] }}
        >
          {props.boxS["boxLogoFont"]}
        </div>
        <label className="lab8">{props.boxS["boxFullName"]}</label>
        <label className="lab9">{props.boxS["boxPosition"]}</label>
      </div>
      <div className="detailT">
        <label className="lab10">FullName:</label>
        <label className="lab11">{props.boxS["boxFullName"]}</label>
      </div>
      <div className="detailT">
        <label className="lab10">Email:</label>
        <label className="lab11">{props.boxS["boxEmail"]}</label>
      </div>
      <div className="detailT">
        <label className="lab10">Phone:</label>
        <label className="lab11">{props.boxS["boxPhone"]}</label>
      </div>
      <div className="detailT">
        <label className="lab10">Company:</label>
        <label className="lab11">{props.boxS["boxCompany"]}</label>
      </div>
      <div className="detailT">
        <label className="lab10">Address:</label>
        <label className="lab11">{props.boxS["boxAddress"]}</label>
      </div>
    </div>
  );
}
export default ContactInfo;
