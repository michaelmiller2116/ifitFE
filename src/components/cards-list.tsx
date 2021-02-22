import * as React from 'react'
import Card from './card'
import { workouts } from '../constants/constants-cards'

const CardsList: React.FunctionComponent = (): JSX.Element => {
  const [selected, setSelected] = React.useState<string>()
  return (
    <ul className="list-container">
      {workouts.map((workout) => {
        return (
          <Card
            workout={workout}
            setSelected={setSelected}
            isSelected={workout.title === selected}
          />
        )
      })}
    </ul>
  )
}

export default CardsList
