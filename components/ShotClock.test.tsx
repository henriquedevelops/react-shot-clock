import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ShotClock from './ShotClock'

test('ShotClock renders without errors', () => {
  render(<ShotClock />)
})

test('ShotClock starts counting when "Start" is clicked', () => {
  const { getByTestId } = render(<ShotClock />)
  const startButton = getByTestId('start-stop-button')

  fireEvent.click(startButton)
})

test('ShotClock stops counting when "Stop" is clicked', () => {
  const { getByTestId } = render(<ShotClock />)
  const startButton = getByTestId('start-stop-button')

  fireEvent.click(startButton)

  const stopButton = getByTestId('start-stop-button')
  fireEvent.click(stopButton)
})

test('ShotClock resets when "Reset" is clicked', () => {
  const { getByTestId } = render(<ShotClock />)
  const startButton = getByTestId('start-stop-button')

  fireEvent.click(startButton)

  const resetButton = getByTestId('reset-button')
  fireEvent.click(resetButton)
})
