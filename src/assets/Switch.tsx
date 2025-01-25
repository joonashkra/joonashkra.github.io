const Switch = ({ size = 25 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className="dark:stroke-lightblue stroke-blue"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 10 3-3m0 0-3-3m3 3H7m-1 7-3 3m0 0 3 3m-3-3h14"
    />
  </svg>
);
export default Switch;
