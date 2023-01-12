import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

function Components02() {
  return (
   <Container>
    <h4 className='c2t1'  style={{textAlign:'center',marginTop:'60px',fontFamily:'poppins'}}>FIND LUXURY REHUBCENTERS AROUND THE GLOBE</h4>
    <Row style={{marginTop:'2rem'}}>
    <Col lg={1}></Col>
        <Col lg={1}>
        <div className='com2img1'></div>
        </Col>
        <Col lg={1}>
        <div className='com2img2'></div>
        </Col>
        <Col lg={1}>
        <div className='com2img3'></div>
        </Col>
        <Col lg={4}>
        <div className='com2img4'>
            <h4 style={{paddingTop:'15rem',paddingLeft:'20px',color:'white',fontFamily:'poppins'}}>Florida</h4>
        </div>
        </Col>
        <Col lg={1}>
        <div className='com2img5'></div>
        </Col>
        <Col lg={1}>
        <div className='com2img6'></div>
        </Col>
        <Col lg={1}>
        <div className='com2img7'></div>
        </Col>
        <Col lg={1}></Col>
    </Row>
   </Container>
  )
}

export default Components02