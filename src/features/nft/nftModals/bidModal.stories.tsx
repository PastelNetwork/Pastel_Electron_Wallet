import React from 'react'
import { Story, Meta } from '@storybook/react'
import BidModal, { TBidModal, TBidModalType } from './bidModal'
import { Button } from '../../../common/components/Buttons'
import bids from './bidModal.data'

const Template: Story<TBidModal> = ({
  type,
  title,
  isOpen,
  liveAuctionContent,
  buyNowContent,
  makeOfferContent,
}) => {
  const [showModal, setShowModal] = React.useState(isOpen)
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show modal</Button>
      <BidModal
        type={type}
        title={title}
        isOpen={showModal}
        liveAuctionContent={liveAuctionContent}
        buyNowContent={buyNowContent}
        makeOfferContent={makeOfferContent}
      ></BidModal>
    </>
  )
}

export const BidLiveModalDefault = Template.bind({})
let type: TBidModalType = 'liveAuction'
const title = 'Diamonds in the sky'
const liveAuctionContent = { bids: bids }
BidLiveModalDefault.args = {
  type,
  title,
  liveAuctionContent,
}

export const BidBuyNowModalDefault = Template.bind({})
type = 'buyNow'
const buyNowContent = { price: 1000000 }
BidBuyNowModalDefault.args = {
  type,
  title,
  buyNowContent,
}

export const BidMakeOfferModalDefault = Template.bind({})
type = 'makeOffer'
const makeOfferContent = { price: 1000000, href: '' }
BidMakeOfferModalDefault.args = {
  type,
  title,
  makeOfferContent,
}

export default {
  component: BidModal,
  title: 'BidModals/BidModal',
} as Meta
