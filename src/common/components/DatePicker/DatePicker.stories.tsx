import React from 'react'
import DatePicker from './index'

export const DatePickerDefault: React.FC = () => {
  const [date, setDate] = React.useState(new Date())

  return (
    <DatePicker
      label='Date picker'
      selected={date}
      hint='   / / /'
      onChange={date => setDate(date)}
    />
  )
}

export default {
  component: DatePicker,
  title: 'Date Picker',
}
