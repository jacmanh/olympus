import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import * as firebase from "firebase/app"
import 'firebase/auth'

import logo from './assets/logo.png'
import './landing.scss'

import '@jacmanh/button'
import '@jacmanh/checkbox'
import '@jacmanh/dropdown'
import '@jacmanh/textfield'
import '@jacmanh/tabs'
import '@jacmanh/icon'

function Landing() {
  let history = useHistory()
  const initialValues = {
    email: null,
    password: null
  }

  const [fields, setFields] = useState(initialValues)
  const [formErrors, setFormErrors] = useState()
  const formLogin = useRef(null)
  const formValues = useRef(fields)

  useEffect(() => {
    document.body.style.backgroundColor = '#ff5e3a'
    formLogin.current.addEventListener('keydown', submitOnEnter)
    formLogin.current.addEventListener('texfieldChange', handleFieldChange)

    return function cleanup() {
      document.body.style.backgroundColor = null
    }
  }, [])

  const submitOnEnter = e => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      formLogin.current.dispatchEvent(new Event('submit'))
    }
  }

  const selectTab = (e, tabName) => {
    document.querySelector(`ui-tabs #${tabName}`).click()
  }

  const handleFieldChange = (e) => {
    const { name, value } = e.detail
    const data = {...formValues.current, [name]: value}
    formValues.current = data
    setFields(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((fields.email && fields.password) === 'demo') {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function() {
          firebase.auth().signInWithEmailAndPassword('demo@olympus.com', 'demodemo')
          .then(() => {
            history.push('/')
          })
        })
    } else {
      setFormErrors('Please use demo/demo to login with the demo account')
    }
  }


  return (
    <div className="landing">
      <div className="wrapper">
        <a className="top-menu" href="/"><img src={logo} alt="Olympus" /></a>
        <div className="intro">
          <h1>Welcome to my Demo website</h1>
          <p>
            This website is just here to test new frameworks or functionalities into a complex website. <br/>
            It uses:
          </p>
          <ul>
            <li>Vanilla Web Components with Shadow DOM enable, separated in a custom monorepo package</li>
            <li>a React library that controls everything</li>
            <li>A Firebase database</li>
            <li>A design made by Odin_Design, bought on ThemeForest</li>
          </ul>
          <p>
            <strong>Every datas collected like posts, names etc... is reset every day.</strong>
          </p>
          <p>
            Have fun using this website!
          </p>
        </div>
        <div className="landing__form">
          <ui-tabs vertical>
            <button id="tab-login" slot="tab">
              <ui-icon no-event name="login"></ui-icon>
            </button>
            <button id="tab-register" slot="tab">
              <ui-icon no-event name="register"></ui-icon>
            </button>
            <section>
              <form ref={formLogin} className="form" onSubmit={handleSubmit}>
                <div className="title">
                  Login to your account
                </div>
                <strong>
                  You can use the demo account: demo / demo
                </strong>

                {formErrors && <div className="error">{formErrors}</div>}

                <ui-textfield
                  label="Your username"
                  name="email">
                </ui-textfield>

                <ui-textfield
                  label="Your password"
                  type="password"
                  name="password">
                </ui-textfield>

                <ui-checkbox></ui-checkbox>

                <ui-button action submit>Login</ui-button>

                <p>
                  Don’t you have an account? <button type="button" className="link" onClick={(e) => selectTab(e, 'tab-register')}>Register Now!</button> It’s really simple and you can start enjoing all the benefits!
                </p>
              </form>
            </section>
            <section>
              <form className="form disabled" onSubmit={handleSubmit}>
                <div className="title">
                  Register to Olympus
                </div>
                <p>
                  You can't register on this website but you can login using <strong>demo / demo</strong>
                </p>
                <div className="form__row">
                  <ui-textfield
                    disabled
                    label="First Name">
                  </ui-textfield>
                  <ui-textfield
                    disabled
                    label="Last Name">
                  </ui-textfield>
                </div>

                <ui-textfield
                  disabled
                  label="Your email">
                </ui-textfield>

                <ui-textfield
                  disabled
                  type="password"
                  label="Your password">
                </ui-textfield>

                <ui-button disabled action2>Register</ui-button>
              </form>
            </section>
          </ui-tabs>
        </div>
      </div>
    </div>
  );
}

export default Landing;