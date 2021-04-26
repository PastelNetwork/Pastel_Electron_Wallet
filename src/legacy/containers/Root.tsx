import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { ErrorModal as ReduxErrorModal } from '../../features/errorModal'
import Routes from '../Routes'

function Root(): JSX.Element {
  return (
    <>
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
      <ReduxErrorModal />
    </>
  )
}

export default Root
