import { IResponse } from './response'

type IAddressBalance = {
  address: string | number
  balance: number
}

// z_gettotalbalance
type ITotalBalanceResult = {
  transparent: number
  private: number
  total: number
}

// z_listunspent
type IZListUnspentResult = {
  txid: string
  jsindex: number
  jsoutindex: number
  outindex: number
  confirmations: number
  spendable: boolean
  address: string
  amount: number
  memo: number
  change: boolean
}

// listunspent
type IListUnspentResult = {
  txid: string
  vout: number
  generated: boolean
  address: string
  account: string
  scriptPubKey: string
  amount: number
  confirmations: number
  redeemScript: number
  spendable: number
}

// z_listreceivedbyaddress
type ITZListReceivedByAddressResult = {
  txid: string
  amount: number
  amountZat: number
  memo: string
  confirmations: number
  blockheight: number
  blockindex: number
  blocktime: number
  jsindex: number
  jsoutindex: number
  outindex: number
  change: boolean
}

type ITotalBalanceResponse = IResponse<ITotalBalanceResult>
type IListAddressesResponse = IResponse<string[]>
type IZListUnspentResponse = IResponse<IZListUnspentResult[]>
type IListUnspentResponse = IResponse<IListUnspentResult[]>
type ITZListReceivedByAddressResponse = IResponse<
  ITZListReceivedByAddressResult[]
>

export type {
  IAddressBalance,
  IListAddressesResponse,
  IListUnspentResponse,
  IListUnspentResult,
  ITotalBalanceResponse,
  ITotalBalanceResult,
  ITZListReceivedByAddressResponse,
  ITZListReceivedByAddressResult,
  IZListUnspentResponse,
  IZListUnspentResult,
}
