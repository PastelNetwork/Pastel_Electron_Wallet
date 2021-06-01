import React from 'react'
import cn from 'classnames'

type Props = {
  title: string
  className?: string
  children: React.ReactNode
}

export default function PortfolioColumn({
  title,
  children,
  className,
}: Props): JSX.Element {
  return (
    <div className={cn('flex-grow px-6', className)}>
      <div className='h-5 text-gray-71 text-sm font-medium mb-3'>{title}</div>
      {children}
    </div>
  )
}
