import React, { useState } from "react";

function EditUserForm({ user, onSave, onCancel }) {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser); // Pass the edited user data to the parent component
  };

  return (
    <div className="edit-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name :"
          value={editedUser.name}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="contact"
          placeholder="Number :"
          value={editedUser.contact}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email :"
          value={editedUser.email}
          onChange={handleInputChange}
        />

        <button className="btn" type="submit">
          Save
        </button>
        <button className="btn" type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditUserForm;
