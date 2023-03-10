import { SVGProps } from "react";

export function VueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      aria-testid="vuejs"
      {...props}
    >
      <path
        fill="#41b883"
        d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"
      ></path>
      <path
        fill="#41b883"
        d="m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"
      ></path>
      <path
        fill="#35495e"
        d="M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"
      ></path>
    </svg>
  );
}
