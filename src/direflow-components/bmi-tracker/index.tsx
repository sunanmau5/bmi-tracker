import { DireflowComponent } from 'direflow-component'
import { BMITracker } from './bmi-tracker'

export default DireflowComponent.create({
  component: BMITracker,
  configuration: {
    tagname: 'bmi-tracker',
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Advent Pro', 'Noto Sans JP', 'Poppins'],
        },
      },
    },
  ],
})
