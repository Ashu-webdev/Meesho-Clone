import React from 'react';
import './navbar.css';
import { BsCart2 } from "react-icons/bs";


function Navbar() {
    return (
        <>
        <div className='navbr'>
        <div className="nv">
          <div className="logo">
              <a><img src='https://www.meesho.com/assets/svgicons/meeshoLogo.svg'/></a>
          </div>
          <div className="srh">
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAACUCAMAAAAUNB2QAAAAaVBMVEX///8AAADT09Ph4eH6+vpgYGDv7+/y8vLNzc3X19fn5+fs7OxVVVX19fVaWloLCwtra2tMTEzExMQ4ODh9fX1wcHAsLCyKiopHR0cnJyd2dnalpaW0tLSfn58eHh6urq6Xl5cVFRVAQECaUESrAAAEhklEQVR4nO2c6ZKqMBCFWYwSQJFNkEWQ93/I69KB6DgKxLlprf7+jlTl0N3pk4UxDIIgCIIgCIIgCIIgPoPF0nPtE667XOseyzyWNrearGB+noebNCsjbrsL3YOahsejLDTv6IqKf46QBY+Sw72EK8dtxVe6xzeGBW+6xxIgIq211D3Gl/AyfqbhzK61cNe6G+WvNFziUdu6R/oEntwNN9jFXR528S64+0MaYQ3HOropiENYZG1ZRSeqps0Sfyf/NS493eN9iFdLgzxustK5mY3Wp+7B9tJPMoxZ5WZSGIrSevQbu0mk2k8tdM3DLoZiKH7PlmWVDInFHGQy3LQfm/8845cVO4qfbnDJ8IbJKXuYSzJ21qcV4/9jdCNZZ2Im3dUjZtBV1Xus1P370Y2lFDnSVeMeiDZ96NDYKkdkSBiNfcRiQkaDpDRc8WI7Z/xDXMiIX9bR/yGDfNqPjsQZxwcZBQqL2+fTyJoQ9MaxQpBTiy0Mpp36YA39L0cwT1Uwls3kxFiKdl9q97d9KCZUtsCBthFrD0YEVZHNSe72gKQywHoEs2y2DXO0r3maskOFUAzB0Gynalj3zFzx2NA0Wr31DYZ8O3cUkJCx1pRy4V1O6toyVawUy/cAgzjO3glYMQSeECwUm2+vIaVSnQa9UH6T5V57YayZclY7sIelcXeKQ3ErOAgxP2gsb9gMjFVeJPiwSF95wxSlZCDUS0uV8urKtyoTDKio9akA/1GoqEgCFSP2DkCF0m4MtJxMn5MCFck7YqFPxRvrotWXUc11jpq+5JbQP0d9R7/goXLv9jbae7fHlFVYuXYfJZZ6CnsY4Gn3Ohd7cG6hsDqA9YXCCkUdmGoV3uRWuwEZynvGxuAVFOtu8SpTxT2Qvd4jfLEtNjOtxQGOkodRx8mVDIQ4wNF91Cq2zGel1BL6jVLzfwfNTiEYLRwwl7r3zA1xNDmjf1v+/GffDDRfM5/+PsWFhTEn/X+NCEY99cEaSjvQH4rhYM+ceHCN6ox1mKampbctju1DDKE4ta7+xuOE3uX12pHcPTAacZHuONoVDvepMJT2laS/ojkyO/pbICbT3fAk+kGZo26fSbdudXsPGW+4Gv96k28tpthLLDDd5LSHt7vnT3UshqtR+GRw6Wp2av9asWs7M+9AJcOWv7co7OWDgCxW/IcGbDI8Jl8mj0vXW0lKFmvPrXzpB0HYBRhlGIl8Ads0d0XpuACvktuvMg6pa/VXIHHJaH58xXPqhPvdzw9jgrg89XkHqQyvePkNySVK26vtwCrDiNju2fjP7P3exaKVYTTsaTxiVkpuC68MIyr8XwKyD4vq1vgilmF4ZcG62xnLPMR+Uf+0TZhlnL/vqZOU+WHedXnoszRpq8eGF7eMM2vbcqIosuxn6yf8MkZBMjBBMjDxLTJ8koEHkoEJi2QgQpKBaddwKl8nY/vRMkKSgYdvkfEltfFlMgKSoR+SgYmvk5F+hcNlKP43wlxAxuaTQ2GAjE8XcZHhf7wIw+DtF4gwDDT/SIcgCIIgCIIgCIIgiDP/AM6qNxuJQM9SAAAAAElFTkSuQmCC'></img>
              <input type="searchbar" className="searchbar" placeholder="Try Saree, Kurti or Search by Product Code"></input>
          </div>
          <div className="buttons">
            <ul className='apdl' id='download'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAADACAMAAADRLT0TAAAAaVBMVEX///8ZGRkAAAB7e3sYGBh3d3d+fn4GBga/v7/KyspfX18MDAwbGxufn58WFhb8/PwRERGZmZnh4eHv7+/X19dqampKSkojIyPQ0NCSkpK6urr19fVGRkZPT0+kpKQ+Pj5lZWWwsLA1NTXCA1ZsAAADNElEQVR4nO3da2/aMBiGYeIY0i6uCQNKNsph/f8/cs5Dth4I3RKQUr29L2mdNrUSvmcb2AfeyQQAAAAAAAAAAAAAAPQ0H/sBfBJ0EHsZlvV9X3W9HPtR39R8slpvStdbuVmvxn7st7RwLsbgs16897FwD+lgzG0cjh8uht4VMh+aL25hJMLkp4tZ8H0rhKrKQkwd7mxcldunqtnh4e0i01/E86X77G+tareLTbvqcTv2Cm6idulEvF/whQuzevnWcr0um4PkXT32Cm5CN8O7CtVu/9Bhv3u5QkJR+tj8wS1MHIq8YzfEw2yaT8/kh5dePvigJm429gpuYlo0uyFkb+7IWJRFeaZ41StdJv6UIR97BTcxdenG77ge/ksKYShD+oft3SG9fPLpJy1liL6szs/AvzUhDGUI2bdBoqkMfuhSpmU0lWE27Lk/d95YhkHycvhO+mSuysBuaOSFpSdMMpChRQYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQga5LoOlz6C/IkMwlWHgUvLS8znTp9kWZJjMnKVDkcXD3SCHaOlTx4Ov+o96a0RbQ1v6zvZqp5Xod0MZstDfnxyGMgzcDf4rZPDNVET5cDyi+Qwhq9rBPkV5eVdYzxB8sWtH9Rwfi6+boVyfZl2mr9v1xf1gJUPhL5x896v9lhRj7/yF+V9GMnSN/nuXIXXYu2A7Q9cgyNOheL0bHppXF90ZFqM+/FupXda93331vPreWj1XFw6FlbGg20MVYjvb8q0YXaG3DkUzF/U8gH5VTzaGxE7u0qkIPna+Xvatjlfb6dRYGhms2yEtyXe+a/jwXUUz+G8xtzJBOnVoxomf35Hh0rPD6VDE0zhxIx3SIurjZsD/NhSbo6nh8smyvu+tXo79qD8HE4fhalRozOkAAAAAAAAAAAAAAPjqfgO4CDoS7mjX6gAAAABJRU5ErkJggg=='/>
                <p>Download App</p>
                <div className='dldbox'>
                  <h2>Download App</h2>
                  <img src='https://images.meesho.com/images/pow/playstore-icon-big.png'/ >
                  <img src='https://images.meesho.com/images/pow/appstore-icon-big.png' id='applestr'/>

                </div>
            </ul>
            <hr/>
            <button>Become a supplier </button>
            <hr/>
            <button>Newsroom</button>
            <hr/>
            <button className='profilebtn'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAADT09PW1tYODg4VFRUrKyseHh4lJSX8/Pzy8vIZGRnOzs7n5+fk5OQuLi7d3d2lpaVycnKtra1aWlpiYmK7u7t8fHzExMSIiIhTU1NHR0c3NzdCQkJnZ2e0tLSRkZGbm5vRPSXUAAACtElEQVR4nO3aiZKqMBAFUCM6StiN7Cjy/z/5ZBxqXJC0MvWStu75gr4VsnTCYgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCxAmfp+/4yDkwXMpf0Vber6iZq6mrXJb40XdD7pNrV4lqdJ0zjuGq/Efe8vXJNF/aGYCRKb5Pymzz+aJIL33RxL8omsgiRmS7vJe1kFl5plpEmzMoxXSKZ3GuyCFGxWaKTtTaMl5gukihMtVnOQxOaLpOmXRHCrHgMjSwJWYTIWZwEnIoUpmKxoBX66d9rCtOFUkxv/r+U6UIpqGFYrAAfNTIFLYvXmi6Uwm9IYQ4sGoHwSApzZHEEcDtSmNJ0nTTZFyFLw6SlkTnlK2NxmjnLdL2ZEBGL/f+b/qiZmy6RTuoWtJTLR9aLp/szPk3zt8nNJmWxxVwJns+bkt+VpmzHm7Sq5fWN/QjV4ymtUfyG5cKVxe3UOWaS0zJ2z5VxUqbVoUpPSexyTtI71y+lDAMpXdZZXBn4Xbr9/coOZRtLltNfOmrsyjnKC267zEIW5dN7zUqxuDIbyGy6C6iT2HSJZE7pTWY52ysec8dVtS7KmZdzGByZj78yPzjY358FtIum3tr2a8CAHKV3Ml3upPilLELsLD4UvJrF5ienWH8r8+BkaZqQ9mR2a2XnKkC6+3tk5w2aIu4v9/YW7p7+4b0sNk4b4oP5mK11HxrxvWzUzrJLjoDyi8lTlj1vzBkYIY5WDY2cNTCW/ej4+jnmVm5Tq9bNDONZ9J25lFfMSRYtAeHcLDb1Amp2GGFPmJlrWc+eSTM/i0WT5g/CWPPDxvz5L0RqOsRg3lnmYms6xOAPFjMhTIcYJJ8UphsKWg3WA+/H5mJ75WsQ9awJE/hLHUdnaToEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8f/8Anywh175GtFkAAAAASUVORK5CYII=' className='btnimg11'/>
              <span>Profile</span>
              <div className="sidebar">
                <div className='sbrcnt'>
                  <h1>Hello User</h1>
                  <h4>To Access your Meesho account</h4>
                  <button className='signinbtn' placeholder="Signup">Sign Up</button>
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
            <button>
              <img src='https://st4.depositphotos.com/38837296/39705/v/450/depositphotos_397050998-stock-illustration-smart-cart-icon-vector-miscellaneous.jpg' />
              <p>Cart</p>
              
            </button>
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

