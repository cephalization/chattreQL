import * as React from "react";
import "./App.css";
import UserSelector from "./components/UserSelector";

function App() {
  const [selectedUser, setSelectedUser] = React.useState<undefined | string>();

  console.log(selectedUser);

  return (
    <div className="container">
      <h1 className="title">
        <span>ChattreQL</span>
      </h1>
      <UserSelector
        onChange={(e) => setSelectedUser(e.currentTarget.value)}
        value={selectedUser}
      />
      <p className="description">
        Built With <a href="https://turborepo.org/">Turborepo</a> +{" "}
        <a href="https://vitejs.dev/">Vite</a>
      </p>
    </div>
  );
}

export default App;
