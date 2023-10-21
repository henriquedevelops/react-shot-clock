'use client'

import counterFont from '@/utils/counterFont'
import React, { FC, useEffect, useState } from 'react'

const ShotClock: FC = () => {
  const [seconds, setSeconds] = useState(24)
  const [isCounting, setIsCounting] = useState(false)
  const [timeoutId, setTimeoutId] = useState<null | NodeJS.Timeout>(null)

  // Handle countdown logic when isCounting is set to "true".
  useEffect(() => {
    if (isCounting) {
      if (seconds > 0) {
        // Start a new timeout to decrement seconds by one after 1 second.
        setTimeoutId(
          setTimeout(
            () => setSeconds((previousSeconds) => previousSeconds - 1),
            1000
          )
        )
      } else {
        // Stop the countdown when seconds reach 0.
        setIsCounting(false)
      }
    }
  }, [isCounting, seconds])

  // Reusable function to reset the timeout ID and clear any existing timeout.
  const resetTimeoutId = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
  }

  const handleStartOrStopCounter = () => {
    resetTimeoutId() // Clear any existing timeout.
    if (seconds === 0) setSeconds(24) // Reset the timer if it's at 0.
    setIsCounting((previousState) => !previousState) // Toggle the counting state.
  }

  const handleResetCounter = () => {
    resetTimeoutId() // Clear any existing timeout.
    setIsCounting(false) // Stop the countdown.
    setSeconds(24) // Reset the timer to 24 seconds.
  }

  return (
    <div className="flex flex-col items-center min-w-[300px]">
      {/* Display the countdown timer. */}
      <div
        className={`text-[16rem] text-red-600 ${counterFont.className}`}
        data-testid="countdown-display"
      >
        {seconds}
      </div>

      {/* Button to start/stop the countdown. */}
      <button
        className="flex items-center justify-center uppercase mb-3 border-2 border-white w-28 h-10  font-semibold rounded-lg text-white"
        onClick={handleStartOrStopCounter}
        data-testid="start-stop-button"
      >
        {isCounting ? 'Stop' : 'Start'}
      </button>

      {/* Button to reset the countdown. */}
      <button
        className="flex items-center justify-center uppercase border-2 border-white w-28 h-10 font-semibold mb-3 rounded-lg text-white"
        onClick={handleResetCounter}
        data-testid="reset-button"
      >
        Reset
      </button>

      {/* Display the current status of the countdown (Counting or Stopped). */}
      <p className="text-neutral-300" data-testid="status-text">
        {isCounting ? 'Counting...' : 'Stopped'}
      </p>
    </div>
  )
}

export default ShotClock
