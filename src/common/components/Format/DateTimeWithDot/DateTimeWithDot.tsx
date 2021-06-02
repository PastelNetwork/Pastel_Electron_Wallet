import React from 'react'
import dayjs, { Dayjs } from 'dayjs'

export type DateTimeWithDotProps = {
  value: number | string | Dayjs
  className?: string
}

export default function DateTimeWithDot({
  value,
  className,
}: DateTimeWithDotProps): JSX.Element {
  const date = typeof value === 'object' ? value : dayjs(value)

  return (
    <div className={className}>
      {date.format('MM/DD/YYYY')}
      <span className='mx-1 font-black relative -top-px'>·</span>
      {date.format('hh:mm')}
    </div>
  )
}
