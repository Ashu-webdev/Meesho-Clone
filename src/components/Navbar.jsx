import React from 'react';
import { Link } from 'react-router-dom';
import searchlogo from '../assets/searchlogo.png'
import downloadlogo from '../assets/downloadlogo.png'
import profilelogo from '../assets/profilelogo.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <>
        <div className='navbr9898'>
        <div className="nv2122">
          <div className="logo12">
             <Link to={'/'}><a><img src='https://www.meesho.com/assets/svgicons/meeshoLogo.svg'/></a></Link>
          </div>
          <div className="srh">
              <img src={searchlogo} alt='icon'/>
              <input type="searchbar" className="searchbar" placeholder="Try Saree, Kurti or Search by Product Code"></input>
          </div>
          <div className="buttons2229">
            <ul className='apdl' id='download'>
                <img src={downloadlogo} alt='img'/>
                <p>Download App</p>
                <div className='dldbox'>
                  <h2>Download App</h2>
                 <Link to='https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow'> <img src='https://images.meesho.com/images/pow/playstore-icon-big.png'/ ></Link>

                 <Link to='https://apps.apple.com/us/app/meesho-online-shopping/id1457958492'><img src='https://images.meesho.com/images/pow/appstore-icon-big.png' id='applestr'/></Link> 

                </div>
            </ul>
            <hr/>
            <Link to={'http://localhost:5173/'}><button>Become a supplier </button></Link>
            <hr/>
           <Link to='https://www.meesho.io/news'><button>Newsroom</button></Link> 
            <hr/>
            <button className='profilebtn0028'>
              <img src={profilelogo} className='btnimg11'/>
              <span>Profile</span>
              <div className="sidebar">
                <div className='sbrcnt'>
                  <h1>Hello User</h1>
                  <h4>To Access your Meesho account</h4>
               <Link to={'/login'}><button className='signinbtn' placeholder="Signup">Sign Up</button></Link>
                  <hr/>
                  <a className='order' placeholder="Login">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqY9cCs3KuA3WMQbDHuCw1prIRxfkmsy6XGw&s' />
                    <span>My order</span>
                  </a>
                  <hr/>
                  <a>Delete Account</a>
                </div>
              </div>
            </button>
          <hr/>
            <div className='addcrt'>
           <Link to={'/cart'}><button>
              <img src='https://st4.depositphotos.com/38837296/39705/v/450/depositphotos_397050998-stock-illustration-smart-cart-icon-vector-miscellaneous.jpg' />
              <p>Cart</p>
              
            </button></Link>
            </div>

          </div>
        </div>
        <hr/>
        <div className='containIt'>
        <div className="nv2">
            <div className='selection' id='sel1'>
              <span className='sp1'>Womans Ethnic</span>
              <div className='wm1'>
                <div className='cate1'>
                 <h1>‎ All Woman Ethnic</h1>
                  <p>‎ View All</p>
                </div>
                <div className='cate2'>
                 <h1> All Sarees</h1>
                  <a><p>Silk Sarees</p></a>
                  <a><p>Cotton Sarees</p></a>
                  <a><p>Georgette Sarees</p></a>
                  <a><p>Chiffon Sarees</p></a>
                  <a><p>Cotton Silk Sarees</p></a>
                  <a><p>Satin Sarees</p></a>
                  <a><p>Embroidered Sarees</p></a>       
                </div>
                <div className='cate3'>
                 <h1> Kurtis</h1>
                  <a><p>All Kurtis</p></a>
                  <a><p>Anarkali Kurtis</p></a>
                  <a><p>Rayon Kurtis</p></a>
                  <a><p>Cotton Kurtis</p></a>
                  <a><p>Embroidered Kurtis</p></a>    
                </div>
                <div className='cate2'>
                 <h1> Kurtas</h1>
                  <a><p>All Kurtas</p></a>
                </div>
                <div className='cate3'>
                 <h1> Other Ethnic</h1>
                  <a><p>Blouses</p></a>
                  <a><p>Dupattas</p></a>
                  <a><p>Lehenga</p></a>
                  <a><p>Gown</p></a>
                  <a><p>Ethnic Bottomwear</p></a>    
                </div>
              </div>
            </div>
            <div className='selection' id='sel2'>
              <span className='sp2'>Womans Western</span>
              <div className='wm2'>
                <div className='cate1'>
                 <h1>‎ Topwear</h1>
                 <a><p>‎ Tops</p></a>
                  <a><p>‎ Dresses</p></a>
                  <a><p>‎ Sweaters</p></a>
                  <a><p>‎ Silk Sarees</p></a>
                </div>
                <div className='cate2'>
                 <h1> Bottomwear</h1>
                  <a><p>Jeans</p></a>
                  <a><p>Jeggings</p></a>
                  <a><p>Palazzos</p></a>
                  <a><p>Shorts</p></a>
                  <a><p>Skirts</p></a>       
                </div>
                <div className='cate3'>
                 <h1> Innerwear</h1>
                  <a><p>Bra</p></a>
                  <a><p>Briefs</p></a>    
                </div>
                <div className='cate2' id='ct2'>
                 <h1> Sleepwear</h1>
                  <a><p>Nightsuits</p></a>
                  <a><p>Babydolls</p></a>
                </div>
              </div>
            </div>
            <div className='selection' id='sel3'>
              <span>Men</span>
              <div className='wm3'>
                <div className='cate1'>
                 <h1>Topwear</h1>
                 <a><p>ALL Tops</p></a>
                  <a><p>Tshirts</p></a>
                  <a><p>shirts</p></a>
                </div>
                <div className='cate2'>
                 <h1> Topwear</h1>
                  <a><p></p></a>
                  <a><p>Cotton Sarees</p></a>
                  <a><p>Georgette Sarees</p></a>
                  <a><p>Chiffon Sarees</p></a>
                  <a><p>Cotton Silk Sarees</p></a>
                  <a><p>Satin Sarees</p></a>
                  <a><p>Embroidered Sarees</p></a>       
                </div>
                <div className='cate3'>
                 <h1> Kurtis</h1>
                  <a><p></p></a>
                  <a><p>Anarkali Kurtis</p></a>
                  <a><p>Rayon Kurtis</p></a>
                  <a><p>Cotton Kurtis</p></a>
                  <a><p>Embroidered Kurtis</p></a>    
                </div>
                <div className='cate2'>
                 <h1> Kurtas</h1>
                  <a><p>All Kurtas</p></a>
                </div>
                <div className='cate3'>
                 <h1> Other Ethnic</h1>
                  <a><p>Blouses</p></a>
                  <a><p>Dupattas</p></a>
                  <a><p>Lehenga</p></a>
                  <a><p>Gown</p></a>
                  <a><p>Ethnic Bottomwear</p></a>    
                </div>
              </div>
            </div>
            <div className='selection' id='sel4'>
              <span>Kids</span>
              <div className='wm4'>
                <div className='cate1' id='kids'>
                 <h1>Boys and girls 2+ Years</h1>
                 <a><p>Dresses</p></a>
                </div>
                <div className='cate2' id='inf'>
                 <h1> Infant 0-2 Years</h1>
                 <a><p></p></a>
                  <a><p>Rompers</p></a>   
                </div>
                <div className='cate3'>
                 <h1> Toys & Accessories</h1>
                  <a><p>Soft Toys</p></a>
                  <a><p>Footwear</p></a>
                  <a><p>Stationery</p></a>
                  <a><p>Watches</p></a>
                  <a><p>Bags & Backpacks</p></a>    
                </div>
                <div className='cate2' id='babycr'>
                 <h1> Baby Care</h1>
                  <a><p>All Baby Care</p></a>
                </div>
              </div>
            </div>
            <div className='selection' id='sel5'>
              <span>Home & Kitchen</span>

              <div className='wm5'>
                <div className='cate3' id='kids'>
                 <h1>Home Furnishing</h1>
                 <a><p>Bedsheets</p></a>
                 <a><p>Doormats</p></a>
                 <a><p>Curtains & sheers</p></a>
                 <a><p>Cushions & covers</p></a>
                 <a><p>Mattress Protectors</p></a>

                </div>
                <div className='cate2' id='inf'>
                 <h1> Home decor</h1>
                  <a><p> All home decors</p></a>
                  <a><p>Stickers</p></a>
                  <a><p>Clocks</p></a>
                  <a><p>Showpieces</p></a>
                </div>
                <div className='cate3'>
                 <h1> Kitchen & Dining</h1>
                  <a><p>Kitchen Storage</p></a>
                  <a><p>Cookware & Bakeware</p></a> 
                </div>
              </div>


            </div>
            <div className='selection' id='sel6'>
              <span>Beauty & Health</span>
              <div className='wm6'>
                <div className='cate3' id='kids'>
                 <h1>Makeup</h1>
                 <a><p>Face</p></a>
                 <a><p>Eyes</p></a>
                 <a><p>Lips</p></a>
                 <a><p>Nails</p></a>

                </div>
                <div className='cate2' id='inf'>
                 <h1>Wellness</h1>
                  <a><p>Sanitizers</p></a>
                  <a><p>Oral care</p></a>
                  <a><p>Feminine Hygiene</p></a>
          
                </div>
                <div className='cate3'>
                 <h1> Skincare</h1>
                  <a><p>Deodrants</p></a>
                </div>
              </div>
            </div>
            <div className='selection' id='sel7'>
              <span>Jwellery & Accessories</span>
              <div className='wm7'>
                <div className='cate3' id='kids'>
                 <h1>Jewellery</h1>
                 <a><p>jewellery Set</p></a>
                 <a><p>Earrings</p></a>
                 <a><p>Mangalsutras</p></a>
                 <a><p>Studs</p></a>
                 <a><p>Bangles</p></a>
                <a><p>Necklaces</p></a>
                <a><p>Rings</p></a>
                <a><p>Anklets</p></a>
                </div>
                <div className='cate2'>
                 <h1>Women Accessory </h1>
                  <a><p>Bags</p></a>
                  <a><p>Watches</p></a>
                  <a><p>Hair Accessories</p></a>
                  <a><p>Sunglasses</p></a>
                  <a><p>Socks</p></a>
                </div>
              </div>
            </div>
            <div className='selection'>
              <span>Bags & Footwear</span>





            </div>
            <div className='selection'>
              <span>Electronics</span>



            </div>
        </div>
        </div>
    </div>
   </>
    );
}

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import searchlogo from '../assets/searchlogo.png';
// import downloadlogo from '../assets/downloadlogo.png';
// import profilelogo from '../assets/profilelogo.png';

// const Navbar = () => {
//     return (
//         <>
//             <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#fff', zIndex: 1000 }}>
//                 <div style={{ display: 'flex', flexDirection: 'row' }}>
//                     <div style={{ display: 'flex', width: '156px', marginLeft: '30px', marginTop: '15px', marginRight: '20px' }}>
//                         <Link to={'/'}>
//                             <img src='https://www.meesho.com/assets/svgicons/meeshoLogo.svg' alt="Logo" />
//                         </Link>
//                     </div>
//                     <div style={{ display: 'flex', flexDirection: 'row' }}>
//                         <img src={searchlogo} alt='icon' style={{ height: '42px', width: '50px', marginLeft: '20px', marginTop: '17px', border: '1px solid black', borderRight: 'white' }} />
//                         <input type="search" placeholder="Try Saree, Kurti or Search by Product Code" style={{ padding: '12px', marginTop: '17px', textAlign: 'left', fontWeight: 500, fontSize: '15px', width: '340px', marginLeft: '-15px', border: '1px solid black', borderLeft: 'white' }} />
//                     </div>
//                     <div style={{ display: 'flex', flexDirection: 'row' }}>
//                         <ul style={{ display: 'flex', flexDirection: 'row', height: '10px', marginRight: '10px', marginLeft: '-20px', cursor: 'pointer' }}>
//                             <img src={downloadlogo} alt='img' style={{ height: '40px' }} />
//                             <p style={{ marginTop: '-5px' }}>Download App</p>
//                             <div style={{ display: 'none', position: 'absolute', top: '100%', right: 200, backgroundColor: '#fff', border: '1px solid #ddd', padding: '30px', height: '200px', width: '200px', marginRight: '20px', marginTop: '-58px', border: '1px solid black', borderRadius: '3px', borderTop: '2px solid purple' }}>
//                                 <h2>Download App</h2>
//                                 <img src='https://images.meesho.com/images/pow/playstore-icon-big.png' alt="Playstore" />
//                                 <img src='https://images.meesho.com/images/pow/appstore-icon-big.png' alt="Appstore" style={{ marginTop: '10px' }} />
//                             </div>
//                         </ul>
//                         <hr />
//                         <Link to={'/admin'}><button style={{ marginLeft: '20px', marginRight: '10px', marginTop: '10px', border: 'none', backgroundColor: 'white', fontWeight: 550, cursor: 'pointer' }}>Become a supplier</button></Link>
//                         <hr />
//                         <button style={{ marginLeft: '20px', marginRight: '10px', marginTop: '10px', border: 'none', backgroundColor: 'white', fontWeight: 550, cursor: 'pointer' }}>Newsroom</button>
//                         <hr />
//                         <button className='profilebtn0028' style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
//                             <img src={profilelogo} alt='Profile' style={{ height: '30px' }} />
//                             <span>Profile</span>
//                             <div className="sidebar" style={{ display: 'none', position: 'absolute', top: '100%', right: 200, backgroundColor: '#fff', border: '1px solid #ddd', padding: '30px', height: '200px', width: '200px', marginRight: '20px', marginTop: '-58px', border: '1px solid black', borderRadius: '3px', borderTop: '2px solid purple' }}>
//                                 <div className='sbrcnt'>
//                                     <h1 style={{ marginTop: '-20px' }}>Hello User</h1>
//                                     <h4 style={{ marginTop: '-10px' }}>To Access your Meesho account</h4>
//                                     <Link to={'/login'}>
//                                         <button className='signinbtn' placeholder="Signup" style={{ backgroundColor: 'violet', color: 'white', padding: '5px', width: '90%', height: '30px', marginBottom: '20px', justifyContent: 'center', borderRadius: '2px', marginTop: '10px', cursor: 'pointer', border: 'none' }}>Sign Up</button>
//                                     </Link>
//                                     <hr />
//                                     <a className='order' placeholder="Login" style={{ display: 'flex', justifyContent: 'center', padding: '10px', marginTop: '10px', marginBottom: '2px', cursor: 'pointer' }}>
//                                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqY9cCs3KuA3WMQbDHuCw1prIRxfkmsy6XGw&s' alt="My Order" style={{ height: '30px' }} />
//                                         <span style={{ marginTop: '10px' }}>My order</span>
//                                     </a>
//                                     <hr />
//                                     <a style={{ cursor: 'pointer' }}>Delete Account</a>
//                                 </div>
//                             </div>
//                         </button>
//                         <hr />
//                         <div className='addcrt' style={{ height: '20px' }}>
//                             <Link to={'/cart'}>
//                                 <button style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', border: 'none', backgroundColor: 'white' }}>
//                                     <img src='https://st4.depositphotos.com/38837296/39705/v/450/depositphotos_397050998-stock-illustration-smart-cart-icon-vector-miscellaneous.jpg' alt="Cart" style={{ height: '38px', marginLeft: '-7px', marginTop: '-5px' }} />
//                                     <p style={{ marginTop: '-10px' }}>Cart</p>
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <hr />
//                 <div className='containIt' style={{ display: 'flex', borderBottom: '1px solid black', marginBottom: '7px' }}>
//                     <div className='nv2' style={{ display: 'flex', flexDirection: 'row', width: '90%', color: 'black' }}>
//                         <div className='selection' style={{ display: 'flex', padding: '10px' }}>
//                             <span style={{ cursor: 'pointer', color: 'black' }}>Womans Ethnic</span>
//                             <div className='wm1' style={{ display: 'none', flexDirection: 'row', position: 'absolute', top: '100%', left: 0, backgroundColor: '#fff', border: '1px solid #ddd', padding: '30px', height: '260px', width: '800px', marginRight: '-20px', marginTop: '-7px', borderRadius: '3px' }}>
//                                 <div className='cate1' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', height: '320px', width: '150px', marginTop: '-30px', marginLeft: '-30px' }}>
//                                     <h1 style={{ fontSize: '20px' }}>‎ All Woman Ethnic</h1>
//                                     <p style={{ cursor: 'pointer' }}>‎ View All</p>
//                                 </div>
//                                 <div className='cate2' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'whitesmoke', height: '320px', width: '170px', marginTop: '-30px' }}>
//                                     <h1 style={{ fontSize: '20px' }}> All Sarees</h1>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Silk Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Cotton Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Georgette Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Chiffon Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Cotton Silk Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Satin Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Embroidered Sarees</p>
//                                 </div>
//                                 <div className='cate3' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', height: '320px', width: '170px', marginTop: '-30px' }}>
//                                     <h1 style={{ fontSize: '20px' }}> All Kurtis</h1>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}> Anarkali Kurtis</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}> Rayon Kurtis</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Cotton Kurtis</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Embroidered Kurtis</p>
//                                 </div>
//                                 <div className='cate4' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'whitesmoke', height: '320px', width: '170px', marginTop: '-30px' }}>
//                                     <h1 style={{ fontSize: '20px' }}> All Dress Material</h1>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Cotton Dress Material</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Embroidered Dress Material</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Chanderi Dress Material</p>
//                                 </div>
//                                 <div className='cate5' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', height: '320px', width: '170px', marginTop: '-30px' }}>
//                                     <h1 style={{ fontSize: '20px' }}> All Others</h1>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Blouses</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Dupattas</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Lehenga</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Gown</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Ethnic Bottomwear</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='selection' style={{ display: 'flex', padding: '10px' }}>
//                             <span style={{ cursor: 'pointer', color: 'black' }}>Womans Western</span>
//                             <div className='wm2' style={{ display: 'none', flexDirection: 'row', position: 'absolute', top: '100%', left: 0, backgroundColor: '#fff', border: '1px solid #ddd', padding: '30px', height: '260px', width: '800px', marginRight: '-20px', marginTop: '-7px', borderRadius: '3px' }}>
//                                 <div className='cate1' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', height: '320px', width: '150px', marginTop: '-30px', marginLeft: '-30px' }}>
//                                     <h1 style={{ fontSize: '20px' }}>‎ All Woman Ethnic</h1>
//                                     <p style={{ cursor: 'pointer' }}>‎ View All</p>
//                                 </div>
//                                 <div className='cate2' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'whitesmoke', height: '320px', width: '170px', marginTop: '-30px' }}>
//                                     <h1 style={{ fontSize: '20px' }}> All Sarees</h1>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Silk Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Cotton Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Georgette Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Chiffon Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Cotton Silk Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Satin Sarees</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Embroidered Sarees</p>
//                                 </div>
//                                 <div className='cate3' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', height: '320px', width: '170px', marginTop: '-30px' }}>
//                                     <h1 style={{ fontSize: '20px' }}> All Kurtis</h1>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}> Anarkali Kurtis</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}> Rayon Kurtis</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Cotton Kurtis</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Embroidered Kurtis</p>
//                                 </div>
//                                 <div className='cate4' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'whitesmoke', height: '320px', width: '170px', marginTop: '-30px' }}>
//                                     <h1 style={{ fontSize: '20px' }}> All Dress Material</h1>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Cotton Dress Material</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Embroidered Dress Material</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Chanderi Dress Material</p>
//                                 </div>
//                                 <div className='cate5' style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', height: '320px', width: '170px', marginTop: '-30px' }}>
//                                     <h1 style={{ fontSize: '20px' }}> All Others</h1>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Blouses</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Dupattas</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Lehenga</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Gown</p>
//                                     <p style={{ cursor: 'pointer', height: '20px', marginTop: '-2px' }}>Ethnic Bottomwear</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='selection' style={{ display: 'flex', padding: '10px' }}>
//                             <span style={{ cursor: 'pointer', color: 'black' }}>Jewellery & Accessories</span>
//                         </div>
//                         <div className='selection' style={{ display: 'flex', padding: '10px' }}>
//                             <span style={{ cursor: 'pointer', color: 'black' }}>Mens</span>
//                         </div>
//                         <div className='selection' style={{ display: 'flex', padding: '10px' }}>
//                             <span style={{ cursor: 'pointer', color: 'black' }}>Beauty & Health</span>
//                         </div>
//                         <div className='selection' style={{ display: 'flex', padding: '10px' }}>
//                             <span style={{ cursor: 'pointer', color: 'black' }}>Bags & Footwear</span>
//                         </div>
//                         <div className='selection' style={{ display: 'flex', padding: '10px' }}>
//                             <span style={{ cursor: 'pointer', color: 'black' }}>Home & Kitchen</span>
//                         </div>
//                         <div className='selection' style={{ display: 'flex', padding: '10px' }}>
//                             <span style={{ cursor: 'pointer', color: 'black' }}>Kids</span>
//                         </div>
//                         <div className='selection' style={{ display: 'flex', padding: '10px' }}>
//                             <span style={{ cursor: 'pointer', color: 'black' }}>Electronics</span>
//                         </div>
//                         <div className='selection' style={{ display: 'flex', padding: '10px' }}>
//                             <span style={{ cursor: 'pointer', color: 'black' }}>Gifting</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//        </>
//     )
// }
// export default Navbar;



