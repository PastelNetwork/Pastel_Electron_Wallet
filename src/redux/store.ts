import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { pastelAboutModalReducer } from '../features/pastelAbout'
import { pastelConfReducer } from '../features/pastelConf'
import { pastelIDReducer } from '../features/pastelID'
import { pastelModalReducer } from '../features/pastelModal'
import { pastelPaperWalletModalReducer } from '../features/pastelPaperWalletGenerator'
import { pastelPhotopeaModalReducer } from '../features/pastelPhotopea'
import { pastelPriceReducer } from '../features/pastelPrice'
import { pastelSpriteEditorToolModalReducer } from '../features/pastelSpriteEditorTool'

const store = configureStore({
  reducer: {
    pastelID: pastelIDReducer,
    pastelModal: pastelModalReducer,
    pastelConf: pastelConfReducer,
    pastelPrice: pastelPriceReducer,
    pastelPaperWalletModal: pastelPaperWalletModalReducer,
    pastelSpriteEditorToolModal: pastelSpriteEditorToolModalReducer,
    pastelPhotopeaModal: pastelPhotopeaModalReducer,
    pastelAboutModal: pastelAboutModalReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {pastelID: PastelIDState, errorModal: IErrorModalState, ...}
export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
