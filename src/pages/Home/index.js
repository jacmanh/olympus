import React, { useContext } from 'react'

import '@jacmanh/icon'
import '@jacmanh/menu'
import './style.scss'

import { AuthContext } from '../../App'

function Home() {
  const authState = useContext(AuthContext)

  return (
    <div className="home">
      <ui-menu class="menu-top" primary>
        <ui-menu-link>Home</ui-menu-link>
        <ui-menu-link>Current Page</ui-menu-link>
        <ui-menu-link>Search</ui-menu-link>
        <ui-menu-link>
          <ui-icon name="face" />
        </ui-menu-link>
      </ui-menu>


      <ui-menu class="sidebar-left" vertical>
        <ui-menu-link>
          <ui-icon name="menu" />
        </ui-menu-link>
        <ui-menu-link>
          <ui-icon name="feed" />
        </ui-menu-link>
        <ui-menu-link>
          <ui-icon name="star" />
        </ui-menu-link>
        <ui-menu-link>
          <ui-icon name="faces" />
        </ui-menu-link>
      </ui-menu>

      <div className="content">
        Mon Contenu
      </div>
    </div>
  );
}

export default Home