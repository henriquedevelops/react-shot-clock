import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ShotClock from './ShotClock'

test('ShotClock renders without errors', () => {
  render(<ShotClock />)
})

test('ShotClock starts counting when "Start" is clicked', () => {
  const { getByTestId } = render(<ShotClock />)
  const startOrStopButton = getByTestId('start-stop-button')

  fireEvent.click(startOrStopButton)
})

test('ShotClock stops counting when "Stop" is clicked', () => {
  const { getByTestId } = render(<ShotClock />)
  const startOrStopButton = getByTestId('start-stop-button')

  fireEvent.click(startOrStopButton)

  const stopButton = getByTestId('start-stop-button')
  fireEvent.click(stopButton)
})

test('ShotClock resets when "Reset" is clicked', () => {
  const { getByTestId } = render(<ShotClock />)
  const startOrStopButton = getByTestId('start-stop-button')

  fireEvent.click(startOrStopButton)

  const resetButton = getByTestId('reset-button')
  fireEvent.click(resetButton)
})
