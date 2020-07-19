import React, { useState } from "react";
import Modal from "react-modal";
import randomColor from "randomcolor";
import SideNav from "./SideNav";
import Header from "./Header";
import LeftTop from "./LeftTop";
import ContactList from "./ContactList";
import RightPane from "./RightPane";
import ContactInfo from "./ContactInfo";
import ChatPane from "./ChatPane";
import contacts from "./contacts";
import "../styles.css";

var modalName = "";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "480px",
    height: "560px",
    transform: "translate(-50%, -50%)"
  }
};

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedUserName, setSel] = useState(contacts[0].fullName);
  const [changeVal, setChangeVal] = useState({});
  const [idEdit, setId] = useState({});
  const [chatName, selChatName] = useState({});
  const [chatVisible, setChatVisible] = useState(false);
  const [boxS, setBoxS] = useState({
    boxLogoFont: contacts[1].logoFont,
    boxFullName: contacts[1].fullName,
    boxEmail: contacts[1].mail,
    boxPhone: contacts[1].phone,
    boxCompany: contacts[1].company,
    boxAddress: contacts[1].address,
    boxPosition: contacts[1].position,
    boxColor: contacts[1].color
  });
  function handleChange(e) {
    setChangeVal({ ...changeVal, [e.target.name]: e.target.value });
  }
  function addORedit(e) {
    e.preventDefault();
    if (e.target.name === "Add Contact") {
      contacts.push({
        id: contacts.length,
        logoFont:
          changeVal["firstNameS"].substring(0, 1).toUpperCase() +
          changeVal["lastNameS"].substring(0, 1).toUpperCase(),
        fullName: changeVal["firstNameS"] + " " + changeVal["lastNameS"],
        mail: changeVal["emailS"],
        company: changeVal["companyS"],
        position: changeVal["positionS"],
        phone: changeVal["phoneS"],
        address: changeVal["addressS"],
        color: randomColor()
      });
    } else {
      contacts[idEdit].logoFont =
        changeVal["firstNameS"].substring(0, 1).toUpperCase() +
        changeVal["lastNameS"].substring(0, 1).toUpperCase();
      contacts[idEdit].fullName =
        changeVal["firstNameS"] + " " + changeVal["lastNameS"];
      contacts[idEdit].mail = changeVal["emailS"];
      contacts[idEdit].company = changeVal["companyS"];
      contacts[idEdit].phone = changeVal["phoneS"];
      contacts[idEdit].address = changeVal["addressS"];
      contacts[idEdit].position = changeVal["positionS"];
    }
    closeModal();
    return contacts;
  }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function chkHere() {
    var res = [];
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].fullName !== selectedUserName) {
        res.push(
          <ContactList
            id={contacts[i].id}
            logoFont={contacts[i].logoFont}
            fullName={contacts[i].fullName}
            mail={contacts[i].mail}
            company={contacts[i].company}
            color={contacts[i].color}
            onClick={ModalChk}
            onClick1={selContact}
            handleChat={handleChat}
          />
        );
      }
    }
    return res;
  }
  function selContact(selUserName, flagForSel) {
    var index = "";
    if (flagForSel === 1) {
      const chkInd = contacts.map(e => e.fullName).indexOf(selUserName);
      if (chkInd > 0) {
        index = 0;
      }
      if (chkInd === 0) {
        index = 1;
      }
    } else {
      index = contacts.map(e => e.fullName).indexOf(selUserName);
    }

    setBoxS({
      boxLogoFont: contacts[index].logoFont,
      boxFullName: contacts[index].fullName,
      boxEmail: contacts[index].mail,
      boxPhone: contacts[index].phone,
      boxCompany: contacts[index].company,
      boxAddress: contacts[index].address,
      boxPosition: contacts[index].position,
      boxColor: contacts[index].color
    });
  }
  function ModalChk(e, id) {
    if (e.target.className === "but1") {
      modalName = "Add Contact";
      setChangeVal({});
      openModal();
    } else {
      setId(id);
      modalName = "Edit Contact";
      var fullName = contacts[id].fullName.split(" ");
      setChangeVal({
        firstNameS: fullName[0],
        lastNameS: fullName[1],
        emailS: contacts[id].mail,
        companyS: contacts[id].company,
        addressS: contacts[id].address,
        phoneS: contacts[id].phone,
        positionS: contacts[id].position
      });
      openModal();
    }
  }
  function selectedUser(selUser) {
    setSel(selUser);
    selContact(selUser, 1);
  }
  function chkRightPane() {
    console.log(chatVisible);
    var res = [];
    if (chatVisible) {
      res.push(
        <RightPane>
          <ChatPane loggedUser={selectedUserName} chatUser={chatName} />
        </RightPane>
      );
    } else {
      res.push(
        <RightPane>
          <ContactInfo boxS={boxS} />
        </RightPane>
      );
    }
    return res;
  }
  function handleChat(name) {
    selChatName(name);
    setChatVisible(true);
    chkRightPane();
  }
  function tryHere() {
    setChatVisible(false);
  }
  return (
    <div className="mainApp">
      <SideNav />
      <div className="inApp1">
        <Header contacts={contacts} selUser={selectedUser} />
        <div className="inApp2">
          <div className="left">
            <LeftTop />
            <div className="secondLine" onClick={tryHere}>
              <input
                type="text"
                className="inputS"
                placeholder="    Search Contacts"
              />
              <button className="but1" onClick={ModalChk}>
                + Add Contact
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="modalhead">
                  <label className="modalheadtext">{modalName}</label>
                  <label className="modalClose" onClick={closeModal}>
                    <img
                      src={require("../assets/cancel.png")}
                      alt="images here"
                      width="24px"
                      height="24px"
                    />
                  </label>
                </div>
                <form onSubmit={addORedit} name={modalName}>
                  <input
                    type="text"
                    className="inputM"
                    placeholder="        FirstName   "
                    name="firstNameS"
                    value={changeVal["firstNameS"]}
                    onChange={handleChange}
                    required
                    pattern="[a-zA-Z]{1,15}"
                    title="Name should only contain Letters and maximum it should be 15 characters"
                  />
                  <input
                    type="text"
                    className="inputM"
                    placeholder="        LastName   "
                    name="lastNameS"
                    value={changeVal["lastNameS"]}
                    onChange={handleChange}
                    required
                    pattern="[a-zA-Z]{1,15}"
                    title="Name should only contain Letters and maximum it should be 15 characters"
                  />
                  <input
                    type="email"
                    className="inputM"
                    placeholder="        Email ID   "
                    name="emailS"
                    value={changeVal["emailS"]}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    className="inputM"
                    placeholder="        Company   "
                    name="companyS"
                    value={changeVal["companyS"]}
                    onChange={handleChange}
                    required
                    pattern="[a-zA-Z-\s]{1,50}"
                    title="Company Name should only contain Letters"
                  />
                  <input
                    type="text"
                    className="inputM"
                    placeholder="        Designation   "
                    name="positionS"
                    value={changeVal["positionS"]}
                    onChange={handleChange}
                    required
                    pattern="[a-zA-Z\s]{1,50}"
                    title="Designation should only contain Letters"
                  />
                  <input
                    type="text"
                    className="inputM"
                    placeholder="        Phone   "
                    name="phoneS"
                    value={changeVal["phoneS"]}
                    onChange={handleChange}
                    required
                    pattern="[0-9+\s-()]{10,11}"
                    title="Phone Number should only contain numbers(min 10 digits and max 11 digits)"
                  />
                  <input
                    type="text"
                    className="inputM"
                    placeholder="        Address   "
                    name="addressS"
                    value={changeVal["addressS"]}
                    onChange={handleChange}
                    required
                    pattern="[a-zA-Z-0-9,-\s]{1,100}"
                    title="Address should be within 100 letters"
                  />
                  <button type="submit" className="but2" value={modalName}>
                    {modalName}
                  </button>
                </form>
              </Modal>
            </div>
            <div className="thirdLine" onClick={tryHere}>
              <label className="lab1">+</label>
              <label className="lab2">Basic Info</label>
              <label className="lab3">Company</label>
              <label className="lab4">Edit</label>
              <label className="lab5">Chat</label>
            </div>
            {chkHere()}
          </div>
          {chkRightPane()}
        </div>
      </div>
    </div>
  );
}
export default App;
