import React from 'react'

import './landing.scss'

import '@jacmanh/button'
import '@jacmanh/dropdown'
import '@jacmanh/textfield'
import '@jacmanh/icon'

function Landing() {

  return (
    <div className="landing">
      <div className="wrapper">
        <div className="intro">
          Welcome to the Biggest Social Network in the World
        </div>
        <div className="landing__form">

          <div className="landing__form-nav">
            <div><ui-icon name="login"></ui-icon></div>
            <div><ui-icon name="register"></ui-icon></div>
          </div>

          <form className="form">
            <div className="title">
              Login to your account
            </div>
            <ui-textfield
              label="Your email">
            </ui-textfield>

            <ui-textfield
              label="Your password"
              type="password">
            </ui-textfield>

            <ui-button>Login</ui-button>
          </form>


        </div>
      </div>
    </div>
  );
}

export default Landing;