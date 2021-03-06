import React , {Component} from 'react';
import {
  Container,  
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';


  class NavigationBar extends Component {
  
  state = {
    isOpen: false
  };
   
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
         <Container>
          <NavbarBrand href="/">Shopping List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/osamakhanedu/Shopping-List">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container> 
        </Navbar>
      </div>
    );
  }
}


export default NavigationBar;