import { IconProps, IconSvg } from "./base";

export const StyledInfoIcon = (props: IconProps) => (
  <IconSvg
    viewBox="0 0 96 96"
    fill="none"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <rect
      x="18"
      y="18"
      width="68"
      height="68"
      fill="black"
      stroke="black"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <rect
      x="10"
      y="10"
      width="68"
      height="68"
      fill="#39DBFF"
      stroke="black"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path d="M44 20L44 28" stroke="black" strokeWidth="8" />
    <path d="M44 36L44 68" stroke="black" strokeWidth="8" />
  </IconSvg>
);
