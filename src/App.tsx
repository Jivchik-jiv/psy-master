import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './app/routes';
import Login from './features/Auth/Login/Login';
import Signup from './features/Auth/Signup/Signup';
import Home from './features/Home/Home';
import Layout from './features/Layout/Layout';
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
      <Layout>
        <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.login} element={<Login/>}/>
          <Route path={routes.signin} element={<Signup/>}/>
        </Routes>
        {isAuthorized?<h1>You are loged in</h1>: <h1>You need to loge in</h1>}
      </Layout>
    </div>
  );
}

export default App;
