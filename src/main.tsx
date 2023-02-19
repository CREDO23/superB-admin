import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={
      {
        token : {
          colorPrimary : '#AC1E59'
        }
      }
    }>
    <App />
    </ConfigProvider>
  </React.StrictMode>
);
