import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react'
import './App.css';
import LoginPage from './Pages/LoginPage';
import FrontPage from './Pages/FrontPage';
import ManagerPage from './Pages/ManagerPage';
import RestaurantPage from './Pages/RestaurantPage';
import ShoppingCartPage from './Pages/ShoppingCartPage';

function App() {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    setUserToken(localStorage.getItem('userToken'));
  },[])

  const getJwt = (jwt) => {
    localStorage.setItem('userToken', jwt);
    setUserToken(localStorage.getItem('userToken'));
  }
  const logout = () => {
    localStorage.clear();
    setUserToken(null);
  }

  let routes = <>
    <Route path="/login" element={<LoginPage getJwt={getJwt}/>}/>
    <Route path="*" element={<LoginPage getJwt={getJwt}/>}/>
    
  </>

  if(userToken != null){
    routes = <>
    <Route path="/foodapp" element={<FrontPage userToken={userToken} logout={logout}/>}/>
    <Route path="*" element={<FrontPage userToken={userToken} logout={logout}/>}/>
    <Route path="/cart" element={<ShoppingCartPage/>}/>
    <Route path="/restaurant/:id" element={<RestaurantPage/>}/>
  </>
  }
  let managerRoutes = <>
    <Route path="/manager" element={<ManagerPage/>}/>
  </>

  return (
    <BrowserRouter>
      <Routes>
      {routes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
