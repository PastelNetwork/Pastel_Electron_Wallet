import React from 'react'
import Modal from './modal'
import Table from './table'

export type TCopiesDetailsModal = {
  isOpen: boolean
  handleClose: () => void
}

const CopiesDetailsModal: React.FC<TCopiesDetailsModal> = ({
  isOpen,
  handleClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      handleClose={() => handleClose()}
      size='432px'
      title={'List of NFT copies'}
      infoIcon={true}
    >
      <div>
        <Table
          columns={Columns}
          data={tableData}
          fixedHeader={true}
          bodyClassName='h-401px'
          trClassName='border-b border-gray-f2'
        />
      </div>
    </Modal>
  )
}

const Columns = [
  {
    name: 'Copy ID',
    className: 'pl-4 w-139px',
  },
  {
    name: 'Owner',
  },
]

const tableData = [
  {
    'Copy ID': 1,
    Owner: 'Banksy123',
  },
  {
    'Copy ID': 2,
    Owner: 'Superhumanartist',
  },
  {
    'Copy ID': 3,
    Owner: 'Banksy123',
  },
  {
    'Copy ID': 4,
    Owner: 'Snikers288',
  },
  {
    'Copy ID': 5,
    Owner: 'Banksy123',
  },
  {
    'Copy ID': 6,
    Owner: 'Banksy123',
  },
  {
    'Copy ID': 7,
    Owner: 'Banksy123',
  },
  {
    'Copy ID': 8,
    Owner: 'Banksy123',
  },
  {
    'Copy ID': 9,
    Owner: 'Banksy123',
  },
  {
    'Copy ID': 10,
    Owner: 'Banksy123',
  },
  {
    'Copy ID': 11,
    Owner: 'Banksy123',
  },
  {
    'Copy ID': 12,
    Owner: 'Banksy123',
  },
]

export default CopiesDetailsModal