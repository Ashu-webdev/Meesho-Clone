import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from '@chakra-ui/react'
import '../Components/Navbar.css'

const Navbar = () => {
  let data = [
    { path: '/', title: 'Sell Online' },
    { path: '/how-it-works', title: 'How it works' },
    { path: '/pricing', title: 'Pricing & Commission' },
    { path: '/shipping', title: 'Shipping & Returns' },
    { path: '/grow-your-business', title: 'Grow Business' },
    { path: '/dont-have-gst', title: "Don't have GST?" }

  ]


  return (


    <>

      <div class='header'>
        <a href="http://localhost:5173/" >
          <img width='87' src="https://supplier.meesho.com/images/footer-logo.svg" />
        </a>


        <Link to={'https://supplier.meesho.com/how-it-works'}>How it works</Link>
        <Link to={'/https://supplier.meesho.com/pricing'}>Pricing & Commission</Link>
        <Link to={'https://supplier.meesho.com/shipping'}>Shipping & Returns</Link>
        <Link to={'https://supplier.meesho.com/grow-your-business'}>Grow Business</Link>
        <Link to={'https://supplier.meesho.com/dont-have-gst'}>Don't have GST?</Link>
        <Button colorScheme='pink' variant='outline' width='90px'>Login</Button>
        <Button colorScheme='pink' variant='solid'>Start Selling</Button>
      </div>

    </>
  )
}

export default Navbar
