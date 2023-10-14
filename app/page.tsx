import { FC } from 'react'
import ShotClock from '@/components/ShotClock'

const Home: FC = () => {
  return (
    <main className="flex flex-col items-center min-h-screen bg-black  text-white">
      <h1 className="text-8xl mt-20 font-bold text-center -mb-10">
        React Shot Clock 🏀
      </h1>

      <div className="flex justify-center  gap-28">
        <ShotClock />
        <ShotClock />
      </div>
    </main>
  )
}

export default Home
