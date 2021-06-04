import React from 'react'

export type TMultiToggleDataItem = {
  label: string
  count?: number
}

export type TMultiToggle = {
  data: TMultiToggleDataItem[]
  activeIndex: number
  containerClassName?: string
  itemInActiveClassName?: string
  itemActiveClassName?: string
  countInActiveClassName?: string
  countActiveClassName?: string
  onToggle: (index: number) => void
}

const MultiToggleSwitch: React.FC<TMultiToggle> = ({
  data,
  activeIndex,
  containerClassName,
  itemInActiveClassName,
  itemActiveClassName,
  countInActiveClassName,
  countActiveClassName,
  onToggle,
}) => {
  const container_className = `inline-flex gap-3 p-3px rounded-full border border-navigation-default ${containerClassName}`

  const getItemClassName = (isActive: boolean) => {
    const activeClass = itemActiveClassName
      ? itemActiveClassName
      : 'bg-tab-active rounded-full text-white'
    const inActiveClass = itemInActiveClassName
      ? itemInActiveClassName
      : 'text-gray-71'

    return `flex font-avenir font-extrabold leading-4 text-sm py-1.5 px-3 cursor-pointer ${
      isActive ? activeClass : inActiveClass
    }`
  }

  const getCountClassName = (isActive: boolean) => {
    const activeClass = countActiveClassName
      ? countActiveClassName
      : 'bg-yellow-ff'
    const inActiveClass = countInActiveClassName
      ? countInActiveClassName
      : 'bg-gray-a0'

    return `ml-2.5 text-9px text-white pt-2.5px pb-1.5px px-3px  leading-11px rounded-xl ${
      isActive ? activeClass : inActiveClass
    }`
  }

  const handleClick = (index: number) => {
    onToggle(index)
  }

  return (
    <>
      {data?.length && (
        <div className={container_className}>
          {data?.map((item: TMultiToggleDataItem, index: number) => {
            return (
              <div
                className={getItemClassName(index === activeIndex)}
                key={index}
                onClick={() => handleClick(index)}
              >
                <span>{item.label}</span>
                {typeof item.count !== 'undefined' && (
                  <span className={getCountClassName(index === activeIndex)}>
                    {item.count > 99 ? 99 : item.count}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default MultiToggleSwitch
