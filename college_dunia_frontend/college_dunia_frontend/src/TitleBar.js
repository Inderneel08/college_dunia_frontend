import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <span ref={ref} onClick={onClick}>
        {children}
    </span>
));

function TitleBar()
{
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Navbar expand="lg" className="navbar" style={{ position:'absolute', width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>
                <Container style={{width:'80%'}}>
                    <Navbar.Brand as={Link} to="/">
                        <img src="./zoutons.com_.png" style={{height:'100%', width:'100%'}}></img>
                    </Navbar.Brand>
                    <div className="ml-auto" style={{display:'flex',alignItems:'center',width:'30%',justifyContent:'space-evenly' }}>
                        <span id="login" className="btn btn-big btn-primary" style={{ backgroundColor:'#3baeda',padding:'10px 30px',borderRadius:'30px' }}>
                            Login
                        </span>

                        <Dropdown  show={isHovered}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            <Dropdown.Toggle id="dropdown" as={CustomToggle}>
                            <span id="country_header1" className="btn btn-big" style={{backgroundColor:'#fff',borderRadius:'30px' }}>
                                <span style={{ display:'flex' ,alignItems:'center',padding:'2px 5px'}}>
                                    <span style={{ marginRight:'10px',color:'#247cd5' }}>INDIA</span>
                                    <img src="https://cdn.countryflags.com/thumbs/india/flag-round-250.png" style={{ height:'25px' }} alt="India" />
                                    <span className="down_arrow" style={{ color:'#247cd5', marginLeft:'2px' }}>⌄</span> 
                                </span>
                            </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="https://zouton.com/" style={{ display:'flex', justifyContent:'space-evenly' }}>
                                    <span style={{color:'#247cd5' }}>USA</span>
                                    <img src="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png" style={{ height:'25px' }} alt="India" />
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="https://zoutons.ae/" style={{ display:'flex', justifyContent:'space-evenly' }}>
                                    <span style={{color:'#247cd5' }}>UAE</span>
                                    <img src="https://cdn.countryflags.com/thumbs/united-arab-emirates/flag-round-250.png" style={{ height:'25px' }} alt="India" />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Container>
                
            </Navbar>

            <Container fluid style={{ position:'absolute',top:'10%' }}>
                <Row>
                    <Col style={{ color:'white',display:'flex', justifyContent:'center',textDecoration:'none' }} as={Link} to="/">HOME</Col>
                    <Col style={{ color:'white',display:'flex', justifyContent:'center' }}>CATEGORIES</Col>
                    <Col style={{ color:'white',display:'flex', justifyContent:'center' }}>STORES</Col>
                    <Col style={{ color:'white',display:'flex', justifyContent:'center' }}>TOP COUPONS</Col>
                    <Col style={{ color:'white',display:'flex', justifyContent:'center' }}>FEATURED COUPONS</Col>
                    <Col style={{ color:'white',display:'flex', justifyContent:'center' }}>NEWS</Col>
                </Row>
            </Container>

            <Container fluid  style={{ position:'absolute',top:'16%',display:'flex',justifyContent:'center',alignItems:'center' , flexDirection:'column' }}>
                <h3 style={{ color:'white' }}>Find the best deals today in India</h3>
                <form method="get" action="/nc/search" style={{width:'45%',marginTop:'0.5%',height:'50px'}}> 
                    <input type="text" id="search_input" autocomplete="off" name="term" placeholder="Search for coupons, deals, stores etc." style={{ height:'100%',width:'70%',backgroundColor: 'rgba(218, 218, 218,0.5)',border:'none',padding:'10px 50px',borderRadius:'50px 0 0 50px',color:'#fff' }} /> <button type="button" value="SEARCH" style={{ height:'100%',marginLeft:'-0.6%',width:'29.5%',borderRadius:'0 50px 50px 0',backgroundColor:'#3baeda',border:'none',color:'#fff'}}>SEARCH</button> 
                </form>
            </Container>

            <img className="img-responsive lazyloaded" data-src="https://cdn.zoutons.com/images/home/biscuit_new.jpg" alt="home" src="https://cdn.zoutons.com/images/home/biscuit_new.jpg" style={{ height:'100%',width:'100%' }}></img>

        </>

  );
}





export default TitleBar;