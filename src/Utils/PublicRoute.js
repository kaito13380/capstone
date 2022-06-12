import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { getToken } from './Common';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
          {...rest}
          render={props => {
              return !getToken() ? <Component {...props} />
                  : <Navigate to={{ pathname: '/dashboard' }} />
          }}
    />
  )
}

export default PublicRoute;