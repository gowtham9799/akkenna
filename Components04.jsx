import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import c4img1 from '../Akkenna/images/c4img1.png';
import c4img2 from '../Akkenna/images/c4img2.png';
import c4img3 from '../Akkenna/images/c4img3.png';
import c4img4 from '../Akkenna/images/c4img4.png';
import c4img5 from '../Akkenna/images/c4img5.png';
import c4img6 from '../Akkenna/images/c4img6.png';

function Components04() {

    const product = [
        {
        name:"Featured residential Center",
        image:c4img1,
        text:"Lorem Ipsom Color Sit Amit",
        content:" Featured Residancial Centers Featured Residancial Centers  Featured Residancial Centers   ",
        id:1
        },
        {
          name:"Featured residential Center",
          image:c4img2,
          text:"Lorem Ipsom Color Sit Amit",
          content:" Featured Residancial Centers Featured Residancial Centers  Featured Residancial Centers   ",
          id:2
          },
        {
            name:"Featured residential Center",
          image:c4img3,
          text:"Lorem Ipsom Color Sit Amit",
          content:" Featured Residancial Centers Featured Residancial Centers  Featured Residancial Centers ",
          id:3
          },
          {
            name:"Featured residential Center",
            image:c4img4,
            text:"Lorem Ipsom Color Sit Amit",
            content:" Featured Residancial Centers Featured Residancial Centers  Featured Residancial Centers ",
            id:4
            },
            {
                name:"Featured residential Center",
              image:c4img5,
              text:"Lorem Ipsom Color Sit Amit",
              content:" Featured Residancial Centers Featured Residancial Centers  Featured Residancial Centers ",
              id:4
              },
              {
                name:"Featured residential Center",
                image:c4img6,
                text:"Lorem Ipsom Color Sit Amit",
                content:" Featured Residancial Centers Featured Residancial Centers  Featured Residancial Centers ",
                id:5
                } 
               
        ]
        

  return (
<Container>
    <Row>
        <Col>
        <h4 className='c4text1' style={{fontFamily:'poppins',textAlign:'center',fontWeight:'600',fontSize:'30px',paddingTop:'50px'}}>TREATMENT METHOD</h4>
        <div className='d-flex'>
            <ul className='d-flex c4text1' style={{paddingTop:'25px'}} >
                <ol className='c4text1' style={{fontFamily:'poppins',paddingLeft:'50px'}}>Treatment For Adolescent Rehabs</ol>
                <ol className='c4text1' style={{fontFamily:'poppins',paddingLeft:'50px'}}>Non 12 Steps</ol>
                <ol className='c4text1' style={{fontFamily:'poppins',paddingLeft:'50px'}}>Depression Treatment</ol>
                <ol className='c4text1' style={{fontFamily:'poppins',paddingLeft:'50px'}}>Eading Disorder tretment</ol>
                <ol className='c4text1' style={{fontFamily:'poppins',paddingLeft:'50px'}}>Asia Rehab Center</ol>
            </ul>
        </div>
        </Col>
    </Row>




<div className='d-flex c4div2'>
{product.map((pro) => ( 
    <Card className='d-flex c4div1' style={{width:'60%'}} >
      <Card.Img variant="top" src={pro.image}/><Card.Body>
        <Card.Title >{pro.name}</Card.Title>
        <Card.Text>{pro.text} </Card.Text>
        <Card.Text>{pro.content}</Card.Text>
       </Card.Body>
    </Card>
        ))}
</div>
       
<Button  style={{borderRadius:'0px',marginLeft:'33rem',marginTop:'3rem',width:'18%'}} className="textAlign:'center c4but" variant="success">view all</Button>

</Container>
  )
}

export default Components04;