import * as React from 'react'
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
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>
  isSelected: boolean
}
