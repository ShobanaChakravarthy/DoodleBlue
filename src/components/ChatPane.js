import React, { useState } from "react";
import "../styles.css";
import contacts from "./contacts";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChatPane(props) {
  var chatI = contacts.map(e => e.fullName).indexOf(props.chatUser);
  var userI = contacts.map(e => e.fullName).indexOf(props.loggedUser);
  const [msgs, setMsgs] = useState([]);
  const [inp, setInp] = useState({ chatMsg: "" });
  function sending() {
    setMsgs([
      ...msgs,
      {
        msg: inp.chatMsg,
        sender: props.loggedUser,
        receiver: props.chatUser
      }
    ]);
    setInp({});
  }
  function chknewmsgs() {
    var res = [];
    for (var i = 0; i < msgs.length; i++) {
      if (
        (msgs[i].receiver === props.loggedUser) &
        (msgs[i].sender === props.chatUser)
      ) {
        res.push(
          <div className="msg">
            <div
              className="circleC"
              style={{ background: contacts[chatI].color }}
            >
              {contacts[chatI].logoFont}
            </div>
            <div className="nameIn2">
              <label className="lab16">{msgs[i].msg}</label>
            </div>
          </div>
        );
      }
      if (
        (msgs[i].receiver === props.chatUser) &
        (msgs[i].sender === props.loggedUser)
      ) {
        res.push(
          <div className="msg1">
            <div
              className="circleC"
              style={{ background: contacts[userI].color }}
            >
              {contacts[userI].logoFont}
            </div>
            <div className="nameIn2">
              <label className="lab16">{msgs[i].msg}</label>
            </div>
          </div>
        );
      }
    }
    return res;
  }
  function handleChange(e) {
    setInp({ ...inp, [e.target.name]: e.target.value });
  }
  return (
    <div className=" chatBox">
      <div className="chatHeader">
        <div
          className="chatCircle"
          style={{ background: contacts[chatI].color }}
        >
          {contacts[chatI].logoFont}
        </div>
        <div className="chatUserName">{props.chatUser}</div>
      </div>
      <div className="messagesBox">{chknewmsgs()}</div>
      <div className="sendMessage">
        <input
          type="text"
          className="sendMsgInput"
          onChange={handleChange}
          name="chatMsg"
          placeholder="    Please type your message here  "
          value={setInp["chatMsg"]}
        />
        <button className="sendMsg" onClick={sending}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}
export default ChatPane;
