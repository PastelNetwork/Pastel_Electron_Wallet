import React from 'react'
// Components
import Modal from '../../../common/components/Modal'
import { Button } from '../../../common/components/Buttons'
import Link from '../../../common/components/Link'
import NumberFormat from 'react-number-format'

export type TOffer = {
  user: string
  price: number
}

export type TReviewOfferModal = {
  title?: string
  offers?: Array<TOffer>
  isOpen: boolean
  handleClose: () => void
}

const ReviewOfferModal: React.FC<TReviewOfferModal> = ({
  title,
  offers,
  isOpen,
  handleClose,
}) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} size='xl'>
      <h2 className='mb-6'>Review an offer for “{title}”</h2>
      {offers?.map(element => (
        <p className='text-gray-a0 mb-2'>
          <span className='text-h4 font-medium text-gray-800'>
            <NumberFormat
              value={element.price}
              displayType={'text'}
              thousandSeparator={true}
            />
            k PSL
          </span>{' '}
          was offered by <Link>{element.user}</Link>
        </p>
      ))}

      <div className='text-center mb-10 mt-8'>
        <Link size='h5'>Previous sales price comparison</Link>
      </div>
      <Button variant='default' className='mb-4' onClick={handleClose} fluid>
        Accept
      </Button>
      <Button variant='secondary' onClick={handleClose} fluid>
        Decline
      </Button>
    </Modal>
  )
}

export default ReviewOfferModal
