// import React from 'react';
// import './navbar.css';
// import downloadlogo from '../assets/downloadlogo.png'
// import searchlogo from '../assets/searchlogo.png'

// function Navbar() {
//   return (
//     <div className='pg12344'>
//     <div className='navbar345'>
//       <div className="nav-content336">
//         <div className="logo312">
//           <a href="#"><img src='https://www.meesho.com/assets/svgicons/meeshoLogo.svg' alt="logo" /></a>
//         </div>
//         <div className="search-bar367">
//           <input type="text"  placeholder='Try Saree, Kurti or Search by Product Code' style={{textAlign:'center'}} />
//            <img src={ searchlogo } alt="search-icon" className='searchIcon'/> 
//         </div>
//         <div className="nav-links387">
//           <div className='dropdown390'>
//             <img src={ downloadlogo } alt="download" />
//           <a href="#" className='dropbtn3905'><span>Download App</span></a>
//           <div className='dropdn-content3456'>
//             <p>Download From</p>
//             <a href="#"><img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="Google Play" style={{width:'150px'}}/></a>
//             <a href="#"><img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="App-store" /></a>
//             </div>
//             </div> 

//           <a href="#"><span>Become a Supplier</span></a>
//           <a href="#"><span>Newsroom</span></a>
//         </div>
        

//       </div>
//     </div>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import downloadlogo from '../assets/downloadlogo.png';
import searchlogo from '../assets/searchlogo.png';
import { textDecoration } from '@chakra-ui/react';

function Navbar() {
  const styles = {
    pg12344: {
      display: 'flex',
      justifyContent: 'center',
    },
    navbar345: {
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
      height: '60px',
      padding: '10px 0',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '1000',
    },
    navContent336: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
    },
    logo312: {
      marginLeft: '100px',
    },
    logoImage: {
      height: '30px',
    },
    searchBar367: {
      flex: '1',
      margin: '0 20px',
      marginRight: '100px',
      position: 'relative',
    },
    searchInput: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxSizing: 'border-box',
      marginLeft: '30px',
      height: '45px',
      fontSize: '20px',
    },
    searchIcon: {
      position: 'absolute',
      top: '16%',
      left: '14%',
      height: '40px',
      marginLeft: '50px',
      marginTop: '-90px',
      color: 'grey',
      paddingLeft: '5px',
      paddingTop: '10px',
    },
    navLinks387: {
      marginLeft: '2px',
      color: 'black',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginTop: '-10px',
    },
    navLinkSpan: {
      textDecoration: 'none',
      padding: '10px 15px 0 20px',
      display: 'inline-block',
      color: 'black',
      marginRight: '20px',
      borderRight: '2px solid gray',
      marginTop: '-10px',
    },
    dropdown390: {
      position: 'relative',
      display: 'inline-block',
    },
    dropdnContent3456: {
      position: 'absolute',
      backgroundColor: 'white',
      boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
      display: 'none',
      zIndex: '1',
    },
    dropdnContentParagraph: {
      color: 'rgb(48, 48, 48)',
      padding: '10px',
      textAlign: 'center',
    },
    dropdnContentLink: {
      color: 'white',
      padding: '5px',
      textDecoration: 'none',
    },
    dropdownImage: {
      width: '50px',
      marginTop: '-15px',
      paddingTop: '1px',
      marginRight: '-35px',
    },
    dropdnContentImage: {
      width: '150px',
      padding: '10px',
    },
  };

  return (
    <div style={styles.pg12344}>
      <div style={styles.navbar345}>
        <div style={styles.navContent336}>
          <div style={styles.logo312}>
            <a href="#">
              <img
                src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"
                alt="logo"
                style={styles.logoImage}
              />
            </a>
          </div>
          <div style={styles.searchBar367}>
            <input
              type="text"
              placeholder="Try Saree, Kurti or Search by Product Code"
              style={styles.searchInput}
            />
            <img
              src={searchlogo}
              alt="search-icon"
              style={styles.searchIcon}
            />
          </div>
          <div style={styles.navLinks387}>
            <div style={styles.dropdown390}>
              <img
                src={downloadlogo}
                alt="download"
                style={styles.dropdownImage}
              />
              <a href="#" style={styles.navLinkSpan}>
                <span>Download App</span>
              </a>
              <div style={styles.dropdnContent3456}>
                <p style={styles.dropdnContentParagraph}>Download From</p>
                <a href="#">
                  <img
                    src="https://images.meesho.com/images/pow/playstore-icon-big.png"
                    alt="Google Play"
                    style={styles.dropdnContentImage}
                  />
                </a>
                <a href="#">
                  <img
                    src="https://images.meesho.com/images/pow/appstore-icon-big.png"
                    alt="App-store"
                    style={styles.dropdnContentImage}
                  />
                </a>
              </div>
            </div>
            <a href="#" style={styles.navLinkSpan}>
              <span>Become a Supplier</span>
            </a>
            <a href="#" style={styles.navLinkSpan}>
              <span>Newsroom</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
