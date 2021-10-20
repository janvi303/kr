import { Component } from "react";
import 'assets/css/styles.css'
import { Container,Navbar,Nav } from "react-bootstrap";
import img1 from 'images/Group.png'
import Links from "./Links";

export default class Header extends Component {
  render() {
    return (
      <>
      <div className="header">
       <Navbar collapseOnSelect expand="lg">
          <Container>
            
            <Navbar.Brand href="#home" className="logo">
              <img src={img1} atl="header-img"/>
            </Navbar.Brand>
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav className="ms-auto font">
                <Links href="#Home">Home</Links>
                <Links href="#About">About us</Links>
                <Links href="#Service">Service</Links>
                <Links href="#Potfolio"> Portfolio</Links>
                <Links href="#Blog">Blog</Links>
                <Links href="#Contact">Contact</Links>
              </Nav>
            </Navbar.Collapse>
           
          </Container>
        </Navbar>
    </div>
      </>
    );
  }
}
