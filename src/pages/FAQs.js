import Navbar from '@/components/HomePage/Navbar'
import React from 'react'
import { Box,Text } from '@chakra-ui/react'
import FAQ from '@/components/HomePage/FAQ'
import { driverFaqData } from '@/components/HomePage/FAQData'
import Footer from '@/components/HomePage/Footer'

const FAQs = () => {
  return (
    <Box bg='rgba(0, 22, 31, 1)' p={['0 30px', '0 30px', '0 60px']} >
        <Navbar/>
       
        <Text 
         fontSize={['12px', '14px', '14px']}
         lineHeight={['20px', '22px', "25px"]}
         fontFamily="THICCCBOI"
         color="#0DECFF"
         textAlign="center"
         pt='10rem'
        >Have questions? We're here to help</Text>
        <Text
                fontSize={['40px', '50px', '60px']}
                lineHeight={['55px', '70px', "90px"]}
               fontFamily="THICCCBOI"
               color="#ffffff"
               fontWeight="500"
               textAlign="center"
               textTransform='capitalize'
               
            >
                frequently asked <span className='gradient-text'>questions.</span>
        </Text>
        <FAQ faqData={aqData} show/>
        <Footer/>
    </Box>
  )
}

export default FAQs
