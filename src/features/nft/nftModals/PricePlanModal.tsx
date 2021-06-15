import React, { useState } from 'react'
import Modal from './modal'
import Table, { TRow } from './table'
import Slider from 'common/components/Slider/Slider'
import pencilIcon from 'common/assets/icons/ico-pencil.svg'
import astronautIcon from 'common/assets/icons/ico-astronaut.png'
import Button from 'common/components/Button/Button'

export type TPricePlanModal = {
  isOpen: boolean
  handleClose: () => void
}

const PricePlanModal: React.FC<TPricePlanModal> = ({ isOpen, handleClose }) => {
  const [cellEdit, setCellEdit] = useState<{ row: number; col: number } | null>(
    null,
  )

  const Columns = [
    {
      name: 'Copies',
      custom: (value: Array<number>, row: TRow) => (
        <div className='flex leading-tight'>
          <img src={astronautIcon} />
          <div className='my-auto ml-30px mr-5'>{`${value[0]} to ${value[1]}`}</div>
          <img
            src={pencilIcon}
            className='cursor-pointer'
            onClick={() => setCellEdit({ row: row.id as number, col: 0 })}
          />
        </div>
      ),
      className: 'pl-30px',
    },
    {
      name: 'Auto-listing price',
      custom: (value: number, row: TRow) => (
        <div className='flex leading-tight space-x-4'>
          <div className='text-gray-a0'>{value.toLocaleString('en')}k PSL</div>
          <img
            src={pencilIcon}
            className='cursor-pointer'
            onClick={() => setCellEdit({ row: row.id as number, col: 1 })}
          />
        </div>
      ),
    },
  ]

  const Columns_edit = [
    {
      name: 'Copies',
      custom: (value: Array<number>, row: TRow) => (
        <SliderComponent
          range={value as [number, number]}
          disabled={cellEdit?.row != row.id || cellEdit?.col != 0}
        />
      ),
      className: 'pl-30px w-478px',
    },
    {
      name: 'Auto-listing price',
      custom: (value: number) => (
        <div className='text-gray-a0 flex justify-between rounded shadow-2px h-40px text-lg py-1 px-4 w-200px'>
          <input
            value={value + 'k'}
            className='outline-none border-none flex-grow min-w-0 text-gray-71'
          />
          <span>PSL</span>
        </div>
      ),
    },
  ]

  return (
    <Modal
      isOpen={isOpen}
      handleClose={() => handleClose()}
      size='874px'
      title={'“Diamonds in the sky”: copies buy-it-now price plan:'}
      infoIcon={true}
    >
      <div>
        <div className='text-lg text-gray-77 pb-5'>
          For every additional copy sold, the price will be changed according to
          your desired settings.
        </div>
        <Table
          columns={cellEdit ? Columns_edit : Columns}
          data={tableData}
          fixedHeader={true}
          bodyClassName='h-401px'
          trClassName='border-b border-gray-f2 h-100px'
        />
        {cellEdit && (
          <div className='mt-8 flex justify-between'>
            <Button
              onClick={() => setCellEdit(null)}
              className='w-380px'
              variant='transparent'
            >
              Decline
            </Button>
            <Button onClick={() => setCellEdit(null)} className='w-380px'>
              Accept
            </Button>
          </div>
        )}
      </div>
    </Modal>
  )
}

function SliderComponent({
  range,
  disabled,
}: {
  range: [number, number]
  disabled?: boolean
}): JSX.Element {
  const [values, setValues] = useState<[number, number]>(range)
  return (
    <div className={disabled ? 'filter grayscale' : ''}>
      <Slider
        min={0}
        max={100}
        values={values}
        onChange={disabled ? () => ({}) : setValues}
      />
    </div>
  )
}

const tableData = [
  {
    Copies: [1, 5],
    'Auto-listing price': 1000,
  },
  {
    Copies: [2, 10],
    'Auto-listing price': 1200,
  },
  {
    Copies: [3, 30],
    'Auto-listing price': 1000,
  },
  {
    Copies: [40, 100],
    'Auto-listing price': 1200,
  },
  {
    Copies: [1, 1],
    'Auto-listing price': 1000,
  },
  {
    Copies: [1, 1],
    'Auto-listing price': 1000,
  },
  {
    Copies: [1, 1],
    'Auto-listing price': 1000,
  },
  {
    Copies: [1, 1],
    'Auto-listing price': 1000,
  },
  {
    Copies: [1, 1],
    'Auto-listing price': 1000,
  },
  {
    Copies: [1, 1],
    'Auto-listing price': 1000,
  },
  {
    Copies: [1, 1],
    'Auto-listing price': 1000,
  },
  {
    Copies: [1, 1],
    'Auto-listing price': 1000,
  },
]

export default PricePlanModal
