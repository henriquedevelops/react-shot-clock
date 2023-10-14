'use client'

import React, { FC, useEffect, useState } from 'react'
import localFont from 'next/font/local'

const counterFont = localFont({ src: '../public/digital-7.ttf' })

const ShotClock: FC = () => {
  const [seconds, setSeconds] = useState(24)
  const [isCounting, setIsCounting] = useState(false)

  useEffect(() => {
    const timeout = setInterval(() => {
      if (isCounting && seconds > 0)
        setSeconds((previousSeconds) => previousSeconds - 1)
    }, 1000)

    return () => clearInterval(timeout)
  }, [isCounting, seconds])

  const handleReset = () => {
    setIsCounting(false)
    setSeconds(24)
  }

  const handleStartOrStop = () => {
    setIsCounting(!isCounting)
  }

  return (
    <div className="flex flex-col items-center min-w-[300px]">
      <div className={`text-[16rem] text-red-600 ${counterFont.className}`}>
        {seconds}
      </div>

      <button
        className="flex items-center justify-center uppercase mb-3 border-2 border-white w-28 h-10  font-semibold rounded-lg text-white"
        onClick={handleStartOrStop}
      >
        {isCounting ? 'Stop' : 'Start'}
      </button>

      <button
        className="flex items-center justify-center uppercase border-2 border-white w-28 h-10 font-semibold mb-3 rounded-lg text-white"
        onClick={handleReset}
      >
        Reset
      </button>

      <p className="text-neutral-300">
        {isCounting ? 'Counting...' : 'Stopped'}
      </p>
    </div>
  )
}

export default ShotClock
