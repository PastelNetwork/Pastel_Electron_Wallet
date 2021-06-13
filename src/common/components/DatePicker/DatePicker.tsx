import React from 'react'
import ReactDatePicker from 'react-datepicker'
// import cn from 'classnames';
// Components
import Input from '../Input'
// Assets
import ChevronIcon from '../../assets/icons/ico-chevron.svg'

type DatePickerProps = {
  positionFixed?: boolean
  selected: Date | null
  onChange: (date: Date, event: React.SyntheticEvent) => void
  label?: string
  hint?: string
  placeholder?: string
}

type CustomHeaderProps = {
  date: Date
  decreaseMonth: () => void
  increaseMonth: () => void
  prevMonthButtonDisabled: boolean
  nextMonthButtonDisabled: boolean
}

const DatePicker: React.FC<DatePickerProps> = ({
  positionFixed = true,
  label,
  hint,
  placeholder,
  selected,
  onChange,
}) => {
  const customHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: CustomHeaderProps) => (
    <div className='flex justify-between px-4 pt-5 pb-1'>
      <h5 className='font-heavy'>
        {date.toLocaleString('default', { month: 'long' })}
      </h5>
      <div>
        <button
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
          className='focus:outline-none p-1 mr-5'
        >
          <img src={ChevronIcon} className='transform rotate-90' />
        </button>
        <button
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
          className='focus:outline-none p-1'
        >
          <img src={ChevronIcon} className='transform -rotate-90' />
        </button>
      </div>
    </div>
  )

  // const inputChevronClasses = cn({
  //   'transition transition-transform duration-300': true,
  //   'transform rotate-180': isOpened
  // });

  return (
    <ReactDatePicker
      // customInput={<Input prepend={<CalendarIcon />} append={<ChevronIcon className={inputChevronClasses} />} label={label} hint={hint} />}
      customInput={
        <Input label={label} hint={hint} placeholder={placeholder} />
      }
      renderCustomHeader={customHeader}
      calendarClassName='date-picker'
      showPopperArrow={false}
      // onCalendarOpen={() => setIsOpened(true)}
      // onCalendarClose={() => setIsOpened(false)}
      selected={selected}
      onChange={onChange}
      popperModifiers={{
        preventOverflow: {
          enabled: true,
          boundariesElement: 'viewport',
        },
      }}
      popperProps={{
        positionFixed,
      }}
    />
  )
}

export default DatePicker
