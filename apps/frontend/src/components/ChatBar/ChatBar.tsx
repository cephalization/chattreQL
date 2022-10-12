import clsx from "clsx";
import * as React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export type ChatBarProps = {
  className?: string;
  classes?: {
    container?: string;
    input?: string;
    submitButton?: string;
  };
  loading: boolean;
  error?: string;
  onSubmit: (
    content: string
  ) => Promise<{ data?: { createMessage?: { id: string } } }>;
  user?: {
    id: string;
    name: string;
  };
};

const ChatBar = ({
  onSubmit,
  className,
  classes = {},
  error,
  user,
  loading,
}: ChatBarProps) => {
  const [value, setValue] = React.useState("");
  const handleSubmission = React.useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (value) {
        const result = await onSubmit(value);
        if (result?.data?.createMessage?.id) {
          setValue("");
        }
      }
    },
    [onSubmit, value]
  );

  const placeholderText = `${
    user ? `Hi ${user.name}! ` : ""
  }Say something nice`;

  return (
    <form
      className={clsx(
        className,
        classes.container,
        error && "",
        "flex w-full shadow-sm shadow-blue-300 rounded-md items-center py-2 px-2 justify-between"
      )}
      onSubmit={handleSubmission}
    >
      <input
        className={clsx(classes.input, "w-full p-1 outline-1 outline-blue-100")}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder={placeholderText}
      />
      <button
        className={clsx(
          classes.submitButton,
          value && "hover:bg-slate-300",
          "ml-2 rounded-md bg-slate-200 disabled:bg-slate-50 disabled:text-slate-400  px-2 py-1 transition-colors duration-150"
        )}
        disabled={!value}
        type="submit"
      >
        send
      </button>
    </form>
  );
};

export default ChatBar;
