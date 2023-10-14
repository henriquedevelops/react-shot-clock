import { FC } from 'react'
import ShotClock from '@/components/ShotClock'

const Home: FC = () => {
  return (
    <main className="flex flex-col items-center min-h-screen bg-black  text-white px-[3%] pb-16">
      <h1 className="text-8xl mt-20 font-bold text-center -mb-10">
        React Shot Clock 🏀
      </h1>

      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-center gap-10 lg:gap-28">
        <ShotClock />
        <ShotClock />
      </div>
    </main>
  )
}

export default Home
