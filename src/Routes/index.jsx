import React, { Fragment, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { firebase_app, auth0 } from '../Config/Config';
import { configureFakeBackend, authHeader, handleResponse, } from '../Services/Fack.Backend';
import Loader from '../Layout/Loader';
import Signin from '../Auth/Signin';
import LayoutRoutes from './LayoutRoutes';
import Callback from '../Auth/Callback';
import { authRoutes } from './AuthRoutes';
import PrivateRoute from './PrivateRoute';
import ScrollToTop from '../Services/ScrollToTop';

configureFakeBackend();
const Routers = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const jwt_token = localStorage.getItem('token');
  useEffect(() => {
    let abortController = new AbortController();
    const requestOptions = { method: 'GET', headers: authHeader() };
    fetch('/users', requestOptions).then(handleResponse);
    firebase_app.auth().onAuthStateChanged(setCurrentUser);
    setAuthenticated(JSON.parse(localStorage.getItem('authenticated')));
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    console.disableYellowBox = true;
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Fragment>
      <Auth0Provider domain={auth0.domain} clientId={auth0.clientId} redirectUri={auth0.redirectUri}>
        <BrowserRouter basename={'/'}>
        <ScrollToTop/>
          <>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path={'/'} element={<PrivateRoute />}>
                  {currentUser !== null || authenticated || jwt_token ?
                    <>
                      <Route exact
                        path={`${process.env.PUBLIC_URL}`}
                        element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />}
                      />
                      <Route exact
                        path={`/`}
                        element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />}
                      />
                    </> : ''}
                  <Route path={`/*`} element={<LayoutRoutes />} />
                </Route>
                <Route path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} element={<Signin />} />
                {authRoutes.map(({ path, Component }, i) => (
                  <Route path={path} element={Component} key={i} />
                ))}
              </Routes>
            </Suspense>
          </>
        </BrowserRouter>
      </Auth0Provider>
    </Fragment >
  );
};
export default Routers;