import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';
import React, { Component } from 'react'

export class NavbarC extends Component {
  // state= {toggleshow: false}
  // toggleShow() {
  //   setShow(!show);
  // }
  render() {
    return (
      <div style={{backgroundColor:'lightgrey',position:'sticky'}}>
          <Navbar expand="lg" className="bg-body-tertiary-light">
            <Container fluid>
              <Navbar.Brand href="/">FAKE CART</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/electronics">Electronics</Nav.Link>
                  <Nav.Link href="/jewelery">Jewelery</Nav.Link>
                  <Nav.Link href="/mens">Men's Clothing</Nav.Link>
                  <Nav.Link href="/womens">Women's Clothing</Nav.Link>
                  <Nav.Link href="/about">About us</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Button variant="Secondary"><Nav.Link href="/login">Login</Nav.Link></Button>
                  <Button variant="Secondary"><Nav.Link href="/login">SignUp</Nav.Link></Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
  }
}

export default NavbarC
