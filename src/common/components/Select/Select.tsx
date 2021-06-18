import React, { ReactNode } from 'react'
import Downshift from 'downshift'
import caretDownIcon from 'common/assets/icons/ico-caret-down.svg'
import cn from 'classnames'
import { parseFormattedNumber } from 'common/utils/format'
import { useSelectOptions } from './select.utils'
import FormControl, {
  TFormControlProps,
} from 'common/components/Form/FormControl'
import { Controller } from 'react-hook-form'

export type TOption = {
  label: string
  value: string
}

export type TBaseProps = {
  placeholder?: string
  className?: string
  selectClassName?: string
  label?: ReactNode
  autocomplete?: boolean
  append?: ReactNode
  prepend?: ReactNode
  labelClasses?: string
}

export type TOptionsProps = TBaseProps & {
  options: TOption[]
  onChange: (option: TOption | null) => void
  selected?: TOption | null
}

export type TRangeProps = TBaseProps & {
  min: number
  max: number
  step: number
  onChange: (value: number | null) => void
  value: number | null
}

export type TFormOptionsProps = TBaseProps &
  Omit<TFormControlProps, 'children'> & {
    options: TOption[]
  }

export type TSelectProps = TOptionsProps | TFormOptionsProps | TRangeProps

export default function Select(props: TSelectProps): JSX.Element {
  if ('form' in props) {
    return (
      <FormControl {...props}>
        <Controller
          name={props.name}
          control={props.form.control}
          render={({ field: { value, onChange } }) => (
            <SelectInner
              {...props}
              label={undefined}
              selected={value}
              onChange={onChange}
            />
          )}
        />
      </FormControl>
    )
  }

  return <SelectInner {...props} />
}

const SelectInner = (props: TOptionsProps | TRangeProps) => {
  const {
    placeholder,
    selectClassName,
    label,
    autocomplete = false,
    append,
    labelClasses = 'text-gray-71 mr-2 absolute right-2.5',
  } = props

  const {
    options,
    selected,
    onChange,
    onInputValueChange,
    inputValueRef,
  } = useSelectOptions(props)

  let autoCompleteColor: string
  if ('options' in props) {
    autoCompleteColor = props.label ? 'text-gray-2d' : 'text-gray-71'
  } else {
    autoCompleteColor = 'text-gray-35'
  }

  return (
    <Downshift
      selectedItem={selected}
      onChange={onChange}
      itemToString={item => (item ? item.value : '')}
      onInputValueChange={onInputValueChange}
    >
      {({
        getItemProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        highlightedIndex,
        selectedItem,
        inputValue,
        getInputProps,
      }) => {
        const value =
          autocomplete &&
          inputValue &&
          parseFormattedNumber(inputValue).toString()
        const filteredOptions = isOpen
          ? value
            ? options.filter(option => option.value.startsWith(value))
            : options
          : undefined

        return (
          <div
            className={cn(
              'input flex-center p-0 relative',
              autoCompleteColor,
              selectClassName,
            )}
          >
            {autocomplete && (
              <div className='relative'>
                <input
                  className='h-full w-full rounded pl-18px pr-7 text-gray-35 font-extrabold focus-visible-border'
                  {...getToggleButtonProps()}
                  {...getInputProps()}
                  type='text'
                  role='input'
                  value={
                    append
                      ? `${inputValueRef.current}${append}`
                      : `${inputValueRef.current}`
                  }
                />
                {label && <span className={labelClasses}>{label}</span>}
              </div>
            )}
            {!autocomplete && (
              <button
                className='w-full h-full flex items-center whitespace-nowrap pl-3.5 pr-7 focus-visible-border'
                {...getToggleButtonProps()}
              >
                {label && <span className='text-gray-b0 mr-2'>{label}</span>}
                {selectedItem ? selectedItem.label : placeholder}
              </button>
            )}
            <img
              className={cn(
                'text-gray-b0 ml-2 absolute right-3 transition duration-200 transform',
                isOpen && 'rotate-180',
              )}
              src={caretDownIcon}
              alt='toggle menu'
            />
            <ul
              {...getMenuProps()}
              className='absolute top-full left-0 min-w-full mt-px rounded-md overflow-hidden bg-white border-gray-e6 shadow-16px text-gray-35 font-medium max-h-96 overflow-y-auto z-20'
              onClick={e => e.stopPropagation()}
            >
              {filteredOptions?.map((item, index) => {
                const highlight =
                  selectedItem === item || highlightedIndex === index

                return (
                  <li
                    {...getItemProps({
                      key: item.label,
                      index,
                      item,
                    })}
                    className={cn(
                      'w-full h-10 flex items-center px-4 text-gray-71 cursor-pointer',
                      highlight && 'bg-gray-f7',
                    )}
                  >
                    {item.label}
                    {append}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      }}
    </Downshift>
  )
}
