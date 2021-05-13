import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import React from 'react'
import Modal from 'react-modal'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import styles from './PastelPaperWalletModal.module.css'
import { closePastelPaperWalletModal } from './PastelPaperWalletModalSlice'
import QRCodeGEnerator from './QRCodeGEnerator'

type PastelPaperWalletModalProps = {
  info: {
    currencyName: string
  }
}

export default function PastelPaperWalletModal({
  info,
}: PastelPaperWalletModalProps): JSX.Element {
  const { address, privateKey, modalIsOpen } = useAppSelector(
    state => state.pastelPaperWalletModal,
  )
  const dispatch = useAppDispatch()

  if (!modalIsOpen || !privateKey) {
    return <></>
  }

  const breakChar = '\u00ad'
  const pdfStyles = StyleSheet.create({
    viewer: {
      width: '100%',
      height: '100%',
    },
    page: {
      flexDirection: 'row',
    },
    section: {
      margin: 0,
      padding: 20,
      flexGrow: 1,
    },
    contentTop: {
      display: 'flex',
      width: '100%',
      marginBottom: '40px',
      paddingBottom: '20px',
      borderBottom: '2px dashed #000',
      flexDirection: 'row',
    },
    contentItem: {
      margin: '0',
    },
    contentTitle: {
      marginTop: '0',
      marginBottom: '5px',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    contentValue: {
      marginTop: '0',
      fontSize: '12px',
      fontWeight: 'normal',
      wordBreak: 'break-all',
    },
    marginTop20: {
      marginTop: '20px',
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      paddingBottom: '40px',
      borderBottom: '2px solid #000',
    },
    topMedia: {
      width: '35%',
      maxWidth: '180px',
      marginRight: '30px',
    },
    contentWrapper: {
      width: '75%',
    },
    mainContentWrapper: {
      width: '65%',
    },
    mainMedia: {
      width: '35%',
      maxWidth: '240px',
      textAlign: 'right',
    },
    topImg: {
      width: '100%',
    },
    mainImg: {
      width: '100%',
    },
  })

  const splitStringIntoChunks = (s: string, numChunks: number) => {
    if (numChunks > s.length) {
      return [s]
    }

    if (s.length < 16) {
      return [s]
    }

    const chunkSize = Math.round(s.length / numChunks)
    const chunks = []

    for (let i = 0; i < numChunks - 1; i++) {
      chunks.push(s.substr(i * chunkSize, chunkSize))
    } // Last chunk might contain un-even length

    chunks.push(s.substr((numChunks - 1) * chunkSize))
    return chunks
  }

  const generateFileName = () => {
    const addr = splitStringIntoChunks(address, 6)[0]
    const title = `PSL_Paper_Wallet__Shielded_Address_${addr}`
    const date = new Date()
    const dateTime = `${
      date.getMonth() + 1
    }_${date.getDate()}_${date.getFullYear()}__${date.getHours()}_${date.getMinutes()}`
    return `${title}_${dateTime}.pdf`
  }

  const PDFDocument = () => (
    <Document>
      <Page size='A4' style={pdfStyles.page}>
        <View style={pdfStyles.section}>
          <View style={pdfStyles.contentTop}>
            <View style={pdfStyles.topMedia}>
              <QRCodeGEnerator address={address} />
            </View>
            <View style={pdfStyles.contentWrapper}>
              <Text style={pdfStyles.contentTitle}>
                {info.currencyName} Address (Sapling)
              </Text>
              <Text style={pdfStyles.contentValue}>
                {address.replace(/(.{40})/g, `$1${breakChar}`)}
              </Text>
            </View>
          </View>
          <View style={pdfStyles.mainContent}>
            <View style={pdfStyles.mainContentWrapper}>
              <View style={pdfStyles.contentItem}>
                <Text style={pdfStyles.contentTitle}>Private Key</Text>
                <Text style={pdfStyles.contentValue}>
                  {privateKey.replace(/(.{40})/g, `$1${breakChar}`)}
                </Text>
              </View>
              <View style={pdfStyles.marginTop20}>
                <Text style={pdfStyles.contentTitle}>
                  {info.currencyName} Address (Sapling)
                </Text>
                <Text style={pdfStyles.contentValue}>
                  {address.replace(/(.{40})/g, `$1${breakChar}`)}
                </Text>
              </View>
            </View>
            <View style={pdfStyles.mainMedia}>
              <QRCodeGEnerator address={address} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )

  const DownloadButton = () => (
    <button className={styles.btn_download} id='PDFDownloadBtn'>
      <PDFDownloadLink
        document={<PDFDocument />}
        fileName={generateFileName()}
      />
    </button>
  )

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => dispatch(closePastelPaperWalletModal())}
      className={styles.modal_content_wrapper}
    >
      <div className={styles.modal_content}>
        <button
          type='button'
          className={styles.btn_close}
          onClick={() => dispatch(closePastelPaperWalletModal())}
        >
          X
        </button>
        <DownloadButton />
        <PDFViewer style={pdfStyles.viewer}>
          <PDFDocument />
        </PDFViewer>
      </div>
    </Modal>
  )
}
