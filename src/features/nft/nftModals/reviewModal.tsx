import React from 'react'
// Components
import Modal from '../../../common/components/Modal'
import Alert from '../../../common/components/Alert'

export type TReviewModal = {
  title?: string
  content?: string
  isOpen: boolean
  handleClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ReviewModal: React.FC<TReviewModal> = ({
  title,
  content,
  isOpen,
  handleClose,
}) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} size='md'>
      <h2 className='mb-6 text-gray-2d'>“{title}” is in review</h2>
      <Alert variant='success'>{content}</Alert>
    </Modal>
  )
}

export default ReviewModal
