import { ThemeProvider } from 'styled-components';

import Routes from './Routes';

import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />   
    <GlobalStyle />
  </ThemeProvider>

)

export default App;
