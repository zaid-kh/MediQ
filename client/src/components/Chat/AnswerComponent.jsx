import { lightBlue } from "@mui/material/colors";
import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import "./Chat.css";
function AnswerComponent({ answer }) {
  console.log(answer);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        gap: "5px",
        marginBottom: "2em",
      }}
    >
      <FaUserDoctor color="#FAFAFA" fontSize="24px" />
      <div
        className="answer"
        style={{
          textAlign: "right",
          margin: "10px 0",
          padding: "10px",
          background: "#f0f0f0",
          borderRadius: "8px",
          maxWidth: "45%",
          position: "relative",
        }}
      >
        <p style={{ margin: "0" }}>{answer}</p>
      </div>
    </div>
  );
}

export default AnswerComponent;
