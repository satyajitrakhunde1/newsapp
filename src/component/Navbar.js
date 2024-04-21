import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          
        <strong><li className="navbar-brand">Newsify</li></strong>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>

      <li className="nav-item "><Link className="nav-link" to="/business">business</Link> </li>
      <li className="nav-item "><Link className="nav-link" to="/entertainment">entertainment</Link> </li>
      <li className="nav-item "><Link className="nav-link" to="/general">general</Link> </li>
      <li className="nav-item "><Link className="nav-link" to="/health">health</Link> </li>
      <li className="nav-item "><Link className="nav-link" to="/science">science</Link> </li>
      <li className="nav-item "><Link className="nav-link" to="/sports">sports</Link> </li>
      <li className="nav-item "><Link className="nav-link" to="/technology">technology</Link> </li>
       


    </ul>
    
  </div>
</nav>
        </>
      </div>
    )
  }
}
