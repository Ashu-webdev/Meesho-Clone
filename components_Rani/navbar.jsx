import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-content">
        <div className="logo">
          <a href="#"><img src='https://www.meesho.com/assets/svgicons/meeshoLogo.svg' alt="logo" /></a>
        </div>
        <div className="search-bar">
          <input type="text"  placeholder='Try Saree, Kurti or Search by Product Code' style={{textAlign:'center'}} />
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAACUCAMAAAAUNB2QAAAAaVBMVEX///8AAADT09Ph4eH6+vpgYGDv7+/y8vLNzc3X19fn5+fs7OxVVVX19fVaWloLCwtra2tMTEzExMQ4ODh9fX1wcHAsLCyKiopHR0cnJyd2dnalpaW0tLSfn58eHh6urq6Xl5cVFRVAQECaUESrAAAEhklEQVR4nO2c6ZKqMBCFWYwSQJFNkEWQ93/I69KB6DgKxLlprf7+jlTl0N3pk4UxDIIgCIIgCIIgCIIgPoPF0nPtE667XOseyzyWNrearGB+noebNCsjbrsL3YOahsejLDTv6IqKf46QBY+Sw72EK8dtxVe6xzeGBW+6xxIgIq211D3Gl/AyfqbhzK61cNe6G+WvNFziUdu6R/oEntwNN9jFXR528S64+0MaYQ3HOropiENYZG1ZRSeqps0Sfyf/NS493eN9iFdLgzxustK5mY3Wp+7B9tJPMoxZ5WZSGIrSevQbu0mk2k8tdM3DLoZiKH7PlmWVDInFHGQy3LQfm/8845cVO4qfbnDJ8IbJKXuYSzJ21qcV4/9jdCNZZ2Im3dUjZtBV1Xus1P370Y2lFDnSVeMeiDZ96NDYKkdkSBiNfcRiQkaDpDRc8WI7Z/xDXMiIX9bR/yGDfNqPjsQZxwcZBQqL2+fTyJoQ9MaxQpBTiy0Mpp36YA39L0cwT1Uwls3kxFiKdl9q97d9KCZUtsCBthFrD0YEVZHNSe72gKQywHoEs2y2DXO0r3maskOFUAzB0Gynalj3zFzx2NA0Wr31DYZ8O3cUkJCx1pRy4V1O6toyVawUy/cAgzjO3glYMQSeECwUm2+vIaVSnQa9UH6T5V57YayZclY7sIelcXeKQ3ErOAgxP2gsb9gMjFVeJPiwSF95wxSlZCDUS0uV8urKtyoTDKio9akA/1GoqEgCFSP2DkCF0m4MtJxMn5MCFck7YqFPxRvrotWXUc11jpq+5JbQP0d9R7/goXLv9jbae7fHlFVYuXYfJZZ6CnsY4Gn3Ohd7cG6hsDqA9YXCCkUdmGoV3uRWuwEZynvGxuAVFOtu8SpTxT2Qvd4jfLEtNjOtxQGOkodRx8mVDIQ4wNF91Cq2zGel1BL6jVLzfwfNTiEYLRwwl7r3zA1xNDmjf1v+/GffDDRfM5/+PsWFhTEn/X+NCEY99cEaSjvQH4rhYM+ceHCN6ox1mKampbctju1DDKE4ta7+xuOE3uX12pHcPTAacZHuONoVDvepMJT2laS/ojkyO/pbICbT3fAk+kGZo26fSbdudXsPGW+4Gv96k28tpthLLDDd5LSHt7vnT3UshqtR+GRw6Wp2av9asWs7M+9AJcOWv7co7OWDgCxW/IcGbDI8Jl8mj0vXW0lKFmvPrXzpB0HYBRhlGIl8Ads0d0XpuACvktuvMg6pa/VXIHHJaH58xXPqhPvdzw9jgrg89XkHqQyvePkNySVK26vtwCrDiNju2fjP7P3exaKVYTTsaTxiVkpuC68MIyr8XwKyD4vq1vgilmF4ZcG62xnLPMR+Uf+0TZhlnL/vqZOU+WHedXnoszRpq8eGF7eMM2vbcqIosuxn6yf8MkZBMjBBMjDxLTJ8koEHkoEJi2QgQpKBaddwKl8nY/vRMkKSgYdvkfEltfFlMgKSoR+SgYmvk5F+hcNlKP43wlxAxuaTQ2GAjE8XcZHhf7wIw+DtF4gwDDT/SIcgCIIgCIIgCIIgiDP/AM6qNxuJQM9SAAAAAElFTkSuQmCC" alt="search-icon" className='searchIcon'/> 
        </div>
        <div className="nav-links">
          <div className='dropdown'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAADACAMAAADRLT0TAAAAaVBMVEX///8ZGRkAAAB7e3sYGBh3d3d+fn4GBga/v7/KyspfX18MDAwbGxufn58WFhb8/PwRERGZmZnh4eHv7+/X19dqampKSkojIyPQ0NCSkpK6urr19fVGRkZPT0+kpKQ+Pj5lZWWwsLA1NTXCA1ZsAAADNElEQVR4nO3da2/aMBiGYeIY0i6uCQNKNsph/f8/cs5Dth4I3RKQUr29L2mdNrUSvmcb2AfeyQQAAAAAAAAAAAAAAPQ0H/sBfBJ0EHsZlvV9X3W9HPtR39R8slpvStdbuVmvxn7st7RwLsbgs16897FwD+lgzG0cjh8uht4VMh+aL25hJMLkp4tZ8H0rhKrKQkwd7mxcldunqtnh4e0i01/E86X77G+tareLTbvqcTv2Cm6idulEvF/whQuzevnWcr0um4PkXT32Cm5CN8O7CtVu/9Bhv3u5QkJR+tj8wS1MHIq8YzfEw2yaT8/kh5dePvigJm429gpuYlo0uyFkb+7IWJRFeaZ41StdJv6UIR97BTcxdenG77ge/ksKYShD+oft3SG9fPLpJy1liL6szs/AvzUhDGUI2bdBoqkMfuhSpmU0lWE27Lk/d95YhkHycvhO+mSuysBuaOSFpSdMMpChRQYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQgYhg5BByCBkEDIIGYQMQga5LoOlz6C/IkMwlWHgUvLS8znTp9kWZJjMnKVDkcXD3SCHaOlTx4Ov+o96a0RbQ1v6zvZqp5Xod0MZstDfnxyGMgzcDf4rZPDNVET5cDyi+Qwhq9rBPkV5eVdYzxB8sWtH9Rwfi6+boVyfZl2mr9v1xf1gJUPhL5x896v9lhRj7/yF+V9GMnSN/nuXIXXYu2A7Q9cgyNOheL0bHppXF90ZFqM+/FupXda93331vPreWj1XFw6FlbGg20MVYjvb8q0YXaG3DkUzF/U8gH5VTzaGxE7u0qkIPna+Xvatjlfb6dRYGhms2yEtyXe+a/jwXUUz+G8xtzJBOnVoxomf35Hh0rPD6VDE0zhxIx3SIurjZsD/NhSbo6nh8smyvu+tXo79qD8HE4fhalRozOkAAAAAAAAAAAAAAPjqfgO4CDoS7mjX6gAAAABJRU5ErkJggg==" alt="download" />
          <a href="#" className='dropbtn'><span>Download App</span></a>
          <div className='dropdn-content'>
            <p>Download From</p>
            <a href="#"><img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="Google Play" style={{width:'150px'}}/></a>
            <a href="#"><img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="App-store" /></a>
            </div>
            </div> 

          <a href="#"><span>Become a Supplier</span></a>
          <a href="#"><span>Newsroom</span></a>
        </div>
        

      </div>
    </div>
  );
}

export default Navbar;
