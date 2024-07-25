import React from 'react'
import { Image, InputGroup, InputLeftAddon, Input, InputRightAddon, Stack, Box, Heading, Text, Button, Card, CardBody, Divider, Center } from '@chakra-ui/react'
import '../Pages/Home.css'
import { FaSquareInstagram } from "react-icons/fa6"
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";



const Home = () => {
  function Feature({ img, title, desc }) {
    return (
      <Box p={30} borderWidth='2px' margin={10} backgroundColor={'whitesmoke'} >
        <Heading fontSize='32' color='deeppink'>{title}</Heading>
        <Text mt={4} fontweight={800} fontWeight={'bold'}>{desc}</Text>
      </Box>
    )
  }
  function StackEx() {
    return (
      <Stack spacing={14} direction='row' borderRadius={80}>
        <Feature

          title='11 Lakh+'
          desc='Trust Meesho to sell online'
        />
        <Feature
          title='14 Crore+'
          desc='Customers buying across India'
        />
        <Feature
          title='19000+'
          desc='Pincode Supported for delivery'
        />
        <Feature
          title='700+'
          desc='Categories to sell online'
        />
      </Stack>

    )
  }



  return (
    <>
      <div class='menu'>
        <div class='container'>
          <img width='950' className='phb' src='https://supplier.meesho.com/images/Desktop-Background-1-p-1080.png' />
          <img class='photo' src='https://supplier.meesho.com/images/Desktop-Pic.png' />

        </div>
        <div class='container-1'>
          <div class='new flicker'>
            <h1 style={{ fontWeight: "bold", fontSize: '30px' }}>
              Sell online to 14 Cr+ customers at
              <span class='inp'> 0%commission</span>

            </h1>
            <p class="paragraph-2">Become a Meesho seller and grow your business across India</p>
            <img class='img-2' src="https://supplier.meesho.com/images/new-flicker.gif" />
            <span class="paragraph-2">Don't have a GSTIN or have a Composition GSTIN?</span>
          </div>
          <p class="paragraph-2">
            "You can still sell on Meesho. Click"
            <a href="https://supplier.meesho.com/dont-have-gst" class="link-2">
              <span class="pink-color">here</span>
            </a>
            "to know more."

          </p>
          <div class="space-30"></div>
          <div class='pn'>
            <InputGroup>
              <InputLeftAddon backgroundColor='white'>+91</InputLeftAddon>
              <Input type='tel' placeholder='Enter Your Mobile Number' />
              <InputRightAddon color='white' backgroundColor='deeppink' variant='solid'>Start Selling</InputRightAddon>
            </InputGroup>
          </div>
        </div>


        <div class="space-100"></div>


        <div class="space-80"></div>


        <StackEx />
        <div class='block'>

          <h1 class='heading'>Why Suppliers Love Meesho</h1>
          <p class='para'>All the benefits that come with selling on Meesho are designed to help you sell more, and make it easier to grow your business. </p>

        </div>
        <div class='section'>
          <div class='block-2'>
            <img class='icon' src='https://supplier.meesho.com/images/icon-10.svg' />
            <h1>0% Commission Fee</h1>
            <p>Suppliers selling on Meesho keep 100% of their profit by not paying any commision</p>
          </div>
          <Divider />
          <div class='block-2'>
            <img class='icon ' src='https://supplier.meesho.com/images/icon-16.svg' />
            <h1>0 Penality Charges</h1>
            <p>Sell online without the fear of order cancellation charges with 0 Penalty for late dispatch or order cancellations.</p>
          </div>
          <div class='block-2'>
            <img class='icon' src='https://supplier.meesho.com/images/icon-11.svg' />

            <h1>Growth for Every Supplier</h1>
            <p>From small to large and unbranded to branded, and now open for Sellers who don't have a Regular GSTIN too,Meesho fuels growth for all suppliers.</p>
          </div>
          <div class='block-2'>
            <img class='icon' src='https://supplier.meesho.com/images/icon-12.svg' />
            <h1>Ease of Doing Business</h1>
            <div class='tick'>
              <img src='https://supplier.meesho.com/images/tick.svg' />
              <span>Easy Product Listing</span>
            </div>
            <div class='tick-2'>
              <img src='https://supplier.meesho.com/images/tick.svg' />
              <span>Lowest Cost Shipping</span>
            </div>
            <div class='tick-3'>
              <img src='https://supplier.meesho.com/images/tick.svg' />
              <span>7-Day Payment Cycle from the delivery date</span>
            </div>
          </div>
        </div>


        <div class='space-80'></div>


        <div class='section-2'>
          <h1 class='heading-2'>Exclusive Supplier+ Rewards for the first 30 days</h1>
          <div class='space-10'></div>
          <div class='space-80'></div>


          <Card maxW='sm'>
            <CardBody>
              <img
                src='https://supplier.meesho.com/images/icon-1.svg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Free catalog visibility of ₹600</Heading>
                <Text>
                  Run advertisements for your catalogs to increase the visibility of your products and get more orders. Currently, not available for sellers who don't have a Regular GSTIN.
                </Text>

              </Stack>
            </CardBody>
          </Card>
          <div></div>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://supplier.meesho.com/images/icon-7.svg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>No Cancellation Charges</Heading>
                <Text>
                  Cancel orders that you can’t fulfil for unforeseen reasons without worrying about penalties
                </Text>

              </Stack>
            </CardBody>

          </Card>
        </div>


        <h2 class='videot'>Experiences suppliers love to talk about</h2>
        <div class='space-30'></div>
        <div class='video'>
          <div class='video2'>
            <img height='200' src='https://supplier.meesho.com/images/rajat-amit-jain-testimonials.png' borderRadius='60' />
            <a href="https://www.youtube.com/embed/Dx7uwcaDd60?si=XCeSaWeHnXM7fHWq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin">
              <img src='https://supplier.meesho.com/images/icon-play.svg' />
            </a>

            <h1 class='p1'>Amit and Rajat Jain</h1>
            <h2 class='p2'>Smartees, Tiruppur</h2>
            <p>Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.</p>
          </div>
          <div class='video2'>
            <img height='200' src='https://supplier.meesho.com/images/suman-testimonial.png' />
            <a href="https://www.youtube.com/embed/UwZJ31Zv1cQ?si=5JvySvFjrG2iYCSz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" >
              <img src='https://supplier.meesho.com/images/icon-play.svg' />
            </a>

            <h1 class='p1'>Suman</h1>
            <h2 class='p2'>Keshav Fashion,Hisar</h2>
            <p>I started selling on Meesho with 4-5 orders on the very first day. In no time I was getting over 1000 orders a day, like a dream come true.</p>
          </div>
          <div class='video2'>
            <img src='https://supplier.meesho.com/images/rathi-family-testimonial.png' />
            <a href="https://www.youtube.com/embed/b6sHjCEmdC4?si=gYCKrz6IeLezJmhp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              <img src='https://supplier.meesho.com/images/icon-play.svg' />
            </a>

            <h1 class='p1'>Mohit Rathi</h1>
            <h2 class='p2'>Meira Jewellery, Ahmedabad</h2>
            <p>Meesho made it extremely simple to transition to online business during lockdown. Suddenly we were all over India to our surprise, seeing up to 5X growth on sale days.</p>
          </div>
        </div>

        <div class='space-40'></div>
        <div></div>

        <h1 style={{ textAlign: 'Center', fontWeight: 'bold', fontSize: '30px', marginBottom: '25px' }}>How it works</h1>
        <div class="step-indicator">
          <div class="step-item">
            <div class="step-circle">1</div>
            <h3>Create Account</h3>
            <div></div>
            <ul>
              <li>GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)</li>
              <li>Bank Account</li>
            </ul>
          </div>
          <div class="step-line"></div>
          <div class="step-item">
            <div class="step-circle sc">2</div>
            <h3>List Products</h3>
            <div class='space-10'></div>
            <p>List the products you want to sell in your supplier panel</p>
          </div>
          <div class="step-line"></div>
          <div class="step-item">
            <div class="step-circle">3</div>
            <h3>Get Orders</h3>
            <div></div>
            <p>Start getting orders from crores of Indians actively shopping on our platform.</p>
          </div>
          <div class="step-line"></div>
          <div class="step-item">
            <div class="step-circle sc">4</div>
            <h3>Lowest Cost Shipping</h3>
            <div></div>
            <p>Products are shipped to customers at lowest costs</p>
          </div>
          <div class="step-line"></div>
          <div class="step-item">
            <div class="step-circle">5</div>
            <h3>Receive Payments</h3>
            <div></div>
            <p>Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery.</p>
          </div>
        </div>


        <div class='space-60'></div>


        <div class='section-3'>
          <img src='https://supplier.meesho.com/images/learn-hub.svg' />
          <div class='space-20'></div>
          <h1 class='tab'>Learn how to sell and grow your business on Meesho</h1>
          <div class='s4'>
            <img src='https://supplier.meesho.com/images/play.svg' />
            <div style={{ color: 'deeppink', fontSize: '20px' }}>Visit Learning Hub</div>
          </div>
        </div>


        <div class='space-60'></div>


        <div class='80'></div>
        <div class='bx'>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '60px' }}>Grow Your Business With Meesho</h1>
          <div class='section-4'>
            <Card minW='xsm'>
              <CardBody>
                <Image
                  src='https://supplier.meesho.com/images/icon-3.svg'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='10' spacing='5'>
                  <Heading size='md'>Lowest Shopping Costs</Heading>
                  <Text>
                    Sell your products across India to over 28,000+ pincodes at lowest delivery cost.
                  </Text>

                </Stack>
              </CardBody>
            </Card>

            <div class='space-5'></div>
            <Card minW='xsm'>
              <CardBody>
                <Image
                  src='https://supplier.meesho.com/images/icon-8.svg'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Next Day Dispatch Program</Heading>
                  <Text>
                    Sign up for the quick Next Day Dispatch (NDD) Program and get higher visibility and your own Account Manager
                  </Text>

                </Stack>
              </CardBody>
            </Card>

            <div class='space-5'></div>
            <Card minW='xsm'>
              <CardBody>
                <Image
                  src='https://supplier.meesho.com/images/icon-2.svg'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Ads to grow more</Heading>
                  <Text>
                    Use selling tools like"
                    <span>Mesho Ads</span>
                    "to be more visible and sell more products. Currently, not available for Sellers who don't have a Regular GSTIN
                  </Text>

                </Stack>
              </CardBody>
            </Card>

            <div class='space-5'></div>
            <Card minW='xsm'>
              <CardBody>
                <Image
                  src='https://supplier.meesho.com/images/icon-9.svg'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Business Insights</Heading>
                  <Text>
                    Use product &amp; price recommendations so that you’re always on top of your business
                  </Text>

                </Stack>
              </CardBody>
            </Card>
          </div>
        </div>


        <div class='space-60'></div>


        <div style={{ backgroundColor: 'white' }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '30px', marginLeft: '60px' }}>Popular Categories to Sell Online</h1>

          <div class='section-5'>
            <a href="https://supplier.meesho.com/sell-online/sarees">
              <div>Sell Sarees Online </div>
            </a>
            <a href="https://supplier.meesho.com/sell-online/jewellery">
              <div>Sell Jewellery Online</div>
            </a>
            <a href="https://supplier.meesho.com/sell-online/tshirts">
              <div>Sell Tshirts Online</div>
            </a>
            <a href="https://supplier.meesho.com/sell-online/shirts">
              <div>Sell Shirts Online</div>
            </a>
            <a href="https://supplier.meesho.com/sell-online/watches">
              <div>Sell Watches Online</div>
            </a>
            <a href="https://supplier.meesho.com/sell-online/electronics">
              <div>Sell Electronics Online</div>
            </a>
            <a href="https://supplier.meesho.com/sell-online/clothes">
              <div>Sell Clothes Online</div>
            </a>
            <a href="https://supplier.meesho.com/sell-online/socks">
              <div>Sell Socks Online</div>
            </a>
          </div>
          <div class='more'>
            <h1 style={{ alignItems: 'center', fontWeight: 'bold' }}>View More</h1>
            <img src='https://supplier.meesho.com/images/plus.svg' />
          </div>
        </div>


        <div></div>


        <div class='ft'>
          <h1 style={{ fontWeight: 'bold', fontSize: '30px', marginLeft: '60px' }}>Meesho Supplier Support Available 24/7</h1>
          <div class='section-6'>
            <p style={{ float: 'right' }}>Meesho supplier support is available to solve all your doubts and issues before and after you start your online selling business.</p>
            <div class='space-30'></div>
          </div>
          <div class='ft-3'>
            <img src='https://supplier.meesho.com/images/email.svg' />
            <p>You can reach out to</p>

            <div style={{ color: 'deeppink', cursor: 'pointer' }}>sell@meesho.com</div>
          </div>
        </div>


        <div class='space-60'></div>


        <div class='ft-2'>
          <div class='footer'>
            <img src='https://supplier.meesho.com/images/footer-logo.svg' />
            <p>Sell your products to crores of customers on Meesho at 0% commission</p>

            <Button colorScheme='pink' variant='solid' width='130px '>Start Selling</Button>

          </div>

          <div style={{ float: 'right' }}>
            <h1 style={{ fontWeight: 'bold' }}>Sell on Meesho</h1>
            <div></div>
            <div class='comp'>
              <a href="https://supplier.meesho.com/sell-online">
                <h2>Sell Online</h2>
              </a>
              <a href="https://supplier.meesho.com/pricing">
                <h2>Pricing & Commission</h2>
              </a>
              <a href="https://supplier.meesho.com/how-it-works">
                <h2>How it works</h2>
              </a>
              <a href="https://supplier.meesho.com/shipping">
                <h2>Shipping & Returns</h2>
              </a>
              <a href="https://supplier.meesho.com/grow-your-business">
                <h2>Grow Your Business</h2>
              </a>
              <a href="https://supplier.meesho.com/learning-hub/">
                <h2>Learning Hub</h2>
              </a>
              <a href="https://supplier.meesho.com/ads">
                <h2>Meesho Ads</h2>
              </a>
              <a href="https://www.meesho.com/">
                <h2>Shop Online on Meesho</h2>
              </a>
            </div>
          </div>
          <div>
            <h1 style={{ fontWeight: 'bold' }}>Contact Us</h1>
            <div></div>
            <h2 style={{ cursor: 'pointer' }}>sell@meesho.com</h2>
            <div style={{ display: 'flex', gridGap: '10px' }}>
              <FaSquareInstagram />
              <RiFacebookBoxFill />
              <IoLogoYoutube />
            </div>

            <span></span>
          </div>
          <div class='space-30'></div>
        </div>


        <div style={{ backgroundColor: 'whitesmoke' }}>
          <Divider style={{ border: '1px solid grey' }} />
          <div class='space-30'></div>
          <p >© 2015-22 Meesho Inc. All Rights Reserved.</p>
        </div>

      </div>
    </>
  )
}

export default Home
