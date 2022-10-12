import * as React from "react";
import "./App.css";
import Container from "./components/Container";
import Chat from "./views/Chat";
import Login from "./views/Login";

function App() {
  const [selectedUser, setSelectedUser] = React.useState<undefined | string>();

  if (selectedUser) {
    return (
      <Container>
        <Chat selectedUser={selectedUser} />
      </Container>
    );
  }

  return (
    <Container>
      <Login selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
    </Container>
  );
}

export default App;
