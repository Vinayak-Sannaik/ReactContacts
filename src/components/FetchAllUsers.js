// // Fetch and show users from the api - https://jsonplaceholder.typicode.com/users

import React, { useState, useEffect } from "react";
import AddContact from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import "../App.css";

function AllUsers() {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  const fetchInfo = () => {
    return fetch(URL)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const addUser = (user) => {
    setData([...data, user]);
  };

  const updateUser = (userId, updatedUserData) => {
    const updatedData = data.map((user) => {
      if (user.id === userId) {
        return { ...user, ...updatedUserData };
      }
      return user;
    });

    setData(updatedData);
    setEditingUserId(userId);
  };

  const cancelUpdate = () => {
    setEditingUserId(null);
  };

  const deleteUser = (userId) => {
    const updatedData = data.filter((user) => user.id !== userId);
    setData(updatedData);
    alert('Wants to delete contact !!');
  };

  return (
    <>
      <AddContact addUser={addUser} />
      {data.map((dataObj) => {
        return (
          <div className="contact-card" key={dataObj.id}>
            {editingUserId === dataObj.id ? (
              // Render the EditUserForm when in edit mode
              <EditUserForm
                user={dataObj}
                onSave={(updatedUserData) => {
                  updateUser(dataObj.id, updatedUserData);
                  cancelUpdate();
                }}
                onCancel={cancelUpdate}
              />
            ) : (
              <>
                <p> <span className="label">User Name :</span> {dataObj.name}</p>
                <p> <span className="label">User Email :</span> {dataObj.email}</p>
                <button
                  className="list-btn"
                  onClick={() => updateUser(dataObj.id)}
                >
                  Update
                </button>
                <button
                  className="list-btn"
                  onClick={() => deleteUser(dataObj.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

export default AllUsers;
