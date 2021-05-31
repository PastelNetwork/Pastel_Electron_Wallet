import * as React from 'react'
import {
  Document,
  Page,
  PDFDownloadLink,
  Text,
  View,
} from '@react-pdf/renderer'

import Button from '../../../../common/components/Button/Button'
import Typography from '../../../../common/components/Typography/Typography'
import Input from '../../../../common/components/Input/Input'
import { colors } from '../../../../common/theme/colors'
import * as Styles from './CryptoKey.style'

interface PDFDocumentProps {
  privateKey: string
  publicKey: string
}

const PDFDocument = ({ privateKey, publicKey }: PDFDocumentProps) => {
  return (
    <Document title={'Crypto Keys'}>
      <Page size='A4'>
        <View>
          <Text>Private Key: {privateKey}</Text>
        </View>
        <View>
          <Text>Public Key: {publicKey}</Text>
        </View>
      </Page>
    </Document>
  )
}

const CryptoKey: React.FC = () => {
  return (
    <>
      <Typography variant='h3' weight={800} lineHeight={40}>
        Backup crypto-keys
      </Typography>
      <Styles.DescriptionContainer>
        <Typography
          color={colors.text.secondary}
          lineHeight={26}
          variant='body2'
          weight={500}
        >
          Some description goes here
        </Typography>
      </Styles.DescriptionContainer>
      <Styles.KeysContainer>
        <Input
          type='text'
          label='Public key'
          value={'ps19jxlfdl8mhnsqlf7x0cwlh...eq0v34'}
          onChange={() => {
            console.log()
          }}
          ref={null}
        />
        <Input
          type='text'
          label='Secret key'
          value={'ps19jxlfdl8mhnsqlf7x0cwlh...eq0v34'}
          onChange={() => {
            console.log()
          }}
          ref={null}
          style={{ marginTop: 22 }}
        />
      </Styles.KeysContainer>
      <Button variant='transparent' style={{ width: '100%' }}>
        Download PDF with all keys
        <PDFDownloadLink
          document={<PDFDocument privateKey={'123'} publicKey={'iop'} />}
          fileName={'crypto_keys'}
        />
      </Button>
    </>
  )
}

export default CryptoKey
