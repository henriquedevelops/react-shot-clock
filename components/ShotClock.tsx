'use client'

import React, { FC, useEffect, useState } from 'react'
import localFont from 'next/font/local'

const counterFont = localFont({ src: '../public/digital-7.ttf' })
let timeoutId: NodeJS.Timeout | null = null

const ShotClock: FC = () => {
  const [seconds, setSeconds] = useState(24)
  const [isCounting, setIsCounting] = useState(false)

  useEffect(() => {
    timeoutId = setTimeout(() => {
      if (isCounting && seconds > 0)
        setSeconds((previousSeconds) => previousSeconds - 1)
    }, 1000)

    if (seconds === 0) setIsCounting(false)
  }, [isCounting, seconds])

  const handleReset = () => {
    setIsCounting(false)
    setSeconds(24)
    timeoutId && clearTimeout(timeoutId)
  }

  const handleStartOrStop = () => {
    if (seconds === 0) {
      setSeconds(24)
      setIsCounting(true)
    } else {
      setIsCounting(!isCounting)
    }
  }

  return (
    <div className="flex flex-col items-center min-w-[300px]">
      <div
        className={`text-[16rem] text-red-600 ${counterFont.className}`}
        data-testid="countdown-display"
      >
        {seconds}
      </div>

      <button
        className="flex items-center justify-center uppercase mb-3 border-2 border-white w-28 h-10  font-semibold rounded-lg text-white"
        onClick={handleStartOrStop}
        data-testid="start-stop-button"
      >
        {isCounting ? 'Stop' : 'Start'}
      </button>

      <button
        className="flex items-center justify-center uppercase border-2 border-white w-28 h-10 font-semibold mb-3 rounded-lg text-white"
        onClick={handleReset}
        data-testid="reset-button"
      >
        Reset
      </button>

      <p className="text-neutral-300" data-testid="status-text">
        {isCounting ? 'Counting...' : 'Stopped'}
      </p>
    </div>
  )
}

export default ShotClock
