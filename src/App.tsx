import * as React from 'react';
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
import ProfileSettings from './features/ProfileSettings/ProfileSettings';
import TestsPage from './features/TestsPage/TestsPage';

const App=()=> {

  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path={routes.login} element={<PublicRoute component={Login}/>}/>
            <Route path={routes.signup} element={<PublicRoute component={Signup}/>}/>
            <Route path={routes.home} element={<PublicRoute component={Home}/>}/>
            <Route path={routes.tests} element={<PrivateRoute component={TestsPage}/>}/>
            <Route path={routes.settings} element={<PrivateRoute component={ProfileSettings}/>}/>
          </Routes>
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
