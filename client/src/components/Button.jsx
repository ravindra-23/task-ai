import { Link } from "react-router-dom"

const Button = ({ text }) => {
  return (
    <Link to='/tasks'>
        <button className="px-4 py-1 bg-brand text-text whitespace-nowrap rounded-lg hover:bg-custom_02 transition-all duration-300">
            {text}
        </button>
    </Link>
  )
}

export default Button