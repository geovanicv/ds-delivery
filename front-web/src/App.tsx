import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
    <GlobalStyle />
  </ThemeProvider>

)

export default App;
