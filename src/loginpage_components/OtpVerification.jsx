import React from 'react';
import './OtpVerification.css';


function OtpVerification({ phoneNumber }) {
  return (
    <>
    <div className="otpcontainer412">
      <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="offer-image" style={{ width: '400px', margin: '0px auto 0px' }} />

      <div className="otp-verification-card423">
        <p style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'left' }}>Enter the OTP sent to {phoneNumber}</p>
        <p style={{ fontWeight: 'bold', textAlign: 'left' }}> <span>CHANGE NUMBER</span></p>
        <form>
          <div className="otpform-group478">
            <input
              type="number"
              className="otpform-control4890"
              id="otp"
              placeholder="Enter OTP"
              required
            />
          </div>
          <a href="https://www.meesho.com/">
            <button type="submit" className="btn btn-primary678">
              Verify
            </button>
          </a>
          <p>
            <span>Resend OTP in 35s</span>
          </p>
        </form>
      </div>
    </div>
    </>
  );
}

export default OtpVerification;