const Button = ({ text }) => {
  return (
    <button className="px-4 py-1 bg-brand text-text whitespace-nowrap rounded-lg hover:bg-custom_02 transition-all duration-300 shadow-md">
        {text}
    </button>
  )
}

export default Button