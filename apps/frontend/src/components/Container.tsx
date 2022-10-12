import clsx from "clsx";
import * as React from "react";

type ContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col gap-6 justify-end sm:justify-center sm:items-center sm:mx-auto sm:px-4 min-h-screen text-center"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
