import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core';
// import App from './App.tsx'
import ShuffleList from './ShuffleList';
// import './index.css'
import '@mantine/core/styles.css';

const theme = createTheme({

});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <MantineProvider
      defaultColorScheme="dark"
      theme={theme}
    >
      <ShuffleList />
    </MantineProvider>
  </React.StrictMode>,
)
