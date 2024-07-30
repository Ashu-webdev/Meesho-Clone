// import React, { useState } from 'react';
// import OtpVerification from './OtpVerification'; 
// import './signup.css';
// import './navbar' ;
// import Navbar from './navbar';
// // import './navbar.css';

// function SignUp() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [error, setError] = useState('');
//   const [showOtpVerification, setShowOtpVerification] = useState(false);

//   const handleChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (phoneNumber.length === 10) {
//       console.log('Phone number:', phoneNumber);
//       setError('');
//       setShowOtpVerification(true); 
//     } else {
//       setError('Please enter a valid 10-digit phone number.');
//     }
//   };
//   return(
//     <>
//     <Navbar/>
// <div className="container712">
//       {showOtpVerification ? (
//         <OtpVerification phoneNumber={phoneNumber} />
//       ) : (
//         <div>
//           <div className="offer-card745">
//             <img 
//               src="https://images.meesho.com/images/marketing/1661417516766.webp" 
//               alt="offer" 
//               className="offer-image789" 
//             />
//           </div>
//           <h2>Sign Up to view your profile</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group7120">
//               <label htmlFor="country" style={{marginLeft:'50px'}}>Country</label>
//               <div className="input-group7850">
//                 <span className="input-group-text812" style={{color:'black',fontSize:'14px',height:'39px'}}>IN+91</span>
//                 <input 
//                   type="tel"
//                   className="form-control897"
//                   id="phone"
//                   value={phoneNumber}
//                   onChange={handleChange}
//                   required
//                   pattern="\d{10}"
//                  placeholder='Enter your phone number' 
//                 />
//                 {error && <div className="error-message8200">{error}</div>}
//               </div>
//             </div>
//             <button type="submit" className="btn btn-primary8100" style={{width:'300px'}}>
//               Continue
//             </button>
//           </form>
//           <div className='privacy910'><p>By continuing,you agree to Meesho's</p></div>
//           <div className='policy920'><p style={{color:'purple'}}>Terms & Conditions <span style={{color:'gray'}}>and</span>  Privacy Policy</p></div>

      
//         </div>
//       )}
    

//     </div>
//     </>
    
    
  
// );
// }

// export default SignUp;

import React, { useState } from 'react';
import OtpVerification from './OtpVerification';
import Navbar from './navbar';

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

  const styles = {
    bodyHtml: {
      width: '100%',
      height: '118vh',
      margin: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(244, 231, 233)',
    },
    container712: {
      maxWidth: '400px',
      padding: '0.5px',
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      height: '100vh',
      position: 'relative',
      marginTop: '50px',
    },
    privacy910: {
      display: 'flex',
      marginLeft: '80px',
      marginTop: '10px',
      color: 'gray',
      fontSize: 'small',
      fontWeight: 'bold',
    },
    policy920: {
      display: 'flex',
      marginLeft: '70px',
      marginTop: '-30px',
      padding: '0px',
      fontSize: 'small',
      fontWeight: 'bold',
      paddingTop: '5px',
    },
    offerCard745: {
      width: '400px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    offerImage789: {
      width: '400px',
      height: 'auto',
      borderRadius: '10px 10px 0 0',
    },
    h2: {
      marginTop: '10px',
      fontWeight: 'bold',
      color: 'black',
    },
    formGroup7120: {
      marginBottom: '1rem',
      textAlign: 'left',
    },
    inputGroup7850: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '50px',
    },
    inputGroupText812: {
      fontSize: '14px',
      backgroundColor: 'white',
      border: '1px solid black',
      borderRight: 'none',
      padding: '0px',
      height: '29px',
      borderLeft: 'none',
      borderTop: 'none',
    },
    formControl897: {
      flexGrow: '1',
      color: 'white',
      border: '1px solid black',
      height: '60px',
      width: '180px',
      marginBottom: '-7px',
      marginLeft: '18px',
      marginRight: '130px',
      fontSize: '19px',
    },
    inputGroup7850Input: {
      paddingLeft: '15px',
      border: '1px solid black',
      marginLeft: '18px',
      width: '225px',
      height: '29px',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottomWidth: '1px',
    },
    btnPrimary8100: {
      backgroundColor: 'purple',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '40px',
      width: '300px',
    },
    errorMessage8200: {
      color: 'red',
      fontSize: '14px',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.bodyHtml}>
      <Navbar />
      <div style={styles.container712}>
        {showOtpVerification ? (
          <OtpVerification phoneNumber={phoneNumber} />
        ) : (
          <div>
            <div style={styles.offerCard745}>
              <img
                src="https://images.meesho.com/images/marketing/1661417516766.webp"
                alt="offer"
                style={styles.offerImage789}
              />
            </div>
            <h2 style={styles.h2}>Sign Up to view your profile</h2>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup7120}>
                <label htmlFor="country" style={{ marginLeft: '50px' }}>
                  Country
                </label>
                <div style={styles.inputGroup7850}>
                  <span style={styles.inputGroupText812}>IN+91</span>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handleChange}
                    required
                    pattern="\d{10}"
                    placeholder="Enter your phone number"
                    style={styles.inputGroup7850Input}
                  />
                  {error && <div style={styles.errorMessage8200}>{error}</div>}
                </div>
              </div>
              <button type="submit" style={styles.btnPrimary8100}>
                Continue
              </button>
            </form>
            <div style={styles.privacy910}>
              <p>By continuing, you agree to Meesho's</p>
            </div>
            <div style={styles.policy920}>
              <p style={{ color: 'purple' }}>
                Terms & Conditions <span style={{ color: 'gray' }}>and</span> Privacy Policy
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
