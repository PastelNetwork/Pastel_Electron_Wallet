import React, { useState } from 'react'

import NFTCard, { TNFTCard } from '../../common/components/NFTCard'

import avatar from '../../common/assets/images/avatar-placeholder.png'
import image from '../../common/assets/images/nft-card-placeholder.png'
import Select, { TOption } from '../../common/components/Select/Select'
import Slider from '../../common/components/Slider/Slider'
import PageHeader from '../../common/components/PageHeader'

const mockCardProps: TNFTCard = {
  author: 'zndrson',
  avatarSrc: avatar,
  imageSrc: image,
  likes: 23,
  onSale: true,
  price: '222K',
  currencyName: 'PSL',
  title: 'Cosmic Perspective longname test',
  liked: true,
  followers: 256,
  isLastBid: false,
}
const NFTMarketFeed: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(0)

  const mockCategories: TOption[] = [
    { value: 'AI', label: 'AI' },
    { value: 'option_2', label: 'Option 2' },
    { value: 'option_3', label: 'Option 3' },
  ]

  const mockStatus: TOption[] = [
    { value: 'Auctions', label: 'Auctions' },
    { value: 'option_2', label: 'Option 2' },
    { value: 'option_3', label: 'Option 3' },
  ]

  const mockTime: TOption[] = [
    { value: 'Future', label: 'Future' },
    { value: 'Present', label: 'Present' },
    { value: 'Past', label: 'Past' },
  ]

  const mockRareness: TOption[] = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' },
  ]

  // Filters
  const [category, setCategory] = useState<TOption | null>(mockCategories[0])
  const [status, setStatus] = useState<TOption | null>(mockStatus[0])
  const [time, setTime] = useState<TOption | null>(mockTime[0])
  const [rareness, setRareness] = useState<TOption | null>(mockRareness[0])

  const filterOptions = [
    {
      label: 'Categories',
      selected: category,
      onChange: setCategory,
      options: mockCategories,
    },
    {
      label: 'Status',
      selected: status,
      onChange: setStatus,
      options: mockStatus,
    },
    {
      label: 'Time',
      selected: time,
      onChange: setTime,
      options: mockTime,
    },
    {
      label: 'Rareness',
      selected: rareness,
      onChange: setRareness,
      options: mockRareness,
    },
  ]

  const [range, setRange] = useState<[number, number]>([500, 700])
  const formatValue = (value: number) => `${value}k`

  const data = [{ label: 'Feed' }, { label: 'Statistics' }]

  const routes = {
    data,
    activeIndex: selectedItem,
    onToggle: setSelectedItem,
  }

  return (
    <div className=''>
      <PageHeader title='Market' routes={routes} />
      <div className='wrapper content with-page-header h-full w-screen py-30px'>
        {/* Filters */}
        <div className='flex justify-between pb-50px'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3.5'>
            {filterOptions.map(option => (
              <Select {...option} key={option.label} />
            ))}
          </div>
          <div className='flex'>
            <div className='flex h-full items-center justify-end'>
              <p className='text-h6 px-22px text-gray-2d'>Price range:</p>

              <Slider
                min={100}
                max={999}
                values={range}
                onChange={setRange}
                formatValue={formatValue}
                formatTooltipValue={formatValue}
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-10 text-gray-1a'>
          {Array.from({ length: 6 }).map((_, i) => (
            <NFTCard
              {...{
                ...mockCardProps,
                onSale: i % 2 ? true : false,
                isLastBid: i % 3 ? true : false,
              }}
              key={i}
              className='max-w-[318px] md:max-w-[250]px lg:max-w-[318px] xl:max-w-[364px]'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NFTMarketFeed
