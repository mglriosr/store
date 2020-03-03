import React from 'react'
import 'bulma/css/bulma.css'

import { Navbar } from 'react-bulma-components/dist'
// import { Button } from 'react-bulma-components/dist';

const MainNavbar = () => {
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  });
  return(
    <Navbar>
      <div className = "navbar-brand">
        <a className = "navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
        </a>

        <a role="button" className = "navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className = "navbar-menu">
        <div className = "navbar-start">
          <a className = "navbar-item">
            Home
          </a>

          <a className = "navbar-item">
            Documentation
          </a>

          <div className = "navbar-item has-dropdown is-hoverable">
            <a className = "navbar-link">
              More
            </a>

            <div className = "navbar-dropdown">
              <a className = "navbar-item">
                About
              </a>
              <a className = "navbar-item">
                Jobs
              </a>
              <a className = "navbar-item">
                Contact
              </a>
              <hr className = "navbar-divider"></hr>
              <a className = "navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className = "navbar-end">
          <div className = "navbar-item">
            <div className = "buttons">
              <a className = "button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className = "button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  )
}

export default MainNavbar