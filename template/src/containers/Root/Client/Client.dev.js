import React, { Component, Fragment  } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from '../DevTools'

import { createMuiTheme } from '@material-ui/core/styles'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

import MaterialTheme from 'utils/MaterialTheme'

class RootClient extends Component {
  render() {
    const { store, children } = this.props

    const { theme: { style } } = store.getState()

    return (
      <Provider store={store}>
        <ThemeProvider theme={createMuiTheme(MaterialTheme[style])}>
          <Fragment>
            <CssBaseline />
            <DevTools />
            {children}
          </Fragment>
        </ThemeProvider>
      </Provider>
    )
  }
}

RootClient.propTypes = {
  store: PropTypes.object.isRequired
}

export default RootClient