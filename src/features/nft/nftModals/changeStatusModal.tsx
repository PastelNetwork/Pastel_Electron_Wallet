import React from 'react'
// Components
import Modal from '../../../common/components/Modal'
import { Button } from '../../../common/components/Buttons'
import Select, { TOption } from '../../../common/components/Select/Select'
import Input from '../../../common/components/Input'
import DatePicker from '../../../common/components/DatePicker'
import Link from '../../../common/components/Link'

export type TChangeStatusModal = {
  title?: string
  isOpen: boolean
  handleClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ChangeStatusModal: React.FC<TChangeStatusModal> = ({
  isOpen,
  handleClose,
  title,
}) => {
  const [status, setStatus] = React.useState<TOption | null>(null)
  const [duration, setDuration] = React.useState<TOption | null>(null)
  const [list, setList] = React.useState<TOption | null>(null)

  const [date, setDate] = React.useState<Date | null>(null)

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} size='xl'>
      <h2 className='mb-6'>Change status of “{title}”</h2>
      <div className='mb-6'>
        <Select
          placeholder='Select'
          options={[
            { value: 'listed', label: 'Listed' },
            { value: 'listed 2', label: 'Listed 2' },
          ]}
          className='flex-1 mb-6'
          selected={list}
          onChange={setList}
        />
        <Select
          onChange={setStatus}
          options={[
            { value: 'buy-it-now', label: 'Buy-it-now' },
            { value: 'auction', label: 'Auction' },
          ]}
          selected={status}
          className='flex-1 mb-6'
        />
        <Input type='text' placeholder='Fixed minimum price' className='mb-6' />
        {status?.value === 'buy-it-now' && (
          <Link>Change copies pricing plan</Link>
        )}
        {status?.value === 'auction' && (
          <div className='grid grid-cols-2 gap-7 items-center'>
            <div className='flex items-center'>
              <DatePicker
                selected={date}
                placeholder='   / / '
                onChange={setDate}
              />
            </div>
            <div className='flex items-center'>
              <h5 className='mr-2'>Duration</h5>
              <Select
                options={[
                  { value: '12 hours', label: '12 hours' },
                  { value: '6 hours', label: '6 hours' },
                ]}
                className='w-full'
                selected={duration}
                onChange={setDuration}
              />
            </div>
          </div>
        )}
      </div>
      <Button variant='default' onClick={handleClose} fluid>
        Submit
      </Button>
    </Modal>
  )
}

export default ChangeStatusModal
