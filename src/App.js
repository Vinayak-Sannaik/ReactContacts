// Add a contact, make a POST call to the above url (from where you are fetching) and save the contact in react state. (This will be a dummy request, you won’t be able to add contacts to the server. But the request is valid and will send you some data. Read the guide).

// FYI - The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

import "./App.css";
import AllUsers from "./components/FetchAllUsers";

function App() {
  return (
    <>
      <div className="heading">
        <h1>All Users</h1>
      </div>
      <div className="contact-grid">
        <AllUsers></AllUsers> <br></br>
      </div>
    </>
  );
}

export default App;
