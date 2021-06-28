import React, { useEffect, useState } from 'react'
import { TitleModal } from '../../common/components/Modal'
import Table from '../../common/components/Table'
import * as momentRange from 'moment-range'
import { OnSelectCallbackParam } from 'react-daterange-picker'
import DateRangeSelector from '../../common/components/DateRangeSelector/DateRangeSelector'
import Radio from '../../common/components/Radio'
import Select, { TOption } from '../../common/components/Select/Select'
import pencilIcon from '../../common/assets/icons/ico-pencil.svg'
import passEyeIcon from '../../common/assets/icons/ico-pass-eye.svg'
import commentIcon from '../../common/assets/icons/ico-comment.svg'
import checkGreenIcon from '../../common/assets/icons/ico-check-green.svg'
import clockYellowIcon from '../../common/assets/icons/ico-clock-yellow.svg'
import crossIcon from '../../common/assets/icons/ico-cross.svg'
import addressbookIcon from '../../common/assets/icons/ico-addressbook.svg'
import user2Icon from '../../common/assets/icons/ico-user2.svg'
import { useAppSelector } from 'redux/hooks'
import { RootState } from 'redux/store'
import { TransactionRPC } from 'api/pastel-rpc'
import {
  TTransactionRow,
  TTransaction,
  TTransactionType,
} from 'types/rpc'
import dayjs from 'dayjs'
import Utils from '../../legacy/utils/utils'

export type TransactionHistoryModalProps = {
  isOpen: boolean
  handleClose: () => void
}

const TransactionHistoryModal: React.FC<TransactionHistoryModalProps> = ({
  isOpen,
  handleClose,
}) => {
  const { url, username, password } = useAppSelector<RootState['pastelConf']>(
    ({ pastelConf }) => pastelConf,
  )
  const [selectedOption, setSelectedOption] = useState<
    'all' | 'received' | 'sent'
  >('all')
  const [transactions, setTransactions] = useState<TTransactionRow[]>([])
  const [originTransactions, setOriginTransactions] = useState<
    TTransactionRow[]
  >([])
  const [sourceAddresses, setSourceAddresses] = useState<TOption[]>([
    {
      label: 'All',
      value: '',
    },
  ])
  const [recipients, setRecipients] = useState<TOption[]>([
    {
      label: 'All',
      value: '',
    },
  ])
  const [dates, setDates] = useState<momentRange.DateRange>()
  const [sourceAddress, setSourceAddress] = useState<TOption | null>(null)
  const [recipientAddress, setRecipientAddress] = useState<TOption | null>(null)

  const onSelectDateRange = (dates: OnSelectCallbackParam) => {
    setDates(dates as momentRange.DateRange)
  }

  const getFilterAddresses = (
    trans: TTransaction[],
    isSource: boolean,
  ) => {
    const filtered = trans
      .filter(t => {
        return isSource
          ? Utils.isSapling(t.address)
          : !Utils.isSapling(t.address)
      })
      .map(t => {
        return {
          label: t.address,
          value: t.address,
        }
      })

    return filtered.concat([
      {
        label: 'All',
        value: '',
      },
    ])
  }

  const filterTransactionByType = (
    type: TTransactionType = TTransactionType.ALL,
  ) => {
    if (type === TTransactionType.ALL) {
      setTransactions(originTransactions)
    } else {
      const filterTransactions = originTransactions.filter(t => t.type === type)
      setTransactions(filterTransactions)
    }
  }

  useEffect(() => {
    ;(async () => {
      const transactionRPC = new TransactionRPC({ url, username, password })
      const trans = await transactionRPC.fetchTandZTransactions()
      const filterTransactions = trans.map(t => {
        return {
          date: dayjs.unix(t.time).format('DD/MM/YY HH:mm'),
          address: t.address,
          type: (t.type as TTransactionType) || TTransactionType.ALL,
          status: '',
          id: t.txid,
          comments: '',
          fee: t.fee || 0,
          amount: t.amount || 0,
        }
      })

      // Source/Target addresses
      setSourceAddresses(getFilterAddresses(trans, true))
      setRecipients(getFilterAddresses(trans, false))

      // Map transaction row data
      setTransactions(filterTransactions)
      setOriginTransactions(filterTransactions)
    })()
  }, [])

  useEffect(() => {
    let filterTrans = originTransactions

    if (sourceAddress) {
      filterTrans = filterTrans.filter(t =>
        sourceAddress.value.length > 0 ? t.address === sourceAddress.value : t,
      )
    }

    if (recipientAddress) {
      filterTrans = filterTrans.filter(t =>
        recipientAddress.value.length > 0
          ? t.address === recipientAddress.value
          : t,
      )
    }

    setTransactions(filterTrans)
  }, [sourceAddress, recipientAddress])

  return (
    <TitleModal
      isOpen={isOpen}
      handleClose={() => handleClose()}
      size='7xl'
      title='Transaction history'
    >
      <div className='bg-white z-50'>
        <div className='flex text-gray-71 text-sm'>
          <div className='w-2/3 flex'>
            <div className='w-1/3 pr-10'>
              <div>Time range</div>
              <DateRangeSelector value={dates} onSelect={onSelectDateRange} />
            </div>
            <div className='w-1/3 pr-6'>
              <div className='mb-1'>Source address</div>
              <Select
                label={<img src={addressbookIcon} className='ml-4 mr-2' />}
                className='text-gray-2d w-112px'
                selected={sourceAddress}
                options={sourceAddresses}
                onChange={setSourceAddress}
              />
            </div>
            <div className='w-1/3 pr-6'>
              <div className='mb-1'>Recipients</div>
              <Select
                label={<img src={user2Icon} className='ml-4 mr-2' />}
                className='text-gray-2d w-112px'
                selected={recipientAddress}
                options={recipients}
                onChange={setRecipientAddress}
              />
            </div>
          </div>
          <div className='w-1/3 flex justify-end items-center space-x-4 pt-6'>
            <Radio
              checked={selectedOption === 'all'}
              onChange={() => {
                filterTransactionByType(TTransactionType.ALL)
                setSelectedOption('all')
              }}
            >
              All
            </Radio>
            <Radio
              checked={selectedOption === 'received'}
              onChange={() => {
                filterTransactionByType(TTransactionType.RECEIVE)
                setSelectedOption('received')
              }}
            >
              Received
            </Radio>
            <Radio
              checked={selectedOption === 'sent'}
              onChange={() => {
                filterTransactionByType(TTransactionType.SEND)
                setSelectedOption('sent')
              }}
            >
              Sent
            </Radio>
          </div>
        </div>
        <div className='h-409px overflow-y-auto mt-3 pr-2'>
          <Table
            columns={Columns}
            data={transactions}
            headerTrClasses='text-gray-4a font-extrabold font-base border-b border-opacity-50 pb-4 border-gray-a6 h-12 text-sm md:text-base'
            bodyTrClasses='h-67px border-b border-line text-sm md:text-base'
          />
        </div>
      </div>
    </TitleModal>
  )
}

const Columns = [
  {
    name: 'Date',
    key: 'date',
    headerColClasses: 'ml-15px',
    custom: (value: string | number) => (
      <div className='ml-15px whitespace-nowrap mr-15px'>{value}</div>
    ),
  },
  {
    key: 'address',
    name: 'Recipient address',
    headerColClasses: 'mr-15px',
    custom: (value: string | number) => (
      <div className='flex mr-2 lg:mr-0'>
        <span className='text-blue-3f cursor-pointer w-9/12 overflow-hidden overflow-ellipsis'>
          {value}
        </span>
        <img className='ml-2 md:ml-6 cursor-pointer' src={pencilIcon} />
        <img className='ml-2 md:ml-18px cursor-pointer' src={passEyeIcon} />
      </div>
    ),
  },
  {
    key: 'type',
    headerColClasses: 'whitespace-nowrap mr-15px',
    name: 'Source type',
    custom: (value: string | number) => {
      const str = value.toString()
      return <div>{str.charAt(0).toUpperCase() + str.slice(1)}</div>
    },
  },
  {
    key: 'status',
    name: 'Status',
    headerColClasses: 'mr-15px',
    custom: (value: string | number) => (
      <img
        src={
          value == 'success'
            ? checkGreenIcon
            : value == 'pending'
            ? clockYellowIcon
            : value == 'failed'
            ? crossIcon
            : ''
        }
        className='mt-3 ml-5 transform -translate-y-2/4 -translate-x-2/4'
      />
    ),
  },
  {
    key: 'id',
    name: 'ID',
  },
  {
    key: 'comments',
    name: 'Private Notes',
    headerColClasses: 'whitespace-nowrap mr-15px',
    custom: () => <img src={commentIcon} className='ml-8 cursor-pointer' />,
  },
  {
    key: 'fee',
    name: 'Fee',
    headerColClasses: 'mr-15px',
    custom: (value: string | number) => (
      <div className='whitespace-nowrap mr-15px'>{value}</div>
    ),
  },
  {
    key: 'amount',
    name: 'Amount',
  },
]

export default TransactionHistoryModal
