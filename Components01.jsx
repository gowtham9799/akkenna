import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Components1() {
  return (
    <Container fluid className='comp1'>
        <Row>
            <Col style={{paddingLeft:'0px',paddingRight:'0px'}}>
            <div className='img1'>
       <Row style={{marginLeft:'0px',marginRight:'0px'}}>
        <Col lg={6} style={{paddingLeft:'0px',paddingRight:'0px'}}>
          <div className='com1div' style={{textAlign:'center',marginTop:'13rem'}}>
        <h4 className='text1' style={{color:'white',fontFamily:'poppins'}}>Find The Best <span style={{fontSize:'28px',fontWeight:'bolder',fontFamily:'poppins'}}>DREATMEND CENTERS</span></h4>
        <h4 style={{color:'white',fontFamily:'poppins'}}>or <span style={{fontSize:'28px',fontWeight:'bolder'}} >REHABILISATION Centers</span>Near by</h4>
        <h4 style={{color:'white',fontFamily:'poppins',paddingRight:'11rem'}}>You with our<span style={{fontSize:'28px',fontWeight:'bolder',fontFamily:'poppins'}}>''REHAPBY''</span></h4>
        </div>  </Col>

        <Col lg={6} style={{paddingLeft:'0px',paddingRight:'0px'}}>
        <div className='tap' style={{width:'45%',height:'250px',marginLeft:'0px',fontFamily:'poppins'}}>
        <h6 style={{color:'white',textAlign:'center',paddingTop:'30PX'}}>Find The <span style={{fontSize:'15px',fontWeight:'bolder', textAlign:'center',paddingTop:'30PX',fontFamily:'poppins'}}>DREATMEND CENTER</span></h6>
        <Dropdown as={ButtonGroup} style={{marginLeft:'30px',width:'80%',marginTop:'10px'}}>
      <Button variant="light"style={{fontFamily:'poppins'}}>All Locations</Button>

      <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

      <Dropdown.Menu variant="light">
    
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown as={ButtonGroup} style={{marginLeft:'30px',width:'80%',marginTop:'10px',fontFamily:'poppins'}}>
      <Button variant="light" style={{fontFamily:'poppins'}}>All Locations</Button>

      <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

      <Dropdown.Menu variant="light">
        
      </Dropdown.Menu>
    </Dropdown>

    <Button variant="success" style={{marginLeft:'30px',width:'80%',marginTop:'10px',fontFamily:'poppins'}} >Get Well Soon</Button>
        </div>
        </Col>
       </Row>
            

            
            </div>
            
            </Col>
        </Row>
    </Container>

   
  )
}

export default Components1