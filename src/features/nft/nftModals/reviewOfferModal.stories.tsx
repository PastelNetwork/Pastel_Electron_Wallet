import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from '../../../common/components/Buttons'
import ReviewOfferModal, { TReviewOfferModal, TOffer } from './reviewOfferModal'

const Template: Story<TReviewOfferModal> = ({ title, offers, isOpen }) => {
  const [showModal, setShowModal] = React.useState(isOpen)

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show modal</Button>
      <ReviewOfferModal
        title={title}
        offers={offers}
        isOpen={showModal}
        handleClose={() => {
          setShowModal(false)
        }}
      ></ReviewOfferModal>
    </>
  )
}

export const ReviewOfferModalDefault = Template.bind({})
const title = 'Diamonds in the sky'
const offers: Array<TOffer> = [
  { user: 'SuperDealer23', price: 1000000 },
  { user: 'Dealer23', price: 100000 },
]
ReviewOfferModalDefault.args = {
  title,
  offers,
}

export default {
  component: ReviewOfferModal,
  title: 'BidModals/ReviewOfferModal',
} as Meta
