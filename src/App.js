import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import FrontPage from './Pages/FrontPage';
import ManagerPage from './Pages/ManagerPage';
import RestaurantPage from './Pages/RestaurantPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={FrontPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/manager" component={ManagerPage}/>
      <Route path="/restaurant/:id" component={RestaurantPage}/>

    </BrowserRouter>
  );
}

export default App;
