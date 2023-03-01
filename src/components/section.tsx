import clsx from "clsx";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

export default function Section({ children, className, ...rest }: Props) {
  return (
    <section
      className={clsx(
        "relative mx-6 rounded-xl bg-white px-6 py-10 drop-shadow-sm",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
