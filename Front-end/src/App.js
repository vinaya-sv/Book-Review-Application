// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './Components/sign_in';
import SignUp from './Components/sign_up';
import Home from './Components/home';
import BookPage from './Components/BookPage';
import MyProvider from './Components/context/MyProvider';
import WishList from './Components/wishlist';
import { Provider } from 'react-redux';
import { store } from './Components/features/store';
import ProfilePage from './Components/profile';
import AdminSignIn from './Components/Admin/AdminSIgnIn';
import AdminHome from './Components/Admin/adminHome';
import { useEffect, useState } from 'react';
import Feedback from './Components/feedback';

function App() {
  const [isLoggedIn, setLogInStatus]=useState("false");
  
  
  return (
    <MyProvider>
      {/* {localStorage.getItem("token")} */}
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route index element={<SignIn/>}/>          
          <Route path="/signup" element={<SignUp/>}/>
          {/* {
            localStorage.getItem("token") ?
            <> */}
            <Route path="/home" element={<Home/>}/>
            <Route path="/book" element={<BookPage/>}/>
            <Route path="/wishlist" element={<WishList/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/admin-signin" element={<AdminSignIn/>}/>          
            <Route path="/admin-home" element={<AdminHome/>}/>
            <Route path="/profile/*" element={<ProfilePage/>}/>
            {/* </>
            :
            <Route path="*" element={<Navigate to="/" replace={true} />}/>
          } */}
          
      </Routes>
    </BrowserRouter>
      </Provider>
    </MyProvider>
  );
}

export default App;
