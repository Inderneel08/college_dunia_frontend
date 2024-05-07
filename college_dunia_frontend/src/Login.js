import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './App.css';
import { SocialIcon } from 'react-social-icons'



function Login({show,handleClose})
{
    return (
        <>
            <Modal show={show} onHide={handleClose} style={{ height:'700px' }} size="lg" centered>
                <Modal.Header closeButton>
                </Modal.Header>

                <div style={{ display:'flex',flexDirection:'row' }}>
                    <Modal.Body style={{backgroundColor: '#013d62'}}>
                        <h3 style={{ color:'#f6bb43' }}>Why Sign up?</h3>
                        <ul style={{ color:'white' }}>
                            <li>Exclusive deals</li>
                            <li>More Savings</li>
                            <li>Over 50 Stores</li>
                            <li>Over 100 Categories</li>
                        </ul>

                        <div style={{ backgroundImage: 'url(https://cdn.zoutons.com/images/common/login_bg.png)',backgroundRepeat:'no-repeat',height:'300px'}}>
                        </div>

                    </Modal.Body>

                    <Modal.Body style={{ backgroundColor: 'white'}}>
                    
                    <br />

                    <div className="login_signup" style={{display:'flex',flexDirection:'row',justifyContent:'space-around',height:'10%' }}>
                        <div className='login' style={{display:'flex',alignItems:'center',color:'#f6bb43' }}><h5>LOGIN</h5></div>
                        <div className='hash' style={{display:'flex',alignItems:'center',color:'#f6bb43' }}><h5>|</h5></div>
                        <div className='signup' style={{display:'flex',alignItems:'center',color:'#f6bb43' }}><h5>SIGNUP</h5></div>
                    </div>

                    <br />

                    <input type="email" className="form-control" name="email" required minLength="3" placeholder='Email'/>

                    <br />

                    <input type="password" className="form-control" name="password" required minLength="3" placeholder='Password'/>
                    
                    <br />

                    <div className="block" style={{ display:'flex',justifyContent:'space-between' }}>
                        <div className="remeberCheckbox" style={{ display:'flex',flexDirection:'row',width:'40%' }}>
                            <input type="checkbox" id="remember" name="remember" value="remember" />
                            <label htmlFor="remember" style={{ marginLeft:'5%',color:'#a9a9b6' }}> Remember me </label>
                        </div>
                        <a href="" style={{ textDecoration:'none',color:'#a9a9b6' }}> Forgot Your Password? </a>
                    </div>
                    
                    <br />

                    <button type="button" className="btn btn-primary form-control">Login</button>
                    
                    <br />

                    <hr />

                    <button type="button" className="btn btn-raised form-control" style={{height:'10%' }}> <SocialIcon url='www.google.com' style={{ height:'90%', marginRight:'1%'}}/> <span style={{ color:'#898a90', marginLeft:'5%' }}> LOGIN WITH GOOGLE </span>  </button>

                    <button type="button" className="btn btn-raised btn-primary form-control" style={{height:'10%' }}> <SocialIcon url='www.facebook.com' style={{ height:'90%', marginRight:'1%'}}/> <span style={{ color:'#fff', marginLeft:'5%' }}> LOGIN WITH FACEBOOK </span>  </button>

                    </Modal.Body>
                </div>                
                

            </Modal>
        </>
      );
}





export default Login;