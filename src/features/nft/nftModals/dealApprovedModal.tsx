import React from 'react'
// Components
import Modal from '../../../common/components/Modal'

export type TDealApprovedModal = {
  content?: string
  isOpen: boolean
  handleClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const DealApprovedModal: React.FC<TDealApprovedModal> = ({
  content,
  isOpen,
  handleClose,
}) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} size='md'>
      <h2 className='mb-6 text-gray-2d'>Congratulations. deal approved!</h2>
      <p className='text-gray-a6'>{content}</p>
    </Modal>
  )
}

export default DealApprovedModal
