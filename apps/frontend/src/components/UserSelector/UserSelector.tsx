import * as React from "react";

export type UserSelectorProps = {
  users: {
    name: string;
    id: string;
  }[];
  onChange: React.EventHandler<React.SyntheticEvent<HTMLSelectElement>>;
  value?: string;
};

const UserSelector = ({ users, onChange, value }: UserSelectorProps) => {
  return (
    <select value={value} defaultValue="" onChange={onChange}>
      <option value="" disabled>
        Select a user
      </option>
      {users.map((u) => (
        <option key={u.id} value={u.id}>
          {u.name}
        </option>
      ))}
    </select>
  );
};

export default UserSelector;
