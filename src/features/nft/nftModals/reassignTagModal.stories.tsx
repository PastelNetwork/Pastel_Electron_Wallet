import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from '../../../common/components/Buttons'
import ReassignTagModal, { TReassignTagModal } from './reassignTagModal'

const Template: Story<TReassignTagModal> = ({
  title,
  options,
  isOpen,
  ...args
}) => {
  const [showModal, setShowModal] = React.useState(isOpen)

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show modal</Button>
      <ReassignTagModal
        title={title}
        options={options}
        isOpen={showModal}
        handleClose={() => {
          setShowModal(false)
        }}
        {...args}
      ></ReassignTagModal>
    </>
  )
}

export const ReassignTagModalDefault = Template.bind({})
const options = [
  { value: 'option 1', label: 'Option 1' },
  { value: 'option 2', label: 'Option 2' },
  { value: 'option 3', label: 'Option 3' },
  { value: 'option 4', label: 'Option 4' },
  { value: 'option 5', label: 'Option 5' },
]
const title = 'Diamonds in the sky'
ReassignTagModalDefault.args = {
  options,
  title,
}

export default {
  component: ReassignTagModal,
  title: 'BidModals/ReassignTagModal',
} as Meta
