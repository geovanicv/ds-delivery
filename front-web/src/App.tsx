import { ThemeProvider } from 'styled-components';
import LandingPage from './pages/LandingPage';
import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <LandingPage />
    <GlobalStyle />
  </ThemeProvider>

)

export default App;
