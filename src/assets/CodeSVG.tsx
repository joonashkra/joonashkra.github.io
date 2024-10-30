
const CodeSVG = ({size = 24}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={size}
    width={size}
  >
    <g strokeWidth={1.5}>
      <path
        d="M3.353 8.95A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8 9.5 2.078 1.732a1 1 0 0 1 0 1.536L8 14.5"
      />
      <path stroke="#fff" strokeLinecap="round" d="M12.5 14.5H16" />
    </g>
  </svg>
)
export default CodeSVG
