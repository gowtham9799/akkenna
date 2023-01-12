import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BsSearch } from 'react-icons/bs';

function Header() {
  return (
    <div><Navbar bg="success" expand="lg"className='nav1'>
    <Container fluid>
      <Navbar.Brand className='navmax' href="#" style={{color:'white',marginLeft:'30px',fontWeight:'bold'}}>REHABPY</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '180px',maxmarginRight:'10px' }}
          navbarScroll
        >
          <Nav.Link style={{color:'white',paddingRight:'40px',fontFamily:'poppins'}} href="#action1">ABOUT</Nav.Link>
          <Nav.Link style={{color:'white',paddingRight:'40px',fontFamily:'poppins'}} href="#action2">LOCATION</Nav.Link>
          <Nav.Link style={{color:'white',paddingRight:'40px',fontFamily:'poppins'}} href="#action2">CONDITION</Nav.Link>
          <Nav.Link style={{color:'white',paddingRight:'60px',fontFamily:'poppins'}} href="#action2">LEARNING</Nav.Link>
        
        </Nav>
        <Form className="d-flex" style={{marginRight:'30px',color:'black'}}>
          <Form.Control
            type="search"
            placeholder="Contact us"
            className="me-2"
            aria-label="Search"
          />
          <Button  variant='success'><BsSearch variant="light"/></Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header