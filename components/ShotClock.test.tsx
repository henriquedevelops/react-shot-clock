import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import ShotClock from './ShotClock'

jest.useFakeTimers()

test('ShotClock renders without errors', () => {
  render(<ShotClock />)
})

test('ShotClock starts counting when "Start" is clicked', () => {
  const { getByTestId } = render(<ShotClock />)
  const startOrStopButton = getByTestId('start-stop-button')
  const countdownStatus = getByTestId('status-text')

  expect(countdownStatus.textContent).toBe('Stopped')

  fireEvent.click(startOrStopButton)

  expect(countdownStatus.textContent).toBe('Counting...')
})

test('ShotClock stops counting when "Stop" is clicked', () => {
  const { getByTestId } = render(<ShotClock />)
  const startOrStopButton = getByTestId('start-stop-button')
  const countdownStatus = getByTestId('status-text')

  expect(countdownStatus.textContent).toBe('Stopped')

  fireEvent.click(startOrStopButton)

  expect(countdownStatus.textContent).toBe('Counting...')

  fireEvent.click(startOrStopButton)

  expect(countdownStatus.textContent).toBe('Stopped')
})

test('ShotClock counts down correctly', () => {
  const { getByTestId } = render(<ShotClock />)
  const startOrStopButton = getByTestId('start-stop-button')
  const countdownDisplay = getByTestId('countdown-display')

  fireEvent.click(startOrStopButton)

  act(() => {
    jest.advanceTimersByTime(1000)
  })

  expect(countdownDisplay.textContent).toBe('23')
})

test('ShotClock resets when "Reset" is clicked', () => {
  const { getByTestId } = render(<ShotClock />)
  const startOrStopButton = getByTestId('start-stop-button')
  const resetButton = getByTestId('reset-button')
  const countdownDisplay = getByTestId('countdown-display')

  fireEvent.click(startOrStopButton)

  act(() => {
    jest.advanceTimersByTime(1000)
  })

  expect(countdownDisplay.textContent).toBe('23')

  fireEvent.click(resetButton)

  expect(countdownDisplay.textContent).toBe('24')
})
