interface WorkoutProps {
  title: string
  hasDetails?: boolean
  isSeries?: boolean
  thumb: string
  trainer: string
  thumbAlt: string
  trainerAlt: string
  time?: string
  distance?: string
  number?: number
}

export interface CardProps {
  workout: WorkoutProps
  setSelected: Function
  isSelected: boolean
}
