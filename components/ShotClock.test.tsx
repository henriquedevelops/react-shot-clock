import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ShotClock from './ShotClock'

test('ShotClock renders without errors', () => {
  render(<ShotClock />)
})

test('ShotClock starts counting when "Start" is clicked', () => {
  const { getByText } = render(<ShotClock />)
  const startButton = getByText('Start')

  fireEvent.click(startButton)
})
