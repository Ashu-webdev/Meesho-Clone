import React from 'react';
import './products.css'

function Products(){
    return(
    <>
        <div className='pod'>
            <div className='banner'>
                <div className='disp-inf'>
                    <div className='hd'>
                        <p>Lowest Prices Best Quality Shopping</p>
                    </div>
                    <div className='logos'>
                        <div className='btn'>
                            <img src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"/>
                            <span>Free Delivery</span>
                        </div>
                        <hr/>
                        <div className='btn'>
                            <img src="https://images.meesho.com/images/pow/cod_jamun.svg"/>
                            <span>Cash on Delivery</span>
                        </div>
                        <hr/>
                        <div className='btn'>
                            <img src="https://images.meesho.com/images/pow/easyReturns_jamun.svg"/>
                            <span>Easy Returns</span>
                        </div>
                    </div>
                    <div className='dwnld'>
                    <button className='dldbtn'>
                            <img src='https://images.meesho.com/images/pow/playstoreSmallIcon.png' className='dldimg'/> 
                             <span className='btnspan'> Download The Meesho App</span>
                        </button>
                    </div>
                </div>
                <div className='disp'>
                    <img src='https://images.meesho.com/images/marketing/1721287354444_512.webp'/>
                </div>   
            </div>
            
            
            <div className='topcats'>
                <div className='line'></div>
                <div className='txt'><p>Top Categories to choose from</p></div>
            </div>


            <div className='categories'>
                <a className='wmstr' href='https://www.meesho.com/women-store/pl/3g5o'></a>
                <a className='mnstr' href='https://www.meesho.com/men-store/pl/3g5p'></a>
                <a className='kidstr' href='https://www.meesho.com/kids-store'></a>
            </div>
            <div className='categories2'>
                <div className='cat2btn'>
                    <button>
                        <span>VIEW ALL</span>
                    </button>
                </div>
                <div className='homedcr'>
                    <button className='hdec' >
                        <span>Home decor</span>
                    </button>
                </div>
                <div className='kitchen'>
                    <button className='hdec'>
                        <span>Kitchen</span>
                    </button>
                </div>
                <div className='hlt'>
                    <button className='hdec'>
                        <span>Health&care</span>
                    </button>
                </div>
            </div>
            <div className='categories3'>
                <div className='cat2btn'>
                    <button>
                        <span>VIEW ALL</span>
                    </button>
                </div>
                <div className='acs'>
                    <button className='acss' >
                        <span>Accessories</span>
                    </button>
                </div>
                <div className='ftwr'>
                    <button className='ftwrbtn'>
                        <span>Kitchen</span>
                    </button>
                </div>
                <div className='ele'>
                    <button className='elebtn'>
                        <span>Health&care</span>
                    </button>
                </div>
            </div>
        </div>
    </>
    );
}

export default Products;

