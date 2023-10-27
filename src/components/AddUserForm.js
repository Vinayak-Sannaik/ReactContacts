import React, { useState } from "react";

function AddContact({ addUser }) {
  const [username, setUserName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact || !username || !email) {
      alert("Please Enter all the fields");
      return; // Don't proceed if any field is missing
    }

    const newUser = {
      name: username,
      contact: contact,
      email: email,
    };

    addUser(newUser);
    // Reset the form fields after submission
    setUserName("");
    setContact("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Add New Contact</h4>
        <input
          type="text"
          placeholder="Name"
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Mobile Number"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn" type="submit">
          Create
        </button>
      </form>
    </>
  );
}

export default AddContact;
