import React from "react";
import "../styles.css";

function ContactList(props) {
  function handleClick(e) {
    props.onClick1(props.fullName);
  }
  function handleClick2(e) {
    props.onClick(e, props.id);
  }
  function handleChat(e) {
    props.handleChat(props.fullName);
  }
  return (
    <div className="fourthLine" tabindex={props.id} onClick={handleClick}>
      <input type="checkbox" className="lab1" />
      <div className="nameIn">
        <div className="circle" style={{ background: props.color }}>
          {props.logoFont}
        </div>
        <div className="nameIn1">
          <label className="lab7">{props.fullName}</label>
          <label className="lab6">{props.mail}</label>
        </div>
      </div>
      <label className="lab3">{props.company}</label>
      <label className="lab4" onClick={handleClick2}>
        <img
          src={require("../assets/edit.png")}
          alt="images here"
          width="17px"
          height="17px"
        />
      </label>
      <label className="lab5" onClick={handleChat}>
        <img
          src={require("../assets/chat.png")}
          alt="images here"
          width="17px"
          height="17px"
        />
      </label>
    </div>
  );
}
export default ContactList;
