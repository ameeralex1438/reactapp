import React from 'react'
import './body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BsFillTelephoneFill } from "react-icons/bs";
import image5 from '../Images/17.jpg';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";




function Contact() {
  return (
    <div >
      <div style={{backgroundColor:"#51643D",backgroundSize:'cover'}}>
    <Row>
    <Col>
    <h1 className='contact'><b>Contact Us</b></h1>
    
    </Col>
    </Row> 
    </div>
    
    <div style={{paddingTop:100}}>
      <Container>

        <Row style={{backgroundColor:'#51643D'}}>

          <Col style={{padding:50}}>
          <img src={image5} width={600} height={400}/>
          </Col>

          <Col style={{color:'white'}}>
          <h1 style={{paddingTop:30}}>GET IN TOUCH</h1><br/><br/>
          <p style={{textAlign:'justify'}}>Because they build a relationship that's based
                on trust. Over the years they've<br/> proven that their
                delivery is fast and stable</p>
                <br/><br/>
                 <FaMapMarkerAlt style={{paddingRight:10,fontSize:25,color:'#F3D955'}}/>17° 44' 0" North, 83° 19' 0" East and its original name 
                 is Maddilapālem.<br/><br/>
                 <BsFillTelephoneFill style={{paddingRight:10,fontSize:30 ,color:'#F3D955'}}/>125-711-811 | 125-668-886
                 <br/><br/>
                 <IoIosMail style={{paddingRight:10,fontSize:40,color:'#F3D955'}}/> support.alex@gmail.com
                 <br/>
                 <FaFacebookF style={{fontSize:20,marginTop:20,marginRight:10}}/>
           <TbBrandTwitterFilled style={{fontSize:20,marginTop:20,marginRight:10}}/>
           <IoLogoWhatsapp style={{fontSize:20,marginTop:20,marginRight:10}}/>
          <FaInstagram style={{fontSize:20,marginTop:20,marginRight:10}}/>
         
          </Col>

        </Row>
      </Container>
    </div>
    <div style={{paddingTop:150,paddingBottom:100}}>
      <Container>
        <Row>
          <h1>LEAVE A MESSAGE</h1><br/><br/>

          <ul>
              <li><input className='leave' style={{borderBottom:'1px solid black',paddingRight:20 }} type="text" placeholder="Enter Name"/></li>
              <li><input className='leave' style={{borderBottom:'2px solid black' }} type="text" placeholder="Enter Email"/></li>
              <li><input className='leave' style={{borderBottom:'2px solid black' }} type="text" placeholder="Website"/></li>
             

          </ul>
          <input className='leave1' style={{borderBottom:'2px solid black'}} type="text" placeholder="message"/>
          
        </Row>
      </Container>
      <button className="send" style={{marginLeft:150,marginTop:50}}>Send</button>
    </div>


    <div backgroundColor={'#EBE5D0'}>
      <Container>
        <Row>
          <Col style={{marginTop:30,display:'inline-flex',marginBottom:40}}>
          <FaMapMarkerAlt className="map" style={{fontSize:30,marginRight:20,backgroundColor:'#51643D',width:200,height:120,padding:30,borderRadius:'100%',color:'white'}}/><span style={{color:'black',fontSize:20,marginTop:10}}>17° 44' 0" North, 83° 19' 0" East and its original name is Maddilapālem.</span>
                 
          </Col>

          <Col style={{marginTop:30,display:'inline-flex',marginBottom:40}}>
          <FaMapMarkerAlt  style={{fontSize:30,marginRight:20,backgroundColor:'#51643D',width:170,height:120,padding:30,borderRadius:'100%',color:'white'}}/><span style={{color:'black',fontSize:20,marginTop:25}}>125-711-811 | 125-668-886  support.alex@gmail.com</span>
          </Col>

          <Col style={{marginTop:60,marginBottom:40}}>

          <button classname="icon" style={{backgroundColor:'#51643D',width:200,height:50,borderRadius:20,float:'right'}}>

          <FaFacebookF style={{fontSize:20,marginRight:10,color:'white'}}/>
           <TbBrandTwitterFilled style={{fontSize:20,marginRight:10,color:'white'}}/>
           <IoLogoWhatsapp style={{fontSize:20,marginRight:10,color:'white'}}/>
          <FaInstagram style={{fontSize:20,marginRight:10,color:'white'}}/>
         

          </button>
          </Col>
        </Row>
      </Container>
    </div>

    </div>
  )
}

export default Contact