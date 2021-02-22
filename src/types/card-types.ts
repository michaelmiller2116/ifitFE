import * as React from 'react'
export type WorkoutType = {
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
  workout: WorkoutType
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>
  isSelected: boolean
}
