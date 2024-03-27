import React from 'react'
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footerlogo from '../Images/footerlogo.png';
import { FaFacebook } from "react-icons/fa6";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



function Footer() {
  return (
    <>
    <div style={{backgroundColor:'#F3D955',paddingTop:80}}>       
    <Container>
        <Row>
            <Col style={{padding:50}}>
           <img src={Footerlogo} width={250} style={{}}/>
           
            </Col>

            <Col style={{padding:30}}>
            <h4>Quick Links</h4>
            <li className='footer'>Work</li>
            <li className='footer'>Services</li>
            <li className='footer'>Products</li>
            <li className='footer'>Tips & Tricks</li>
            </Col>

            <Col style={{padding:30}}>
            <h4>Services</h4>
            <li className='footer'>Strategy & Transformation</li>
            <li className='footer'>Growth & Innovation</li>
            <li className='footer'>Leader & Change</li>
            <li className='footer'>Digitalization & IT</li>
            <li className='footer'>Operation & Efficiency</li>

            </Col>

            <Col style={{padding:30}}>
                
            <h4>Newsletter</h4><br/>
            Subscribe newsletter to get update
            
           <input className="footersearch" type="text" placeholder="Enter Your Email"/>
           <FaFacebook style={{fontSize:30,marginTop:20,marginRight:10}}/>
           <TbBrandTwitterFilled style={{fontSize:30,marginTop:20,marginRight:10}}/>
           <IoLogoWhatsapp style={{fontSize:30,marginTop:20,marginRight:10}}/>
          <FaInstagram style={{fontSize:30,marginTop:20,marginRight:10}}/>
          <FaYoutube style={{fontSize:30,marginTop:20,marginRight:10}}/>

            </Col>
            <center>Copyright ©2024 All rights reserved | This template is made with  by Alex</center>
        </Row>
    </Container>
    
    </div>
    </>
  )
}

export default Footer