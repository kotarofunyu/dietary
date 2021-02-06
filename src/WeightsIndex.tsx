import React from 'react'
import { Weight } from './Weight'
import { BaseTable } from './BaseTable'

const weights: Array<Weight> = [
  {
    id: 1,
    date: '2020-01-01',
    weight: 90,
    comment: '',
  },
  {
    id: 2,
    date: '2020-01-02',
    weight: 91,
    comment: '',
  },
  {
    id: 3,
    date: '2020-01-03',
    weight: 91.2,
    comment: '',
  },
]

export function WeightsIndex() {
  return (
    <div>
      <BaseTable weights={weights} />
    </div>
  )
}
