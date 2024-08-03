import React from "react";
import { Link } from "react-router-dom";
import instagramlogo from '../assets/instagram.png'
import youtubelogo from '../assets/youtube.png'
import twitterlogo from '../assets/twitter.png'
import linkedinlogo from '../assets/linkedin.png'
import'./footer.css'

const Footer = () => {
    return(
        <>
        <div className="footerbox">
            <div className="downloadbox">
                <h1> Shop Non-Stop on Meesho</h1>
                <p style={{fontSize:'20px',fontFamily:'Verdana, Geneva, Tahoma, sans-serif', marginTop:'-10px' }}>Trusted by more than 1 Crore Indians</p>
                <p style={{fontSize:'20px',fontFamily:'Verdana, Geneva, Tahoma, sans-serif', marginTop:'-10px',color:'grey' }}>Cash on Delivery | Free Delivery</p>
                <div className="imagedownload">
                    <img src="https://images.meesho.com/images/pow/playstore-icon-big.png"/>
                    <img src="https://images.meesho.com/images/pow/appstore-icon-big.png"/>
                </div>

            </div>
            <div className="links">
                <Link ><p>Careers</p></Link>
                <Link ><p>Become a supplier</p></Link>
                <Link ><p>Hall of Fame</p></Link>
                <Link ><p>Sitemap</p></Link>
            </div>
            <div className="policies">
                <Link ><p>Legal and Policies </p></Link>
                <Link ><p>Meesho Tech Blog</p></Link>
                <Link ><p>Notices and Returns</p></Link>
            </div>
            <div className="socialmedia">
                <h1>Reach Out to us</h1>
                <div className="logocontainer">
                    <img src={instagramlogo}/>
                    <img src={youtubelogo}/>
                    <img src={twitterlogo}/>
                    <img src={linkedinlogo}/>
                </div>
            </div>
            <div className="contactus">
                <h1>Contact Us</h1>
                <p>Fashnear Technologies Private Limited,
CIN: U74900KA2015PTC082263
3rd Floor, Wing-E, Helios Business Park,Kadubeesanahalli Village, Varthur Hobli, Outer Ring Road Bellandur, Bangalore, Bangalore South, Karnataka, India, 560103
E-mail address: query@meesho.com
© 2015-2024 Meesho.com</p>
            </div>
        </div>
        </>
    )
}

export default Footer;