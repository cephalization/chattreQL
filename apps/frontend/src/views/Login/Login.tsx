import * as React from "react";
import ConnectedUserSelector from "../../components/UserSelector";

type LoginProps = {
  selectedUser?: string;
  setSelectedUser: (userId: string) => void;
};

const Login = ({ selectedUser, setSelectedUser }: LoginProps) => {
  return (
    <div>
      <h1 className="title">
        <span>ChattreQL</span>
      </h1>
      <ConnectedUserSelector
        onChange={(e) => setSelectedUser(e.currentTarget.value)}
        value={selectedUser}
      />
      <p className="description">
        Built With <a href="https://turborepo.org/">Turborepo</a> +{" "}
        <a href="https://vitejs.dev/">Vite</a>
      </p>
    </div>
  );
};

export default Login;
