import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'
import i18n from './i18n.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <AppProvider>
      <App />
    </AppProvider>
  </I18nextProvider>
)
