import Button from './Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="min-h-[400px] pt-12 dm:pt-20">
        <div>
            <div className="bg-gradient-to-r from-[transparent] to-text2 rounded-[100px] h-[30px] w-[180px] relative">
                <span className="absolute top-[50%] translate-y-[-50%] right-[3px] rounded-[100px] h-[26px] w-[calc(100%-3px)] bg-background">
                    More Life. Less Work.
                </span>
            </div>

            <h1 className="font-poppins font-bold max-w-[500px] my-2 text-xlarge leading-[60px]">
                Innovate AI Tool That Helps{" "}
                <span className="text-brand">Mange Tasks</span> So You Can Enjoy More
                Life!
			</h1>

            <div className="flex items-center gap-2 mt-4">
                <Link to='/tasks'>
                    <Button text="Let's Get Started" />
                </Link>
			</div>
        </div>
    </div>
  )
}

export default Hero