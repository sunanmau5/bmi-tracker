import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BMITracker } from '../bmi-tracker'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BMITracker />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<BMITracker />).toJSON()
  expect(renderTree).toMatchSnapshot()
})
