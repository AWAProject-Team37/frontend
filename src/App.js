import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react'
import './App.css';
import LoginPage from './Pages/LoginPage';
import FrontPage from './Pages/FrontPage';
import ManagerPage from './Pages/ManagerPage';
import RestaurantPage from './Pages/RestaurantPage';
import jwt from 'jsonwebtoken';
import OrderPage from './Pages/OrderPage';

function App() {
  const [userToken, setUserToken] = useState(null);
  const userInfo = jwt.decode(userToken);
  useEffect(() => {
    setUserToken(sessionStorage.getItem('userToken'));
  },[])

  const getJwt = (jwt) => {
    sessionStorage.setItem('userToken', jwt);
    setUserToken(sessionStorage.getItem('userToken'));
  }
  const logout = () => {
    sessionStorage.clear();
    setUserToken(null);
  }

  // Routes if not logged in
  let routes = <>
    <Route path="/login" element={<LoginPage getJwt={getJwt}/>}/>
    <Route path="*" element={<LoginPage getJwt={getJwt}/>}/>
    
  </>
  if(userToken != null){
    //Routes for manager login
    if(userInfo.isManager === 1){
      routes = <>
    <Route path="*" element={<ManagerPage id={userInfo.idUser} logout={logout}/>}/>
    <Route path="/manager" element={<ManagerPage id={userInfo.idUser} logout={logout}/>}/>
    </>
    //Routes for customer login
    } else {
      routes = <>
      <Route path="/foodapp" element={<FrontPage logout={logout} userInfo={userInfo}/>}/>
      <Route path="/orders" element={<OrderPage logout={logout} userInfo={userInfo}/>}/>
      <Route path="*" element={<FrontPage logout={logout} userInfo={userInfo}/>}/>
      <Route path="foodapp/restaurant/:id" element={<RestaurantPage userInfo={userInfo}/>}/>
      </>
    } 
  }

  return (
    <BrowserRouter>
      <Routes>
      {routes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
