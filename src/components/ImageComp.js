import React from "react";
import "../styles.css";

function ImageComp(props) {
  return (
    <img
      className="icons"
      src={props.fileName}
      alt="img here"
      width={props.width}
      height={props.height}
    />
  );
}
export default ImageComp;
