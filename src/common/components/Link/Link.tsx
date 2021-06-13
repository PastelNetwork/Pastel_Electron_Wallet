import React, { ReactNode } from 'react'
import cn from 'classnames'

export type TLink = {
  children?: string | ReactNode
  className?: string
  href?: string
  variant?: string
  [x: string]: ReactNode | string | undefined
}

const Link: React.FC<TLink> = ({
  href,
  className,
  children,
  variant,
  ...otherProps
}) => {
  const classes = cn(
    {
      'text-button focus:outline-none hover:text-button-hover active:text-button-active transition duration-300': true,
      'cursor-pointer': !href,
      [`text-${variant}`]: variant,
    },
    className,
  )

  return (
    <a href={href} className={classes} {...otherProps}>
      {children}
    </a>
  )
}

export default Link
