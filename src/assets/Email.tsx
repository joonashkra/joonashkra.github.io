
const Email = ({size = 25, color = "#1cc4a3"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={size}
    width={size}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M3.75 5.25 3 6v12l.75.75h16.5L21 18V6l-.75-.75H3.75Zm.75 2.446v9.554h15V7.695L12 14.514 4.5 7.696Zm13.81-.946H5.69L12 12.486l6.31-5.736Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Email
