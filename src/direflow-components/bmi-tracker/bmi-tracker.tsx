import { Styled } from 'direflow-component'
import React, { useCallback } from 'react'
import styles from './tracker.css'

export const BMITracker: React.FunctionComponent = () => {
  const [state, setState] = React.useState<{ weight: number; height: number }>({
    weight: 0,
    height: 0,
  })
  const [bmi, setBmi] = React.useState<number>()

  const handleChange = useCallback((e) => {
    if (e.target.value > 999) {
      e.target.value = 999
    }
    setState({ ...state, [e.target.name]: e.target.value })
  }, [state])

  const calculateBMI = useCallback(() => {
    const heightInM = state.height / 100
    const _bmi = Number((state.weight / (heightInM * heightInM)).toFixed(2))
    setBmi(_bmi)
  }, [state])

  return (
    <Styled styles={styles}>
      <div className='wrapper'>
        <div className='input-wrapper'>
          <label className='label' htmlFor="weight">Weight (in kg)</label>
          <input
            id="weight"
            name="weight"
            type="number"
            min="1"
            max="999"
            placeholder="0"
            value={state.weight}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <label className='label' htmlFor="height">Height (in cm)</label>
          <input
            id="height"
            name="height"
            type="number"
            min="1"
            max="999"
            placeholder="0"
            value={state.height}
            onChange={handleChange}
          />
        </div>
        <button className='primarybutton' onClick={calculateBMI}>
          Calculate BMI
        </button>
        {bmi && <span>BMI: {bmi}</span>}
      </div>
    </Styled>
  )
}
