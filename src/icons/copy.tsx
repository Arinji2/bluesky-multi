import { IconProps, IconSvg } from "./base";

export const StyledCopyIcon = (props: IconProps) => (
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
      fill="#FFB443"
      stroke="black"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M59.75 32.75H38.9167C36.6155 32.75 34.75 34.6155 34.75 36.9167V57.75C34.75 60.0512 36.6155 61.9167 38.9167 61.9167H59.75C62.0512 61.9167 63.9167 60.0512 63.9167 57.75V36.9167C63.9167 36.9167 63.9167 32.75 59.75 32.75Z"
      fill="black"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.1666 48.1667V27.3334C25.1666 25.0417 27.0416 23.1667 29.3333 23.1667H50.1666"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconSvg>
);
