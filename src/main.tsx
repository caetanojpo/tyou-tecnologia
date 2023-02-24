import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const theme = extendTheme({
  colors: {
    cor: {
      P1: '#0097EE',
      P2: '#E34A21',
      P3: '#FFFFFF',
      S1: '#00ADB5',
      S2: '#FF914D',
      S3: '#141414'
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
