import * as React from "react";
import "./App.css";
import Chat from "./views/Chat";
import Login from "./views/Login";

function App() {
  const [selectedUser, setSelectedUser] = React.useState<undefined | string>();

  if (selectedUser) {
    return (
      <div className="container">
        <Chat selectedUser={selectedUser} />
      </div>
    );
  }

  return (
    <div className="container">
      <Login selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
    </div>
  );
}

export default App;
