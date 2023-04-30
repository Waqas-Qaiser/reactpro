import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);

    let newtext = text.toUpperCase();

    setText(newtext);
  };

  const handleOnChange = (event) => {
    console.log("onchange");

    setText(event.target.value);
  };

  const [text, setText] = useState("game inn");

  return (
    <>
      <div className="container">
        <h1> {props.heading} </h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          {" "}
          Convert to uppercase
        </button>
      </div>

      <div className="container my-12">
        <h1>your summary</h1>
      </div>
    </>
  );
}