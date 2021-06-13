import React from 'react'
// Components
import Modal from '../../../common/components/Modal'
import Select, { TOption } from '../../../common/components/Select/Select'
import { CircleAddButton, Button } from '../../../common/components/Buttons'

export type TReassignTagModal = {
  isOpen: boolean
  handleClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  title?: string
  options: TOption[]
}

const ReassignTagModal: React.FC<TReassignTagModal> = ({
  title,
  options,
  onClick,
  isOpen,
  handleClose,
}) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} size='xl'>
      <h2 className='mb-6'>Change tag of “{title}”</h2>
      <div className='flex items-center mb-6'>
        <Select
          placeholder='No tag chosen'
          options={options}
          className='mr-4 flex-1'
        />
        <CircleAddButton />
      </div>
      <Button variant='default' className='w-full' onClick={onClick}>
        Submit
      </Button>
    </Modal>
  )
}

export default ReassignTagModal
