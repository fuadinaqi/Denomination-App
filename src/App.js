import React, { Fragment, Suspense, lazy } from 'react'

const GlobalStyle = lazy(() => import('./globalStyle'))
const MainPage = lazy(() => import('./pages/MainPage'))

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div />}>
        <GlobalStyle />
        <MainPage />
      </Suspense>
    </Fragment>
  )
}

export default App
