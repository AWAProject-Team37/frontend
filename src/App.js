import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import FrontPage from './Pages/FrontPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={FrontPage}/>
      <Route path="/login" component={LoginPage}/>
    </BrowserRouter>
  );
}

export default App;
