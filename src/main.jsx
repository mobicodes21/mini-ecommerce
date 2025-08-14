import './index.css'
import './App'

import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import { createRoot } from 'react-dom/client'
import store from './redux/store.js'
import theme from './theme/index.js'

createRoot(document.getElementById('root')).render(

    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>

)
