import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Four from '../Images/06.png';
import Five from '../Images/07.jpg';
import Six from '../Images/08.jpg';
import Seven from '../Images/09.jpg';
import Image from '../Images/03.jpg';
import Imageone from '../Images/05.jpg';
import Imagetwo from '../Images/04.webp';
import {Link} from 'react-router-dom';
import Eight from '../Images/11.webp';
import Nine from '../Images/12.jpg';
import Ten from '../Images/13.webp';
import Eleven from '../Images/14.jpg';
import Twelve from '../Images/15.jpg';

function Services() {
  return (
    <div style={{backgroundColor:"#51643D",backgroundSize:'cover'}}>

<Row>
      <Col>
      <h1 className='service'><b>Services</b></h1>
      
      </Col>
      </Row>

      <div className='design2'>

<Container>

  
  <Row>

  <center>
  <h1 style={{marginTop:50,paddingBottom:40}}>
    The gain insights,advice and tools to achieve
     <br/>
     your mission-critical priorities
  </h1></center>

    <Col style={{paddingRight:25}}>
    
    <img src={Image} style={{width:400,}} className='design3'/><br/><br/>
    <h1>Bussiness</h1>
    Over the years they’ve proven that their
    delivery is fast and stable.
    <br/><br/>
    <button className='learn'><Link to='about' className='more'>Learn more</Link></button>
    </Col>

    <Col style={{paddingRight:25}}>

    <img src={Imageone} style={{width:400,height:380}} className='design3'/><br/><br/>
    <h1>Bussiness</h1>
    Over the years they’ve proven that their
    delivery is fast and stable.
    <br/><br/>
    <button className='learn'><Link to='about' className='more'>Learn more</Link></button>
    </Col>

    <Col style={{paddingRight:25}}>

    <img src={Imagetwo} style={{width:400,height:380}} className='design3'/><br/><br/>
    <h1>Bussiness</h1>
    Over the years they’ve proven that their
    delivery is fast and stable.
    <br/><br/>
    <button className='learn'><Link to='about' className='more'>Learn more</Link></button>
    </Col>
  </Row>
</Container>

</div>
<div className='design4'>
  <Row>
    <Col style={{marginTop:50,paddingLeft:150}}>
    WHY CHOOSE US ?
    <br/><br/>
    <h1>We increase our clients'<br/>
topline by optimizing their<br/>
growth 
</h1>
<br/>
<h4>Tons of pre-made sections</h4><br/>
Combine sections from Olla's vast component library and create<br/>beautiful.

<br/><br/>

<h4>Complete CMS integration</h4>
<br/>

Facility ac eget ,auris nulla enium a diam Posuere vel eleifend augue<br/>lagoreet non praesent ultrics.

<br/><br/>

<h4>Stellar after sales support</h4>
<br/>
Facility ac eget ,auris nulla enium a diam Posuere vel eleifend augue<br/>lagoreet non praesent ultrics.

    </Col>

    <Col style={{marginTop:100,paddingRight:60}}>
    <Carousel>
      <Carousel.Item>
      <img src={Four} width="800" height="500" style={{borderRadius:10}}/> 
        <Carousel.Caption>
         
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={Five} width="800" height="500"/> 
        <Carousel.Caption>
         
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Six} width="800" height="500"/>     
       
        <Carousel.Caption>
          
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
  </Row>

</div>

<div style={{backgroundColor:'#EBE5D0',paddingBottom:50,backgroundSize:'cover'}}>
  <h3 style={{paddingLeft:50,marginBottom:40}}>Top Stories</h3>

<Row>

<Col style={{paddingLeft:50,}}>
<img src={Eight} style={{width:400,height:400}}/>
<Row>
  <Col style={{backgroundColor:'#EBE5D0',marginTop:20}}>
  <h1>Bussiness Strategy</h1>
Because they build a relationship that's based <br/>on trust. Over the years they've 
 proven that their<br/> delivery is fast and stable
</Col>
</Row>

</Col>

<Col>
<img src={Nine}style={{width:400,height:400}}/>

<Row>
  <Col style={{backgroundColor:'#EBE5D0',marginTop:20}}>
  <h1>Bussiness Strategy</h1>
Because they build a relationship that's based <br/>on trust. Over the years they've 
 proven that their<br/> delivery is fast and stable
</Col>

</Row>
</Col>

<Col>
<img src={Ten}style={{width:400,height:400}}/>
<Row>
  <Col style={{backgroundColor:'#EBE5D0',marginTop:20}}>
  <h1>Bussiness Strategy</h1>
Because they build a relationship that's based <br/>on trust. Over the years they've 
 proven that their<br/> delivery is fast and stable
</Col>
</Row>

</Col>
</Row>
       
  </div>
<div style={{backgroundColor:'#EBE5D0'}}>
<Container>
  <Row>
    <Col style={{backgroundColor:'#51643D',height:300}}>
    
    <center> 
    <h1 style={{marginTop:50,color:'white'}}>"Life is very short and what we have to do must <br/>
         be done in the now.Combine sections from Olla's <br/>vast component library and create beautiful."</h1> 
<br/>
         <h4 style={{color:'yellow',paddingBottom:50}}>- Ameer Alex</h4>
         </center>                  
    </Col>
  </Row>
</Container>
<br/><br/>
</div>

<div style={{backgroundColor:'#EBE5D0'}}>

<Container>

  <Row >
<center>
  Latest Blog<br/>
  <h1>Tips & Tricks </h1>
</center>
    <Col >
    <img src={Eleven} style={{width:600,height:350,marginTop:50}}/><br/><br/>
    <a href="#" style={{color:'black',textDecoration:'none'}}>
      <h2>
        <b>
      We help leading organisations succeed <br/>with their most critical
      </b>
      </h2>
      </a>
      <br/>
      29 Jan 2024
    </Col>

    <Col>
    <img src={Twelve} style={{width:600,height:350,marginTop:50}}/><br/><br/>
    <a href="#" style={{color:'black',textDecoration:'none'}}>
      <h2>
        <b>
      We help leading organisations succeed <br/>with their most critical
      </b>
      </h2>
      </a>
      <br/>
      29 Jan 2024
      <br/><br/><br/><br/><br/><br/>
    </Col>
  </Row>
</Container>
</div>

    </div>
  )
}

export default Services