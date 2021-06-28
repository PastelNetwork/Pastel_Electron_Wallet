import React from 'react'
import { TNFT } from '../Nft.types'
import dayjs from 'dayjs'
import Breadcrumbs from './Breadcrumbs'
import Header from './header/Header'
import Image from './image/Image'
import Info from './info/Info'
import Description from './description/Description'
import Comments from './comments/Comments'
import nftImage from 'common/assets/images/mock/nft-big-image.png'
import avatar1 from 'common/assets/images/mock/avatar-1.png'

const nft: TNFT = {
  id: 230456346,
  title: 'Super nfty floating head professional',
  image: nftImage,
  pastelRareness: 65,
  internetRareness: 45,
  likes: 721,
  liked: true,
  views: 231,
  type: 'Live Auction',
  status: 8,
  price: 12000,
  currencyName: 'PSL',
  time: dayjs().add(1, 'day').add(11, 'hours').add(11, 'seconds'),
  bids: 12900,
  author: {
    avatar: avatar1,
    name: 'Banksy86',
  },
  copies: 1,
  royalty: '10% Perpetual Royalty',
  owner: 'Banksy86',
  collection: 'Angel in the sky',
  category: 'Illustration',
  tags: ['Add your tag'],
  description:
    'There is something magical about space and astronauts. Who wouldn’t want to see the earth from space, or run around on the moon? Space is the final frontier for mankind and essentialy to the future of our species. This piece is an hommage to the brave men and women who represent mankind in this most ambitious of endeavors, who strive to push',
}

const breadcrumbs = [
  { title: 'My NFT Portfolio', link: '#' },
  { title: '“Super Nfty Floating Head”' },
]

nft.description += nft.description // make it longer for "read more"

export default function PortfolioPage(): JSX.Element {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Header nft={nft} />
      <div className='page-container py-30px space-y-30px md:space-y-0 md:grid md:grid-cols-2 md:gap-5 lg:gap-10'>
        <Image nft={nft} />
        <div className='flex space-x-5 lg:space-x-10 md:pb-12'>
          <Info nft={nft} />
          <div className='bg-white pt-30px px-5 lg:px-22px rounded-lg flex-grow flex flex-col'>
            <Description nft={nft} />
            <hr className='my-30px' />
            <Comments />
          </div>
        </div>
      </div>
    </>
  )
}
