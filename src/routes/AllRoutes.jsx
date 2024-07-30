// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// // import Home from './Pages/Home_Admin'
// import Home from "./Home"
// import Login from '../loginpage_components/login'
// import SignUp from '../loginpage_components/signup'






// const AllRoutes = () => {
//   return (
//     <Routes> 
//         <Route path='/' element={<Home />} />;
//         <Route path='/login' element={<Login />} />;
//         <Route path='/Signup' element={<SignUp/>}/>
//     </Routes>
//   )
// }

// export default AllRoutes

// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import Login from '../loginpage_components/login';
// import SignUp from '../loginpage_components/signup';
// import ProductList from '../components/ProductList';
// import CartPage from './Cart';

// const AllRoutes = () => {
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (product) => {
//         setCartItems((prevItems) => [...prevItems, product]);
//     };

//     return (
//         <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/login' element={<Login />} />
//             <Route path='/signup' element={<SignUp />} />
//             <Route path='/products' element={<ProductList addToCart={addToCart} />} />
//             <Route path='/cart' element={<CartPage cartItems={cartItems} />} />
//         </Routes>
//     );
// };

// export default AllRoutes;

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from '../loginpage_components/login';
import SignUp from '../loginpage_components/signup';
import ProductList from '../components/ProductList';
import CartPage from './Cart';
import AdNav from '../admin_comp/AdNav';
import Amn from './Admin';

const AllRoutes = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/products' element={<ProductList addToCart={addToCart} />} />
            <Route path='/cart' element={<CartPage cartItems={cartItems} />} />
            <Route path='/admin' element={<Amn/>}/>
         </Routes>
    );
};

export default AllRoutes;
