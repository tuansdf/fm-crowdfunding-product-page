import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

export default function BookmarkIcon({ ...rest }: Props) {
  return (
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g fill="none" fill-rule="evenodd">
        <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
        <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
}
