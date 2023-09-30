import { Features, Hero, NewsLetter, Steps, WorksInfo } from "../../components"

const Home = () => {
  return (
    <div className="w-[calc(100%-2rem)] max-w-[1300px] flex-1 min-h-[300px]">
        <Hero />
        <Steps />
        <WorksInfo />
        <Features />
        <NewsLetter />
    </div>
  )
}

export default Home