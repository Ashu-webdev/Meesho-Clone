import React from "react";
import './advertisement.css';

function Advertisement(){
    return(
        <>
        <div className="container1">
            <div className="container2">
                <p>Become a Reseller and</p>
                <h1>Start your Online Business with Zero Investment</h1>
                <div className="dnld">
                    <a><button className="gl">
                            <img src="https://images.meesho.com/images/pow/playstore-icon-big.png"/>
                    </button></a>
                    <a><button className="ios">
                    <img src="https://images.meesho.com/images/pow/appstore-icon-big.png"/>
                    </button></a>
                </div>
            </div>
        </div>
        <div className="container3">
            <h1>Register as a meesho supplier</h1>
            <h3>Sell your products to croresof customers at 0% commission</h3>
            <div className="disp-off" >
                <div className="check">
                    <img src="https://imgs.search.brave.com/bjqFAw4MIbOWsno_FCK5XKPtTpv2hQfMnfohBqisq5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzgwL0NoZWNrbWFy/a19vbl9DaXJjbGUu/cG5n"/>
                    <p>Grow your business 10x</p>
                </div>
                <hr/>
                <div className="check">
                    <img src="https://imgs.search.brave.com/bjqFAw4MIbOWsno_FCK5XKPtTpv2hQfMnfohBqisq5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzgwL0NoZWNrbWFy/a19vbl9DaXJjbGUu/cG5n"/>
                    <p>Enjoy 100% profit</p>
                </div>
                <hr/>
                <div className="check">
                    <img src="https://imgs.search.brave.com/bjqFAw4MIbOWsno_FCK5XKPtTpv2hQfMnfohBqisq5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzgwL0NoZWNrbWFy/a19vbl9DaXJjbGUu/cG5n"/>
                    <p>Sell all over India</p>
                </div>
            </div>
            <button><span>Sign Up Now</span></button>
        </div>
        </>
    );
}

export default Advertisement;