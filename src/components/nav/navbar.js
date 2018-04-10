import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navmenu extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">K-Blog</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Most Recent
          </NavItem>
          <NavItem eventKey={2} href="#">
            Popular
          </NavItem>
          <NavDropdown eventKey={3} title="Category" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Food</MenuItem>
            <MenuItem eventKey={3.2}>Travel</MenuItem>
            <MenuItem eventKey={3.3}>Photography</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Weekends</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}

export default Navmenu;
