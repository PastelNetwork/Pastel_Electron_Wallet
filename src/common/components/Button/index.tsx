import React, { ReactNode, ReactSVGElement } from 'react'
import cn from 'classnames'

export interface ButtonProps {
  children?: ReactNode | string
  variant?: 'default' | 'secondary' | 'transparent' | 'navigation'
  disabled?: boolean
  href?: string
  className?: string
  fluid?: boolean
  prepend?: ReactSVGElement
  append?: ReactSVGElement
  [x: string]: React.MouseEventHandler<Element> | ReactNode | string | undefined
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  href,
  disabled,
  prepend,
  append,
  fluid,
  className,
  ...otherProps
}) => {
  const Tag = href ? 'a' : 'button'

  const classes = cn(
    {
      'button inline-flex items-center px-2 h-10 justify-center rounded-2xl transition duration-300 focus:outline-none active:shadow-none focus:shadow-btnOutline max-w-full leading-none': true,
      'w-full': fluid,
      'w-60': !fluid,
      'bg-button-default hover:bg-button-hover active:bg-blue-pressed text-white':
        variant === 'default' && !disabled,
      'bg-button-background text-button-text cursor-not-allowed':
        variant === 'default' && disabled,
      'border border-button hover:bg-button-hoverAlt hover:text-button-hover active:bg-button-pressedAlt active:text-button-pressed text-button-default':
        variant === 'secondary' && !disabled,
      'border border-gray-8e text-button-text cursor-not-allowed':
        variant === 'secondary' && disabled,
      'bg-white hover:bg-button-hoverAlt hover:bg-button-pressedAlt text-button-default':
        variant === 'transparent' && !disabled,
      'bg-white text-button-text cursor-not-allowed':
        variant === 'transparent' && disabled,
    },
    className,
  )

  const navButtonClasses = cn({
    'w-10 h-10 flex items-center justify-center bg-gray-f8 rounded-full focus:outline-none': true,
  })

  return (
    <>
      {variant === 'navigation' ? (
        <button className={navButtonClasses} {...otherProps}>
          {children}
        </button>
      ) : (
        <Tag className={classes} disabled={disabled} {...otherProps}>
          {prepend && (
            <span className='pr-2'>
              {React.cloneElement(prepend, { className: 'fill-current' })}
            </span>
          )}
          <span>{children}</span>
          {append && (
            <span className='pl-2'>
              {React.cloneElement(append, { className: 'fill-current' })}
            </span>
          )}
        </Tag>
      )}
    </>
  )
}

export default Button
