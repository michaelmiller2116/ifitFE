import * as React from 'react'
import { CardProps } from '../types/card-types'
import SVG from '../components/svg'

const Card: React.FunctionComponent<CardProps> = ({
  workout,
  setSelected,
  isSelected,
}): JSX.Element => {
  return (
    <li
      className={`${isSelected ? 'selected ' : ''}card`}
      key={workout.title}
      onClick={() => setSelected(workout.title)}
    >
      <div className="card-image-container">
        <img className="card-image" alt={workout.thumbAlt} src={workout.thumb}></img>
        {workout.isSeries && (
          <div className="card-overlay">
            <div>{workout.number}</div>
            <span className="card-overlay-workouts">Workouts</span>
            <SVG type="album" />
          </div>
        )}
      </div>
      <div className="card-text">
        <header className="card-header">
          <h5>{workout.title}</h5>
          <img src={workout.trainer} alt={workout.trainerAlt} className="card-header-image" />
        </header>
        <div className="card-body">
          {workout.distance && (
            <span className="card-body-stats">
              <SVG type="stop-watch" /> {workout.time} <SVG type="track" />
              {workout.distance}
            </span>
          )}
          <span className="card-body-details">{workout.hasDetails && 'VIEW DETAILS'}</span>
        </div>
      </div>
    </li>
  )
}

export default Card
