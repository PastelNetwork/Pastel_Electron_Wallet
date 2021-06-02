import React from 'react'

import ChangePassword from './changePassword/ChangePassword'
import QRCode from './photoOfQRCode/QRCode'
import CryptoKey from './backupCryptoKey/CryptoKey'

const MySecurity: React.FC = () => {
  return (
    <div className='w-full flex justify-center py-30px px-60px bg-background-main'>
      <div className='grid grid-cols-3 gap-5 min-h-672px'>
        <ChangePassword />
        <QRCode />
        <CryptoKey />
      </div>
    </div>
  )
}

export default MySecurity
