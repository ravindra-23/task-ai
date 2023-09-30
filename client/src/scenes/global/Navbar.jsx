import { Button, Logo } from '../../components'

const Navbar = () => {
  return (
    <div className='w-[calc(100%-2rem)] max-w-[1300px] py-4 flex items-center justify-between relative'>
        <Logo />
        <Button text='Create Task' />
    </div>
  )
}

export default Navbar