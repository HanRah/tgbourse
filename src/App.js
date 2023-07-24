import './App.css';
import Layouts from './components/layouts/Layouts.jsx';


import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
  palette: {
    primary: {
      main: "rgb(197, 10, 74)"
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.87)'
    },
    tertiary: {
      main: 'rgba(0, 0, 0, 0.6)'
    }
  },
  typography: {
    fontFamily: [
      'Vazir'
    ].join(','),

  }


});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});



function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layouts />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
