import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './app/routes';
import AuthProvider from './common/AuthProvider';
import PrivateRoute from './common/PrivateRoute';
import PublicRoute from './common/PublicRoute';
import Login from './features/Auth/Login/Login';
import Signup from './features/Auth/Signup/Signup';
import Home from './features/Home/Home';
import Layout from './features/Layout/Layout';
import TestsPage from './features/TestsPage/TestsPage';
import { auth } from './firebaseSetup';

const App=()=> {
  const [isAuthorized, setIsAutorized] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {

      setIsAutorized(true)

    } else {
      setIsAutorized(false)
    }
  });


  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <Routes>
            {/* <Route path={routes.home} element={<Home/>}/> */}
            <Route path={routes.login} element={<PublicRoute component={Login}/>}/>
            <Route path={routes.signup} element={<PublicRoute component={Signup}/>}/>
            <Route path={routes.home} element={<PublicRoute component={Home}/>}/>
            <Route path={routes.tests} element={<PrivateRoute component={TestsPage}/>}/>
          </Routes>
          {isAuthorized?<h1>You are loged in</h1>: <h1>You need to loge in</h1>}
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
