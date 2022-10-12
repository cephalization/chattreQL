import * as React from "react";
import ConnectedUserSelector from "../../components/UserSelector";

type LoginProps = {
  selectedUser?: string;
  setSelectedUser: (userId: string) => void;
};

const Login = ({ selectedUser, setSelectedUser }: LoginProps) => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="title">
        <span>ChattreQL</span>
      </h1>
      <ConnectedUserSelector
        onChange={(e) => setSelectedUser(e.currentTarget.value)}
        value={selectedUser}
      />
      <p className="description mt-2">
        Built With <a href="https://turborepo.org/">Turborepo</a> +{" "}
        <a href="https://vitejs.dev/">Vite</a>
      </p>
    </div>
  );
};

export default Login;
