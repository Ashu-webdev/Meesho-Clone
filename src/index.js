import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//  import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from '../src/routes/cartcontext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <CartProvider>
     {/* <ChakraProvider>  */}
       <App />
     {/* </ChakraProvider>  */}
     </CartProvider>
  </BrowserRouter>
);
