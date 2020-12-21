import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Browse, Signin, Signup} from './pages'
import * as ROUTES from './constants/routes'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'


export default function App() {
   const user = null

  return (
    <Router>
      <Route  path='/signin'>
        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.SIGN_IN}
          exact
        >

          <Signin />
        </IsUserRedirect>
      </Route>


      <Route  path='/signup'>
        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.SIGN_UP}
          exact
        >
            <Signup />
        </IsUserRedirect>
      </Route>

      <ProtectedRoute user={user} path={ROUTES.BROWSE} >
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect 
        user={user} 
        loggedInPath={ROUTES.BROWSE} 
        path={ROUTES.HOME}
        exact
      >   
        <Home />
      </IsUserRedirect>
    </Router>
    );
}

