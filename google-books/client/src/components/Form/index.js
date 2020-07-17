import React from "react";

export function Input(props) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div>
      <textarea rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} >
      {props.children}
    </button>
  );
}
