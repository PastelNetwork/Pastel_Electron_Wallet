/* eslint-disable */

export const METHODS = [
  // Addressindex
  'getaddressbalance',
  'getaddressdeltas',
  'getaddressmempool',
  'getaddresstxids',
  'getaddressutxos',

  // Blockchain
  'getbestblockhash',
  'getblock',
  'getblockchaininfo',
  'getblockcount',
  'getblockdeltas',
  'getblockhash',
  'getblockhashes',
  'getblockheader',
  'getchaintips',
  'getdifficulty',
  'getmempoolinfo',
  'getrawmempool',
  'getspentinfo',
  'gettxout',
  'gettxoutproof',
  'gettxoutsetinfo',
  'verifychain',
  'verifytxoutproof',
  'z_gettreestate',

  // control
  'getexperimentalfeatures',
  'getinfo',
  'getmemoryinfo',
  'help',
  'setlogfilter',
  'stop',

  // disclosure
  'z_getpaymentdisclosure',
  'z_validatepaymentdisclosure',

  // Generating
  'generate',
  'getgenerate',
  'setgenerate',

  // Mining
  'getblocksubsidy',
  'getblocktemplate',
  'getlocalsolps',
  'getmininginfo',
  'getnetworkhashps',
  'getnetworksolps',
  'prioritisetransaction',
  'submitblock',

  // Network
  'addnode',
  'clearbanned',
  'disconnectnode',
  'getaddednodeinfo',
  'getconnectioncount',
  'getdeprecationinfo',
  'getnettotals',
  'getnetworkinfo',
  'getpeerinfo',
  'listbanned',
  'ping',
  'setban',

  // Rawtransactions
  'createrawtransaction',
  'decoderawtransaction',
  'decodescript',
  'fundrawtransaction',
  'getrawtransaction',
  'sendrawtransaction',
  'signrawtransaction',

  // Util
  'createmultisig',
  'estimatefee',
  'estimatepriority',
  'validateaddress',
  'verifymessage',
  'z_validateaddress',

  // Wallet
  'addmultisigaddress',
  'backupwallet',
  'dumpprivkey',
  'dumpwallet',
  'encryptwallet',
  'getaccount',
  'getaccountaddress',
  'getaddressesbyaccount',
  'getbalance',
  'getnewaddress',
  'getrawchangeaddress',
  'getreceivedbyaccount',
  'getreceivedbyaddress',
  'gettransaction',
  'getunconfirmedbalance',
  'getwalletinfo',
  'importaddress',
  'importprivkey',
  'importpubkey',
  'importwallet',
  'keypoolrefill',
  'listaccounts',
  'listaddressgroupings',
  'listlockunspent',
  'listreceivedbyaccount',
  'listreceivedbyaddress',
  'listsinceblock',
  'listtransactions',
  'listunspent',
  'lockunspent',
  'move',
  'sendfrom',
  'sendmany',
  'sendtoaddress',
  'setaccount',
  'settxfee',
  'signmessage',
  'z_exportkey',
  'z_exportviewingkey',
  'z_exportwallet',
  'z_getbalance',
  'z_getmigrationstatus',
  'z_getnewaddress',
  'z_getnotescount',
  'z_getoperationresult',
  'z_getoperationstatus',
  'z_gettotalbalance',
  'z_importkey',
  'z_importviewingkey',
  'z_importwallet',
  'z_listaddresses',
  'z_listoperationids',
  'z_listreceivedbyaddress',
  'z_listunspent',
  'z_mergetoaddress',
  'z_sendmany',
  'z_setmigration',
  'z_shieldcoinbase',
  'z_viewtransaction',
  'zcbenchmark',
  'zcrawjoinsplit',
  'zcrawkeygen',
  'zcrawreceive',
  'zcsamplejoinsplit',
]

export type APIMethods = {
  getbestblockhash: () => Promise<string>
  getblock: (
    hash: string,
  ) => Promise<{
    hash: string
    confirmations: number
    size: number
    height: number
    version: number
    merkleroot: string
    finalsaplingroot: string
    tx: string[]
    time: number
    nonce: string
    solution: string
    bits: string
    difficulty: number
    chainwork: string
    anchor: string
    valuePools: {
      id: string
      monitored: boolean
      chainValue: number
      chainValueZat: number
      valueDelta: number
      valueDeltaZat: number
    }[]
    previousblockhash: string
    nextblockhash: string
  }>
  getblockchaininfo: () => Promise<{
    chain: string
    blocks: number
    headers: number
    bestblockhash: string
    difficulty: number
    verificationprogress: number
    chainwork: string
    pruned: boolean
    commitments: number
    valuePools: {
      id: string
      monitored: boolean
      chainValue: number
      chainValueZat: number
    }[]
    softforks: {
      id: string
      version: number
      enforce: {
        status: boolean
        found: number
        required: number
        window: number
      }
      reject: {
        status: boolean
        found: number
        required: number
        window: number
      }
    }[]
    upgrades: { [x: string]: any }
    consensus: {
      chaintip: string
      nextblock: string
    }
  }>
  getblockcount: () => Promise<number>
  getblockhash: (idx: number) => Promise<string>
  getblockheader: (
    hash: string,
  ) => Promise<{
    hash: string
    confirmations: number
    height: number
    version: number
    merkleroot: string
    finalsaplingroot: string
    time: number
    nonce: string
    solution: string
    bits: string
    difficulty: number
    chainwork: string
    previousblockhash: string
    nextblockhash: string
  }>
  getchaintips: () => Promise<
    Array<{
      height: number
      hash: string
      branchlen: number
      status: string
    }>
  >
  getdifficulty: () => Promise<number>
  getmempoolinfo: () => Promise<{
    size: string
    bytes: string
    usage: string
  }>
  getrawmempool: (verbose?: number) => Promise<string[]>
  gettxout: (
    txid: string,
    n: number,
    includemempool: boolean,
  ) => Promise<{
    bestblock: string
    confirmations: number
    value: number
    scriptPubKey: {
      asm: string
      hex: string
      reqSigs: number
      type: string
      addresses: string[]
    }
    version: number
    coinbase: number
  }>
  gettxoutproof: (
    txid: string,
    n: number,
    includemempool: boolean,
  ) => Promise<string>
  gettxoutsetinfo: () => Promise<{
    height: number
    bestblock: string
    transactions: number
    txouts: number
    bytes_serialized: number
    hash_serialized: string
    total_amount: number
  }>
  verifychain: (checklevel: number, numblocks: number) => Promise<boolean>
  verifytxoutproof: (proof: string) => Promise<string>
  getinfo: () => Promise<{
    version: number
    protocolversion: number
    walletversion: number
    balance: number
    blocks: number
    timeoffset: number
    connections: number
    proxy: string
    difficulty: number
    testnet: boolean
    keypoololdest: number
    keypoolsize: number
    paytxfee: number
    relayfee: number
    errors: string
  }>
  help: () => Promise<string>
  stop: () => Promise<void>
  z_getpaymentdisclosure: (
    txid: string,
    js_index: string,
    output_index: string,
    message: string,
  ) => Promise<string>
  z_validatepaymentdisclosure: (paymentdisclosure: string) => Promise<string>
  generate: (numblocks: number) => Promise<string[]>
  getgenerate: () => Promise<boolean>
  setgenerate: (generate: boolean, genproclimit?: number) => Promise<void>
  getblocksubsidy: (
    height?: number,
  ) => Promise<{ miner: number; founders: number }>
  getblocktemplate: (
    jsonrequestobject: string,
  ) => Promise<{
    capabilities: string[]
    version: number
    previousblockhash: string
    finalsaplingroothash: string
    transactions: {
      data: string
      hash: string
      depends: any[]
      fee: number
      sigops: number
    }[]
    coinbasetxn: {
      data: string
      hash: string
      depends: any[]
      fee: number
      sigops: number
      foundersreward: number
      required: boolean
    }
    longpollid: string
    target: string
    mintime: number
    mutable: string[]
    noncerange: string
    sigoplimit: number
    sizelimit: number
    curtime: number
    bits: string
    height: number
  }>
  getlocalsolps: () => Promise<number>
  getmininginfo: () => Promise<{
    blocks: number
    currentblocksize: number
    currentblocktx: number
    difficulty: number
    errors: string
    genproclimit: number
    localsolps: number
    networksolps: number
    networkhashps: number
    pooledtx: number
    testnet: boolean
    chain: string
    generate: boolean
  }>
  getnetworkhashps: (blocks?: number, height?: number) => Promise<number>
  getnetworksolps: (blocks?: number, height?: number) => Promise<number>
  prioritisetransaction: (
    txid: string,
    priorityDelta: number,
    feeDelta: number,
  ) => Promise<boolean>
  submitblock: (
    hexdata: string,
    jsonparametersobject?: string,
  ) => Promise<
    | 'duplicate'
    | 'duplicate-invalid'
    | 'duplicate-inconclusive'
    | 'inconclusive'
    | 'rejected'
  >
  addnode: (node: string, command: string) => Promise<void>
  clearbanned: () => Promise<void>
  disconnectnode: (node: string) => Promise<void>
  getaddednodeinfo: (
    dns?: boolean,
    node?: string,
  ) => Promise<{
    addednode: string
    connected: number
    addresses: {
      address: string
      connected: string
    }[]
  }>
  getconnectioncount: () => Promise<number>
  getdeprecationinfo: () => Promise<{
    version: string
    subversion: string
    deprecationheight: number
  }>
  getnettotals: () => Promise<{
    totalbytesrecv: number
    totalbytessent: number
    timemillis: number
  }>
  getnetworkinfo: () => Promise<{
    version: number
    subversion: string
    protocolversion: number
    localservices: string
    timeoffset: number
    connections: number
    networks: {
      name: string
      limited: boolean
      reachable: boolean
      proxy: string
      proxy_randomize_credentials: boolean
    }[]
    relayfee: number
    localaddresses: {
      name: string
      limited: boolean
      reachable: boolean
      proxy: string
      proxy_randomize_credentials: boolean
    }[]
    warnings: string
  }>
  getpeerinfo: () => Promise<{
    id: number
    addr: string
    addrlocal: string
    services: string
    lastsend: number
    lastrecv: number
    bytessent: number
    bytesrecv: number
    conntime: number
    timeoffset: number
    pingtime: number
    version: number
    subver: string
    inbound: boolean
    startingheight: number
    banscore: number
    synced_headers: number
    synced_blocks: number
    inflight: any[]
    whitelisted: boolean
  }>
  listbanned: () => Promise<string[]>
  ping: () => Promise<null>
  setban: (
    ip: string,
    command: string,
    bantime?: number,
    absolute?: number,
  ) => Promise<void>
  createrawtransaction: (
    transactions: { txid: string; vout: number; sequence?: number }[],
    addresses: { address: number }[],
    locktime?: number,
    expiryheight?: number,
  ) => Promise<string>
  decoderawtransaction: (
    hex: string,
  ) => Promise<{
    txid: string
    overwintered: boolean
    version: number
    versiongroupid: string
    locktime: number
    expiryheight: number
    vin: {
      txid: string
      vout: number
      scriptSig: {
        value: number
        n: number
        scriptPubKey: {
          asm: string
          hex: string
          reqSigs: number
          type: string
          addresses: string[]
        }
      }
      sequence: number
    }[]
    vout: {
      value: number
      n: number
      scriptPubKey: {
        asm: string
        hex: string
        reqSigs: number
        type: string
        addresses: string[]
      }
    }[]
    vjoinsplit: {
      value: number
      n: number
      scriptPubKey: {
        asm: string
        hex: string
        reqSigs: number
        type: string
        addresses: string[]
      }
    }[]
  }>
  decodescript: (
    hex: string,
  ) => Promise<{
    asm: string
    hex: string
    type: string
    reqSigs: string
    addresses: string[]
    p2sh: string
    address: string
  }>
  fundrawtransaction: (
    hex: string,
  ) => Promise<{
    hex: string
    fee: number
    changepos: string
  }>
  getrawtransaction: (
    txid: string,
  ) => Promise<{
    hex: string
    txid: string
    version: number
    locktime: number
    expiryheight: number
    vin: {
      txid: string
      vout: number
      scriptSig: {
        asm: string
        hex: string
      }
      sequence: number
    }[]
    vout: {
      value: number
      n: number
      scriptPubKey: {
        asm: string
        hex: string
        reqSigs: number
        type: string
        addresses: string[]
      }
    }[]
    vjoinsplit: {
      vpub_old: number
      vpub_new: number
      anchor: string
      nullifiers: string[]
      commitments: string[]
      onetimePubKey: string
      randomSeed: string
      macs: string[]
      proof: string
      ciphertexts: string[]
    }[]
    blockhash: string
    confirmations: number
    time: number
    blocktime: number
  }>
  sendrawtransaction: (hex: string, allowHighFees?: boolean) => Promise<string>
  signrawtransaction: (
    hex: string,
    prevtxs?: Array<{
      txid: string
      vout: number
      scriptPubKey: string
      redeemScript: string
      amount: number
    }>,
    privatekeys?: string[],
    sighashtype?:
      | 'ALL'
      | 'NONE'
      | 'SINGLE'
      | 'ALL|ANYONECANPAY'
      | 'NONE|ANYONECANPAY'
      | 'SINGLE|ANYONECANPAY',
    branchid?: string,
  ) => Promise<{
    hex: string
    complete: boolean
    errors: {
      txid: string
      vout: number
      scriptSig: string
      sequence: number
      error?: string
    }[]
  }>
  createmultisig: (
    nrequired: number,
    keys: string[],
  ) => Promise<{ address: string; redeemScript: string }>
  estimatefee: (nblocks: number) => Promise<number>
  estimatepriority: (nblocks: number) => Promise<number>
  validateaddress: (
    zcashaddress: string,
  ) => Promise<{
    isvalid: boolean
    address: string
    scriptPubKey: string
    ismine: boolean
    isscript: boolean
    pubkey: string
    iscompressed: boolean
    account: string
  }>
  verifymessage: (
    zcashaddress: string,
    signature: string,
    message: string,
  ) => Promise<boolean>
  z_validateaddress: (
    zaddr: string,
  ) => Promise<{
    isvalid: boolean
    address: string
    type: string
    ismine: boolean
    payingkey: string
    transmissionkey: string
    diversifier: string
    diversifiedtransmissionkey: string
  }>
  addmultisigaddress: (
    nrequired: string,
    keysobject: { address: string }[],
    account: string,
  ) => Promise<string>
  backupwallet: (destination: string) => Promise<string>
  dumpprivkey: (tAddr: string) => Promise<string>
  dumpwallet: (filename: string) => Promise<string>
  encryptwallet: (passphrase: string) => Promise<void>
  getaccount: (zcashaddress: string) => Promise<string>
  getaccountaddress: (account: string) => Promise<string>
  getaddressesbyaccount: (account: string) => Promise<string[]>
  getbalance: (
    account?: string,
    minconf?: number,
    includeWatchonly?: boolean,
  ) => Promise<number>
  getnewaddress: (account: string) => Promise<string>
  getrawchangeaddress: (address: string) => Promise<string>
  getreceivedbyaccount: (account: string, minconf?: number) => Promise<number>
  getreceivedbyaddress: (
    zcashaddress: string,
    minconf?: number,
  ) => Promise<number>
  gettransaction: (
    txid: string,
    includeWatchonly?: boolean,
  ) => Promise<{
    amount: number
    confirmations: number
    blockhash: string
    blockindex: number
    blocktime: number
    txid: string
    time: number
    timereceived: number
    details: {
      account: string
      address: string
      category: string
      amount: number
      vout: number
    }[]
    vjoinsplit: {
      anchor: string
      nullifiers: string[]
      commitments: string[]
      macs: string[]
      vpub_old: number
      vpub_new: number
    }[]
    hex: string
  }>
  getunconfirmedbalance: () => Promise<number>
  getwalletinfo: () => Promise<{
    walletversion: number
    balance: number
    unconfirmed_balance: number
    immature_balance: number
    txcount: number
    keypoololdest: number
    keypoolsize: number
    paytxfee: number
    seedfp: string
  }>
  importaddress: (
    address: string,
    label?: string,
    rescan?: boolean,
  ) => Promise<void>
  importprivkey: (
    zcashprivkey: string,
    label?: string,
    rescan?: boolean,
  ) => Promise<void>
  importwallet: (filename: string) => Promise<void>
  keypoolrefill: (newsize?: number) => Promise<void>
  listaccounts: (
    minconf?: number,
    includeWatchonly?: boolean,
  ) => Promise<{ [account: string]: number }>
  listaddressgroupings: () => Promise<any[]>
  listlockunspent: () => Promise<{ txid: string; vout: number }[]>
  listreceivedbyaccount: (
    minconf?: number,
    includeempty?: boolean,
    includeWatchonly?: boolean,
  ) => Promise<
    {
      involvesWatchonly: boolean
      account: string
      amount: number
      confirmations: number
    }[]
  >
  listreceivedbyaddress: (
    minconf?: number,
    includeempty?: boolean,
    includeWatchonly?: boolean,
  ) => Promise<
    {
      involvesWatchonly: boolean
      amount: number
      confirmations: number
      account: string
    }[]
  >
  listsinceblock: (
    blockhash: string,
    targetConfirmations?: number,
    includeWatchonly?: boolean,
  ) => Promise<{
    transactions: {
      account: string
      address: string
      category: string
      amount: number
      vout: number
      fee: number
      confirmations: number
      blockhash: string
      blockindex: number
      blocktime: number
      txid: string
      time: number
      timereceived: number
      comment: string
      to: string
    }[]
    lastblock: string
  }>
  listtransactions: (
    account?: string,
    count?: number,
    from?: number,
    includeWatchonly?: boolean,
  ) => Promise<
    {
      account: string
      address: string
      amount: number
      vout: number
      fee: number
      category: string
      confirmations: number
      blockhash: string
      blockindex: number
      txid: string
      time: number
      timereceived: number
      comment: string
      otheraccount: string
      size: number
    }[]
  >
  listunspent: (
    minconf?: number,
    maxconf?: number,
    addresses?: string[],
  ) => Promise<
    {
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
    }[]
  >
  lockunspent: (
    unlock: boolean,
    transactions: { txid: string; vout: string }[],
  ) => Promise<boolean>
  move: (
    fromaccount: string,
    toaccount: string,
    amount: number,
    minconf?: number,
    comment?: string,
  ) => Promise<boolean>
  sendfrom: (
    fromaccount: string,
    tozcashaddress: string,
    amount: number,
    minconf?: number,
    comment?: string,
    commentTo?: string,
  ) => Promise<string>
  sendmany: (
    fromaccount: string,
    amounts: { [address: string]: number }[],
    minconf?: number,
    comment?: string,
    subtractfeefromamount?: string[],
  ) => Promise<string>
  sendtoaddress: (
    zcashaddress: string,
    amount: number,
    comment?: string,
    commentTo?: string,
    subtractfeefromamount?: boolean,
  ) => Promise<string>
  setaccount: (zcashaddress: string, account: string) => Promise<void>
  settxfee: (amount: number) => Promise<boolean>
  signmessage: (tAddr: string, message: string) => Promise<string>
  z_exportkey: (zaddr: string) => Promise<string>
  z_exportviewingkey: (zaddr: string) => Promise<string>
  z_exportwallet: (filename: string) => Promise<string>
  z_getbalance: (address: string, minconf?: number) => Promise<number>
  z_getnewaddress: (type?: string) => Promise<string>
  z_getoperationresult: (operationid?: string) => Promise<any[]>
  z_getoperationstatus: (operationids?: string) => Promise<any[]>
  z_gettotalbalance: (
    minconf?: number,
    includeWatchonly?: boolean,
  ) => Promise<{
    transparent: number
    private: number
    total: number
  }>
  z_importkey: (
    zkey: string,
    rescan?: 'yes' | 'no' | 'whenkeyisnew',
    startHeight?: number,
  ) => Promise<void>
  z_importviewingkey: (
    vkey: string,
    rescan?: 'yes' | 'no' | 'whenkeyisnew',
    startHeight?: number,
  ) => Promise<void>
  z_importwallet: (filename: string) => Promise<void>
  z_listaddresses: (includeWatchonly?: boolean) => Promise<string[]>
  z_listoperationids: (status?: string) => Promise<string>
  z_listreceivedbyaddress: (
    address: string,
    minconf?: number,
  ) => Promise<{
    txid: string
    amount: number
    memo: number
    change: boolean
  }>
  z_listunspent: (
    minconf?: number,
    maxconf?: number,
    includeWatchonly?: boolean,
    addresses?: string[],
  ) => Promise<
    {
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
    }[]
  >
  z_mergetoaddress: (
    fromaddresses: string[],
    toaddress: string,
    fee?: number,
    transparent_limit?: number,
    shielded_limit?: number,
    memo?: string,
  ) => Promise<{
    remainingUTXOs: number
    remainingTransparentValue: number
    remainingNotes: number
    remainingShieldedValue: number
    mergingUTXOs: number
    mergingTransparentValue: number
    mergingNotes: number
    mergingShieldedValue: number
    opid: number
  }>
  z_sendmany: (
    fromaddress: string,
    amounts: { address: string; amount: number; memo?: string }[],
    minconf?: number,
    fee?: number,
  ) => Promise<string>
  z_shieldcoinbase: (
    fromaddress: string,
    toaddress: string,
    fee?: number,
    limit?: number,
  ) => Promise<{
    remainingUTXOs: number
    remainingValue: number
    shieldingUTXOs: number
    shieldingValue: number
    opid: number
  }>
  [key: string]: any
}
