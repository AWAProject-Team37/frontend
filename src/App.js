import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={LoginPage}/>
    </BrowserRouter>
  );
}

export default App;
