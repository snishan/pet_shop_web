import React,{useState,useEffect} from 'react';
import PetIcon from "../assest/images/pet-shop-icon.png"
import Login from './loginModal';
import SignUp from './signupModal';
import Cart from './cart';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isLogin, seIsLogin] = useState(false);
  const [name, setName] = useState('');
  const loginStatus= localStorage.getItem('userLogin')

  useEffect(() => {
   if (loginStatus !==null) {
    var myObj = JSON.parse(loginStatus);
    let name = myObj.name.split(/\s+/);
    setName(name[0])
    seIsLogin(true)
   }else{
    seIsLogin(false)
    setName('')
   }
  }, [loginStatus])
  


  const handleClose = () => {
    setShow(false)
  };
  const handleLogin=()=>{
    setShow(true)
  }
  const handleCloseSignUp = () => {
    setShowSignUp(false)
  };
  const handleSignUp=()=>{
    setShowSignUp(true)
  }
  const handleCart=()=>{
    setShowCart(true)
  }
  const handleCloseCart = () => {
    setShowCart(false)
  };
  const logout=()=>{
    localStorage.removeItem('userLogin')
    navigate('/')
    window.location.reload();
  }
  return (
    <div className="topnav">
    <div className="search-line">
      <a href="#" onclick="javascript:play()">
        <audio id="audio" src="assets/sounds/bark.wav"></audio>
        <picture>
          <source media="(min-width: 1050px)" srcset={PetIcon} />
          <img id="logo" src={PetIcon} alt="site-logo" width="80px" height="80px" />
        </picture>
      </a>
      <input type="text" className="search-form" />
      <span className="input-text" onclick="sorry()"><i className="fa fa-search"></i></span>
    </div>
    <div className="account-menu">
      <ul>
        <li><a type='button' onClick={()=>handleCart()}><i className="fa fa-shopping-cart"></i>My Cart</a></li>
        {isLogin?'':<li><a type='button' onClick={()=>handleSignUp()}>Sign Up</a></li>}
        {isLogin? <li>{name}<Icon className='logout-icon mx-2' onClick={()=>logout()} icon="mdi:logout" /></li>:<li><a type='button' onClick={()=>handleLogin()}>Log In</a></li>}
        {/* <li>Sanadun<Icon className='logout-icon mx-2' onClick={()=>logout()} icon="mdi:logout" /></li> */}
      </ul>
    </div>
    <Login show={show} handleClose={handleClose}/>
    <SignUp showSignUp={showSignUp} handleCloseSignUp={handleCloseSignUp}/>
    <Cart showCart={showCart} handleCloseCart={handleCloseCart} />
  </div>
  );
};

export default Header;