import clsx from "clsx";
import * as React from "react";

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
};

const ChatBar = ({
  onSubmit,
  className,
  classes = {},
  error,
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

  return (
    <form
      className={clsx(
        className,
        classes.container,
        error && "",
        "flex w-full shadow-sm shadow-blue-300 rounded-sm items-center py-2 px-2 justify-between"
      )}
      onSubmit={handleSubmission}
    >
      <input
        className={clsx(classes.input, "w-full p-1")}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="Say something nice"
      />
      <button className={clsx(classes.submitButton, "ml-2")} disabled={!value}>
        submit
      </button>
    </form>
  );
};

export default ChatBar;
