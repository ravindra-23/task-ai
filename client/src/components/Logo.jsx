import { Link } from 'react-router-dom'
import LogoIcon from '../assets/task.png'

const Logo = () => {
  return (
    <Link 
        to='/'
        className='text-brand uppercase font-jakarta font-bold text-medium flex items-center gap-2 hover:text-custom_02 transition-all duration-300'
    >
        <img 
            src={LogoIcon}
            alt="Task-ai"
            draggable="false"
            loading="lazy"
            className="w-8 h-8"
        />
        <span className="hidden md:block">Task AI</span>
    </Link>
  )
}

export default Logo