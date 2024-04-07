import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomSvg from './CustomSvg';


function TitleBar()
{
    return (
        <>
            <Navbar expand="lg" className="navbar" style={{ position:'absolute', width:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}>
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ color:'white' }}>
                        <CustomSvg />
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <img className="img-responsive lazyloaded" data-src="https://cdn.zoutons.com/images/home/biscuit_new.jpg" alt="home" src="https://cdn.zoutons.com/images/home/biscuit_new.jpg" style={{ height:'100%',width:'100%' }}></img>
        </>

  );
}





export default TitleBar;