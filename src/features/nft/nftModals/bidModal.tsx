import React from 'react'
// Components
import Modal from '../../../common/components/Modal'
import { Button } from '../../../common/components/Buttons'
import BidInput from '../../../common/components/BidInput'
// Data
import Link from '../../../common/components/Link'
import NumberFormat from 'react-number-format'

export type TBid = {
  id?: string
  time?: string
  bid?: string
  name?: string
}

export type TLiveAuction = {
  bids: Array<TBid>
}

export type TBuyNow = {
  price: number
}

export type TMakeOffer = {
  price: number
  href: string
}

export type TBidModalType = 'liveAuction' | 'buyNow' | 'makeOffer'

export type TBidModal = {
  type: TBidModalType
  title?: string
  liveAuctionContent?: TLiveAuction
  buyNowContent?: TBuyNow
  makeOfferContent?: TMakeOffer
  isOpen: boolean
  handleClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const BidModal: React.FC<TBidModal> = ({
  type,
  title,
  liveAuctionContent,
  buyNowContent,
  makeOfferContent,
  isOpen,
  handleClose,
}) => {
  const [bid, setBid] = React.useState('')

  const onBidChange = (value: string) => setBid(value)

  type modalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  let size: modalSize = 'lg'

  switch (type) {
    case 'liveAuction':
      size = '2xl'
      break
    case 'buyNow':
      size = 'lg'
      break
    case 'makeOffer':
      size = 'lg'
      break
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} size={size}>
      <h2 className='mb-6 text-gray-2d'>
        {type == 'liveAuction'
          ? `Auction bids: “${title}”`
          : type == 'buyNow'
          ? `Buy-it-now listing: “${title}”`
          : `Make an offer for “${title}”`}
      </h2>
      {type === 'liveAuction' && (
        <div className='mb-6'>
          {liveAuctionContent?.bids.map(
            ({ id, time, bid, name }: TBid, idx: number) => (
              <div
                className='grid grid-cols-4 gap-3 border-b border-line-default pb-5 mb-5'
                key={id}
              >
                {idx === 0 ? (
                  <h5 className='font-heavy'>Highest bid</h5>
                ) : (
                  <h5 className='font-medium text-gray-a6'>Previous bid</h5>
                )}
                <span className='text-gray-a6'>{time}</span>
                <span
                  className={
                    idx === 0
                      ? 'text-success-default font-medium'
                      : 'text-gray-a6'
                  }
                >
                  {bid} PSL
                </span>
                <span className='text-button-default'>{name}</span>
              </div>
            ),
          )}
          <div className='text-center'>
            <span className='font-medium text-gray-a6 cursor-pointer'>
              Show more
            </span>
          </div>
        </div>
      )}
      {type === 'buyNow' && (
        <div className='flex justify-between mb-6'>
          <span className='text-gray-a6'>Listed price</span>
          <span className='text-success-default font-heavy'>
            <NumberFormat
              value={buyNowContent?.price}
              displayType={'text'}
              thousandSeparator={true}
            />{' '}
            PSL
          </span>
        </div>
      )}
      {type === 'makeOffer' && (
        <div>
          <span className='text-gray-a6 inline-block mb-4'>
            NFT is not listed
          </span>
          <p className='text-gray-a6 font-medium text-center text-h4 mb-4'>
            <span className='text-success-default font-heavy'>
              <NumberFormat
                value={makeOfferContent?.price}
                displayType={'text'}
                thousandSeparator={true}
              />
              k
            </span>{' '}
            was offered by SuperDealer23
          </p>
          <div className='text-center mb-4'>
            <Link href={makeOfferContent?.href}>
              Cheack price stats for this NFT
            </Link>
          </div>
        </div>
      )}
      <div className='max-w-md mx-auto'>
        <BidInput bid={bid} onBidChange={onBidChange} />
        <Button variant='default' className='w-full' disabled={!bid}>
          Submit offer
        </Button>
      </div>
    </Modal>
  )
}

export default BidModal
