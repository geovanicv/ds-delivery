import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Footer from './components/Footer';
import NavBar from './components/NavBar';

import Home from './pages/Home'
import Orders from './pages/Orders'

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/orders" component={Orders} />
    </Switch>
    <Footer />      
  </BrowserRouter>
);

export default Routes;