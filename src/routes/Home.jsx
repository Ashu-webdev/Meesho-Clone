import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/products";
import ProductList from "../components/ProductList";
import Advertisement from "../components/advertisement";


function Home(){
    return(
        <>
        <Navbar />
        <div style={{ backgroundColor: 'white' }}>
        <Products />
        <Advertisement />
         <ProductList /> 
         </div>
        </>
    );
}

export default Home;