import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Eight from '../Images/11.webp';
import Nine from '../Images/12.jpg';
import Ten from '../Images/13.webp';
import Sixteen from '../Images/16.jpg';
function Case() {
  return (
    <div style={{backgroundColor:"#51643D",backgroundSize:'cover'}}>
      <Row>
      <Col>
      <h1 className='casestudy'><b>Case Study</b></h1>
      
      </Col>
      </Row>

  <div style={{backgroundColor:'#E4E6E4'}}>

    <Container>

        <Row>

            <Col>
            <img src={Eight} style={{width:600,height:550,marginTop:50,marginBottom:50}} />
            <h1>Bussiness Strategy</h1>
Because they build a relationship that's based <br/>on trust. Over the years they've 
 proven that their<br/> delivery is fast and stable
            </Col>
            <Col>
            <img src={Nine} style={{width:600,height:550,marginTop:50,marginBottom:50}} />
            <h1>Bussiness Strategy</h1>
Because they build a relationship that's based <br/>on trust. Over the years they've 
 proven that their<br/> delivery is fast and stable
            </Col>

            
                

        </Row>
    </Container>

  </div>
  <div  style={{backgroundColor:'#E4E6E4'}}>
    <Container>
        <Row>
        <Col>
            <img src={Ten} style={{width:600,height:550,marginTop:50,marginBottom:50}} />
            <h1>Bussiness Strategy</h1>
Because they build a relationship that's based <br/>on trust. Over the years they've 
 proven that their<br/> delivery is fast and stable
            </Col>
            <Col>
            <img src={Sixteen} style={{width:600,height:550,marginTop:50,marginBottom:50}} />
            <h1>Bussiness Strategy</h1>
Because they build a relationship that's based <br/>on trust. Over the years they've 
 proven that their<br/> delivery is fast and stable
 <br/><br/>
            </Col>
           
        </Row>
    </Container>
  </div>
       

    </div>
  )
}

export default Case