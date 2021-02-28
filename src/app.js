import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Home from './pages/home'
import Check from './pages/check'
import Notfound from './pages/notfound'

import Layout from './components/Layout'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/check" exact>
            <Check />
          </Route>
          <Route>
            <Notfound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
