import Button from './Button'

const NewsLetter = () => {
  return (
    <div className="w-full p-4 mt-24 mb-10 flex flex-col gap-4 items-center rounded-lg backdrop-blur-xl">
        <h1 className="text-xlarge font-poppins font-bold leading-[50px] text-center">
            Try it for <span className="text-brand">Free!</span>
        </h1>
        <p className="text-center my-4 text-secondary max-w-[800px]">
            AI Powered Task AI Is An Incredibly Easy Tool To Simplify Your Life.
            Quickly Receive Intelligent Action Steps To Perform Any Task. No More
            Wondering How To Get Stuff Done. Task AI Is Your Partner In
            Productivity.
        </p>
        <Button text="Let's Get Started" />
    </div>
  )
}

export default NewsLetter