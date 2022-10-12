import clsx from "clsx";
import * as React from "react";

export type ChatBarProps = {
  className?: string;
  classes?: {
    container?: string;
    input?: string;
    submitButton?: string;
  };
  onSubmit: (content: string) => Promise<{ success: boolean }>;
};

const ChatBar = ({ onSubmit, className, classes = {} }: ChatBarProps) => {
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handleSubmission = React.useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (value) {
        setLoading(true);
        const status = await onSubmit(value);
        setLoading(false);

        if (status.success) {
          setValue("");
        }

        setError(!status.success);
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
        "flex shadow-sm shadow-blue-300 rounded-sm items-center py-2 px-2 justify-between"
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
