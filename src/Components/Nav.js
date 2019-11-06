import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {

    onSearch = (event) => {
      this.props.onSearch(event.target.innerText); 
    }
    
    render () {
    return (
    <div className="main-nav"> 
      <ul>
          <li><NavLink to="/search/nature" onClick={this.onSearch}>Nature</NavLink> </li>
          <li><NavLink to="/search/bird" onClick={this.onSearch}>Bird</NavLink></li> 
          <li><NavLink to="/search/forest" onClick={this.onSearch}>Forest</NavLink></li> 
    </ul>
    </div>
    );
    }
}

export default Nav;