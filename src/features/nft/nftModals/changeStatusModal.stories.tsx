import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from '../../../common/components/Buttons'
import ChangeStatusModal, { TChangeStatusModal } from './changeStatusModal'

const Template: Story<TChangeStatusModal> = ({ title, isOpen }) => {
  const [showModal, setShowModal] = React.useState(isOpen)

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show modal</Button>
      <ChangeStatusModal
        title={title}
        isOpen={showModal}
        handleClose={() => {
          setShowModal(false)
        }}
      ></ChangeStatusModal>
    </>
  )
}

export const ChangeStatusModalDefault = Template.bind({})
const title = 'Diamonds in the sky'
ChangeStatusModalDefault.args = {
  title,
}

export default {
  component: ChangeStatusModal,
  title: 'BidModals/ChangeStatusModal',
} as Meta
