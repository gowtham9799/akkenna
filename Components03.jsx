import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

function Components03() {
  return (
    <div>
        <Container fluid className=''>
        <Row>
            <Col style={{paddingLeft:'0px',paddingRight:'0px'}}>
            <div className='comp3img1'>
          <div className='edi' style={{paddingTop:'3rem',marginLeft:'1rem',marginLeft:'10rem'}}>
        <h4 className='edi' style={{color:'black',fontFamily:'poppins',fontWeight:'600',fontSize:"18px,marginLeft:'3rem"}}>AD</h4>
        <h4 className='edi' style={{color:'black',fontWeight:'600',fontSize:"20px",fontFamily:'poppins'}}>Featured Residancial Centers</h4>
        <h6 className='edi' style={{color:'black',fontFamily:'poppins',fontWeight:'400',fontSize:"16px"}}> Featured Residancial Centers Featured Residancial Centers <br/>Featured Residancial Centers Featured Residancial Centers <br/>Featured Residancial Centers Featured Residancial Centers <br/>Featured Residancial Centers Featured Residancial Centers</h6>
        <h4 className='edi' style={{color:'black',fontWeight:'bold',fontFamily:'poppins',fontWeight:'600',fontSize:"24px"}}>Visit At</h4>
        </div>  
            </div>
            
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Components03