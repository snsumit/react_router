import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const getColor = ({isActive}) =>{
    return {
       color:isActive? "red":""
    }         
  }
  return (
  
    <>
    <header className="section-navbar">
      <section className="top_txt">
        <div className="head container">
          <div className="head_txt">
            <p>Watch The Latest Movies Here</p>
          </div>
          <div className="sing_in_up">
            <NavLink to="# ">SIGN IN</NavLink>
            <NavLink to="# ">SIGN UP</NavLink>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="navbar-brand">
          <NavLink to="index">
            <p>MoviesMania</p>
          </NavLink>
        </div>

        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "blue" : "black",
                  };
                }}
              >
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies"
                className="nav-link"
                style={getColor}
              >
                movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </>
  )
}
export default Header
