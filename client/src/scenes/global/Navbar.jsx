import { Button, Logo } from '../../components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[calc(100%-2rem)] max-w-[1300px] py-4 flex items-center justify-between relative'>
        <Logo />

        <Link to='/tasks'>
          <Button text='Create Task' />
        </Link>
    </div>
  )
}

export default Navbar