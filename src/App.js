import * as firebase from "firebase/app"
import React, { useEffect, useReducer, createContext, useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import 'firebase/auth'

import Landing from './pages/landing'
import Home from './pages/Home'
import userReducer from "./reducer"

const firebaseConfig = {
  apiKey: "AIzaSyC9c7o2JXa6oi2MLr7tzqcoDbBol3YjQ_k",
  authDomain: "olympus-3a2b1.firebaseapp.com",
  databaseURL: "https://olympus-3a2b1.firebaseio.com",
  projectId: "olympus-3a2b1",
  storageBucket: "olympus-3a2b1.appspot.com",
  messagingSenderId: "963128142970",
  appId: "1:963128142970:web:1eceefc22a11a999969fc3"
}

export const AuthContext = createContext()

function App() {
  const [isLoading, setLoading] = useState(false)
  const [userState, dispatchUser] = useReducer(userReducer, null)

  useEffect(() => {
    setLoading(false)
  }, [userState])

  useEffect(() => {
    setLoading(true)
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Set demo username by default
        user.updateProfile({
          displayName: 'demo'
        }).then(() => {
          dispatchUser({
            type: 'login',
            username: user.displayName,
            email: user.email,
            uid: user.uid
          }, )
        })
      } else {
        dispatchUser({
          type: 'logout'
        })
      }
    })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <AuthContext.Provider
      value={userState}
    >
      <Router>
        <Switch>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/">
            {!userState
              ? <Landing />
              : <Home />
            }
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
