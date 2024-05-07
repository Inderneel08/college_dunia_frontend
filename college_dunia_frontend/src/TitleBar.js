import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from 'react-icons/bs'; 
import './App.css';
import Button from 'react-bootstrap/Button';
import Login from './Login';

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <span ref={ref} onClick={onClick}>
            {children}
        </span>
    ));

    const backgroundImages = [
        {url: './Shri1642233244.jpeg' , description: 'Indian Institute Of Management, Ahmedabad'},
        {url: './Indian1642232499.jpeg', description:'Indian Institute Of Information Technology, Roorkee'},
        {url: './Indian1642232971.jpeg', description: 'Shri Ram College of Commerce, New Delhi'}
    ];

    const collegeList = [
        {url:'./images/1443180014IIT_New.jpg', description:'Best BTech colleges in India',number:4188,to:'https://collegedunia.com/btech-colleges'},
        {url:'./images/1447924905ENGINEERING_NEW.jpg', description:'Best BTech colleges in Pune',number:111,to:'https://collegedunia.com/btech/pune-colleges'},
        {url:'./images/1485941210cvr1.png', description:'Best BTech colleges in Bangalore',number:122,to:'https://collegedunia.com/btech/bangalore-colleges'},
        {url:'./images/1507718984cvr.png', description:'Best BTech colleges in Hyderabad',number:127,to:'https://collegedunia.com/btech/hyderabad-colleges'},
        {url:'./images/1509430807cover (1).jpg',description:'Best BTech colleges in Mumbai',number:43,to:'https://collegedunia.com/btech/mumbai-colleges'},
        {url:'./images/1509430807cover (2).jpg',description:'Best BTech colleges in Chennai',number:115,to:'https://collegedunia.com/btech/chennai-colleges'},
        {url:'./images/1509430807cover.jpg',description:'Best BTech colleges in Coimbatore',number:70,to:'https://collegedunia.com/btech/coimbatore-colleges'},
        {url:'./images/1601467085Cover.jpg',description:'Best Private BTech colleges in India',number:3490,to:'https://collegedunia.com/btech/private-colleges'},
        {url:'./images/14973308071443084987AMITYNOIDANEW.jpg', description:'Best BTech colleges in Tamil Nadu',number:614,to:'https://collegedunia.com/btech/tamil-nadu-colleges'},
        {url:'./images/1489583668cvr.png',description:'Best BTech colleges in Karnataka',number:270,to:'https://collegedunia.com/btech/karnataka-colleges'},
        {url:'./images/15038956701443098931NITSurathkalNew.jpg',description:'Best BTech colleges in Jabalpur',number:20,to:'https://collegedunia.com/btech/jabalpur-colleges'}
    ];

function TitleBar()
{
    const [isHovered, setIsHovered] = useState(false);
    
    const [show, setShow] = useState(false);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex+1)%backgroundImages.length);
        },2500);

        return () => clearInterval(intervalId);
    },[]);

    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }

    return (
        <>
            <Navbar expand="lg" className="navbar" style={{ position:'absolute', width:'100%'}}>
                {/* backgroundColor:'rgba(0,0,0,0.5)' */}
                <Container fluid style={{ position:'relative' }}>
                    {/* <div className="gradient-overlay" style={{ position: 'absolute',top: '0',left: '0', width: '100%', height: '100%',backgroundImage: 'linear-gradient(to top, black, transparent)'}}></div> */}

                    <Navbar.Brand as={Link} to="/">
                        <img src="./zoutons.com_.png" style={{height:'100%', width:'100%'}}></img>
                    </Navbar.Brand>
                    <div className="ml-auto" style={{display:'flex',alignItems:'center',width:'30%',justifyContent:'end'}}>
                        <Button variant="primary" style={{ backgroundColor:'#3baeda',padding:'10px 30px',borderRadius:'30px'}} onClick={handleShow}>
                            Login
                        </Button>

                        {/* <Dropdown  show={isHovered}
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
                        </Dropdown> */}
                    </div>
                </Container>
                
            </Navbar>

            <Container id="containers" fluid style={{ position:'absolute',top:'11%' }}>
                <Row>
                    <Col style={{ color:'white',display:'flex', justifyContent:'center',textDecoration:'none',cursor:'pointer' }} as={Link} to="/">HOME</Col>
                    <Col style={{ color:'#b7b7b7',display:'flex', justifyContent:'center' }}>CATEGORIES</Col>
                    <Col style={{ color:'#b7b7b7',display:'flex', justifyContent:'center' }}>STORES</Col>
                    <Col style={{ color:'#b7b7b7',display:'flex', justifyContent:'center',textDecoration:'none',cursor:'pointer'}} as={Link} to="https://zoutons.com/top-coupons?utm_source=zoutons&utm_medium=header" onMouseEnter={(e) => {e.target.style.color = 'white'; }} onMouseLeave={(e) =>{e.target.style.color = '#b7b7b7'; }}>TOP COUPONS</Col>
                    <Col style={{ color:'#b7b7b7',display:'flex', justifyContent:'center',textDecoration:'none',cursor:'pointer' }} as={Link} to="https://zoutons.com/featured-coupons?utm_source=zoutons&utm_medium=header" onMouseEnter={(e) => {e.target.style.color = 'white'; }} onMouseLeave={(e) =>{e.target.style.color = '#b7b7b7'; }}>FEATURED COUPONS</Col>
                    <Col style={{ color:'#b7b7b7',display:'flex', justifyContent:'center',textDecoration:'none',cursor:'pointer' }} as={Link} to="https://zoutons.com/news" onMouseEnter={(e) => {e.target.style.color = 'white'; }} onMouseLeave={(e) =>{e.target.style.color = '#b7b7b7'; }}>NEWS</Col>
                </Row>
            </Container>

            <Container fluid  style={{ position:'absolute',top:'16%',display:'flex',justifyContent:'center',alignItems:'center' , flexDirection:'column',marginTop:'1%' }}>
                <h3 style={{ color:'white' }}>Find the best colleges in India</h3>
                <form method="get" action="/nc/search" style={{width:'45%',marginTop:'1.5%',height:'50px'}}> 
                    <input type="text" id="search_input" autoComplete="off" name="term" placeholder="Search for colleges, exams, courses and more.." style={{ height:'100%',width:'70%',backgroundColor: 'rgba(218, 218, 218,0.5)',border:'none',padding:'10px 50px',borderRadius:'50px 0 0 50px',color:'#fff',outline:'none',marginTop:'1px' }} /> <button type="button" value="SEARCH" style={{ height:'100%',marginLeft:'-0.6%',width:'29.5%',borderRadius:'0 50px 50px 0',backgroundColor:'#3baeda',border:'none',color:'#fff',marginTop:'1px',cursor:'context-menu'}}>SEARCH</button> 
                </form>
                <br />
                <button type="button" className="btn form-control" style={{ width:'15%',marginLeft:'28%',backgroundColor:'#ff7900' }}>Need Counselling</button>
            </Container>

            {/* <Container style={{ position:'absolute',top:'39%',marginLeft:'1%' }}>
                <Row style={{display:'flex', justifyContent:'space-between',color:'white',width:'80%',marginLeft:'20%',backgroundColor:'#f6bb43',padding:'1.2% 0.6%',borderBottom:'2px solid #efb201' }}>
                    <Col>FEATURED STORES</Col>
                    <Col style={{ marginLeft:'65%',color:'white' }} as={Link} to="https://zoutons.com/stores">VIEW ALL STORES</Col>
                </Row>
                <Row style={{ height:'300px',color:'blue',width:'80%',marginLeft:'20%' }}>
                    <Carousel prevIcon={<BsFillArrowLeftCircleFill size={40} />} nextIcon={<BsFillArrowRightCircleFill size={40}/>} indicators={false} interval={null} style={{ border:'1px solid grey' }}>
                        <Carousel.Item>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                        </Carousel.Item>

                    </Carousel>
                </Row>

            </Container> */}

            {/* <img className="img-responsive lazyloaded" data-src="https://cdn.zoutons.com/images/home/biscuit_new.jpg" alt="home" src="https://cdn.zoutons.com/images/home/biscuit_new.jpg" style={{ height:'100%',width:'100%' }}></img> */}

            <div className="block">
                <img className="image-container" src={backgroundImages[currentImageIndex].url} alt="image" style={{ height: '500px', width: '1520px' }} />
                <a href='#' style={{ position: 'absolute', top: '63%', left: '70%', color: 'white' }}>
                    {backgroundImages[currentImageIndex].description}
                </a>
            </div>

            <br />
            <br />

            <div className='topCollections' style={{ backgroundColor:'#f5f8f9' }}>
                <div className="collections">
                    <h3 style={{ marginLeft:'10%' }}>Top Collections</h3>

                    <br />

                    <div className="content" style={{ display:'flex',flexDirection:'column',justifyContent:'space-around', marginLeft:'10%',position:'relative' }}>
                        {chunkArray(collegeList, 5).map((chunk, rowIndex) => (
                            <div className="row" key={rowIndex} style={{ marginBottom:'3%' }}>
                                {chunk.map((college, colIndex) => (
                                    <div className="college" key={colIndex} style={{ height:'200px',width: '200px'}}>
                                        <div style={{ position:'relative',height:'100%', width:'100%' }}>
                                            <div className="gradient-overlay" style={{ position: 'absolute',top: '0',left: '0', width: '100%', height: '100%',backgroundImage: 'linear-gradient(to top, black, transparent)'}}></div>
                                            <img className='images' src={college.url} alt='' style={{ height: '100%', width: '100%' }}/>
                                            <p style={{ color:'#fff',position:'relative',top:'-45%',left:'10%' }}>{college.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}

                        <div className="queryForm" style={{ position:'absolute',top:'0%',left:'72%',width:'28%' }}>
                            <form action="" method="post">
                                <h5 style={{ marginLeft:'35%' }}>Query Form</h5>
                                <br />

                                <input type="text" className="form-control" name="name" required minLength="3" placeholder='Name'/>

                                <br />

                                <input type="email" className="form-control" name="email" required minLength="3" placeholder='Email'/>

                                <br />

                                <textarea name="query" id="query" cols="49" rows="10"></textarea>

                                <br />

                                <button type="button" class="btn btn-primary form-control">Submit</button>
                                <br />
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
                
                
            </div>


            <Login show={show} handleClose={handleClose}/>

            <br />


            <Outlet />
        </>

  );
}





export default TitleBar;