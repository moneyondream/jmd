import { Button } from "@mui/material";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="contactContainer">
        <h1>Contact Us</h1>
        <form className="contactForm" onSubmit={submitForm}>
          <div className="contactInputContainer">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contactInputContainer">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contactInputContainer">
            <label>Mobile</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="contactInputContainer">
            <label>Message</label>
            <textarea rows={10} value={message} 
            onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>

          <Button type="submit" className="send">
            Send
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
