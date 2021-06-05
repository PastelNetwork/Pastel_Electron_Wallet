import React from 'react'
import MemberCard, { TMemberCard } from './MemberCard'

export type TMemberStripProps = {
  id: string
  memberCard: TMemberCard
  heighestSold: number | string
  totalSold: number | string
  images: string[]
  currencyName: string
}

const MemberStrip: React.FC<TMemberStripProps> = ({
  id,
  memberCard,
  heighestSold,
  images,
  totalSold,
  currencyName,
}) => {
  return (
    <div className='flex space-x-30px'>
      {/* Member Card */}
      <div className='w-244px h-142px'>
        <MemberCard {...memberCard} />
      </div>
      <div className='w-8/12 md:flex-grow border-b border-navigation-background'>
        <div className='flex space-x-4 h-full'>
          {/* Sale data */}
          <div className='flex flex-col justify-center h-full min-w-120px pr-21px'>
            <h6 className='text-gray-77 pb-1 text-12'>Highest sold</h6>
            <div className='w-max text-12 font-semibold border py-1 px-2 rounded-4px border-success-pressed text-success-pressed'>
              {heighestSold} {currencyName}
            </div>
            <div className='text-gray-1a font-semibold pt-3 text-12 whitespace-nowrap overflow-x-hidden'>
              Total sold{' '}
              <div className='font-display'>
                <span className='text-gradient'>{totalSold}</span>
                <span className='text-gradient'> {currencyName}</span>
              </div>
            </div>
          </div>
          {/* Images */}
          <div className='flex space-x-5 h-full overflow-x-auto overflow-y-hidden scrollbar-bg-white mt-7px'>
            {images.map((imgSrc, i) => (
              <div
                className='flex flex-col justify-center h-full '
                key={`${id}${i}`}
              >
                <div className='w-28 h-101px'>
                  <img src={imgSrc} className='object-cover rounded-xl' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberStrip
