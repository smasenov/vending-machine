import { useMemo, useState, createContext } from 'react';
import { Machine, Total } from './containers';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { defaultValue } from './data';
import './App.css';

export const CartContext = createContext(defaultValue);

const theme = createTheme();

function App() {

  const [data, setData] = useState(defaultValue);

  const memoizedContextValue = useMemo(() => ({ data, setData }), [data]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={memoizedContextValue}>
          <Total />
          <Machine />
        </CartContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>

  );
}

export default App;