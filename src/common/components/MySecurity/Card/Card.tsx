import React, { ReactNode } from 'react'

import { Title, Description } from '../Typography/Typography'

interface ICardProps {
  title: string
  description: string
  content: ReactNode
  footer: ReactNode
}

const Card: React.FC<ICardProps> = ({
  title,
  description,
  content,
  footer,
}) => {
  return (
    <div className='relative flex flex-col max-w-472px h-full rounded-lg p-30px colors.white rounded-lg bg-white'>
      <Title>{title}</Title>
      <div className='min-h-78px mt-3'>
        <Description>{description}</Description>
      </div>
      <div className='flex-grow my-4'>{content}</div>
      {footer}
    </div>
  )
}

export default Card
