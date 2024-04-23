import React from 'react'
import './Login.css'
import bgimg from './Rectangle 2758.png'
import main from './Group 427320730.png'
import box from './Rectangle 2759.png'
import arrow from './arrow-right.png'
import { useNavigate} from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };
  return (
    <div className='Login'>
      <div className='loginimg'>
        <img src={bgimg} alt="" />
        <div className='main-login'>
          <img src={main} alt="" />
        </div>
      </div>
      <div className='Login-form'>
            <button onClick={handleLoginClick} className='btn'><img src={arrow} alt="" />Back to Home</button>
        
        <h2>Create an account</h2>
        <p>Ready to dive back into your learning journey?</p>
        <form>
        <span>
        <input type="text" placeholder="First name"/>
        <input type="text" placeholder="Last name"/> <br/>
        </span>
        <input type="email" placeholder="Email address"/> <br/>
        <input type="password" placeholder="Password"/><br/>
        <input type="password" placeholder='Re-enter password'/>
        </form>
        <p><img src={box} alt="" />I agree to the Privacy policy</p>
        <p><img src={box} alt="" />I agree to the Terms and condition</p>
        <button className='btn btn-primary'>Sign up</button>
        <p>Already have an account? Sign In</p>
        
      </div>

    </div>
  )
}

export default Login