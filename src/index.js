import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Alert } from 'antd'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Online, Offline } from 'react-detect-offline'
import App from './components/App/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Online>
      <App className="app" />
    </Online>
    <Offline>
      <div className="offline">
        <Alert
          type="error"
          message={`Можно было бы навести суету,
        но у тебя нет инета :(`}
        />
      </div>
    </Offline>
  </>,
)
