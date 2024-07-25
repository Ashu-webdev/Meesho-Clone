import React, { useState } from 'react';
import OtpVerification from './OtpVerification'; 
import './signup.css';
import './navbar' ;
import Navbar from './navbar';
// import './navbar.css';

function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [showOtpVerification, setShowOtpVerification] = useState(false);

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      console.log('Phone number:', phoneNumber);
      setError('');
      setShowOtpVerification(true); 
    } else {
      setError('Please enter a valid 10-digit phone number.');
    }
  };
  return(
    <>
    <Navbar/>
<div className="container">
      {showOtpVerification ? (
        <OtpVerification phoneNumber={phoneNumber} />
      ) : (
        <div>
          <div className="offer-card">
            <img 
              src="https://images.meesho.com/images/marketing/1661417516766.webp" 
              alt="offer" 
              className="offer-image" 
            />
          </div>
          <h2>Sign Up to view your profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="country" style={{marginLeft:'50px'}}>Country</label>
              <div className="input-group">
                <span className="input-group-text" style={{color:'black',fontSize:'14px',height:'39px'}}>IN+91</span>
                <input 
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={phoneNumber}
                  onChange={handleChange}
                  required
                  pattern="\d{10}"
                 placeholder='Enter your phone number' 
                />
                {error && <div className="error-message">{error}</div>}
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{width:'300px'}}>
              Continue
            </button>
          </form>
          <div className='privacy'><p>By continuing,you agree to Meesho's</p></div>
          <div className='policy'><p style={{color:'purple'}}>Terms & Conditions <span style={{color:'gray'}}>and</span>  Privacy Policy</p></div>

      
        </div>
      )}
    

    </div>
    </>
    
    
  
);
}

export default SignUp;
