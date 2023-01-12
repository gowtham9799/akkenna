import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import c5img1 from "../Akkenna/images/c5img1.png";
import c5img2 from "../Akkenna/images/c5img2.png";
import c5img3 from "../Akkenna/images/c5img3.png";

function Components05() {

    const responsive = {
       
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <Container className='c5con' fluid  style={{ marginTop: "5rem",backgroundColor:'#103E35' }}>
    <Row>
      <h4 style={{textAlign:'center',color:'white',paddingTop:'3rem'}}>EXPLORE TOP TREATMENT DESTINATION AROUND THE WORLD </h4>
      <Carousel
            style={{ margintop: "2rem" }}
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            showDots={true}
            autoPlaySpeed={1000}
            transitionDuration={50}
            removeArrowOnDeviceType={["desktop","mobile","tablet","laptop"]} 
      >
        
        <Col style={{backgroudColor:'none'}} lg={4} >
          <Card
            className="c5t3 text-center zoom"
            style={{ width: "20rem", Paddingright: "3rem",marginTop:'3rem',marginLeft:'4rem',backgroundColor:'none'}}
          >
            <Card.Img variant="top" src={c5img1} />
          </Card>
        </Col>

        <Col style={{backgroudColor:'none'}}  lg={4}>
          <Card
            className="c5t3 text-center zoom"
            style={{ width: "20rem", Paddingright: "5rem",marginTop:'3rem',marginLeft:'4rem',backgroundColor:'none' }}
          >
            <Card.Img variant="top"  src={c5img2} />
          </Card>
        </Col>

        <Col style={{backgroudColor:'none'}}  lg={4}>
          <Card
            className="c5t3 text-center zoom"
            style={{ width: "20rem", Paddingright: "2rem" ,marginTop:'3rem',marginLeft:'6rem',backgroundColor:'none'}}
             >
            <Card.Img variant="top"  src={c5img3}/>
          </Card>
        </Col>

      </Carousel>
      <h4 style={{textAlign:'center',color:'white',paddingTop:'3rem'}}>View all Destinations </h4>
    </Row>
  </Container>
  )
}


export default Components05;