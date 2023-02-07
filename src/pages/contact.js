import ContactFaq from '@/components/HomePage/ContactFaq'
import ContactForm from '@/components/HomePage/ContactForm'
import Footer from '@/components/HomePage/Footer'
import Navbar from '@/components/HomePage/Navbar'
import { Box } from '@chakra-ui/react'
import React from 'react'

const contact = () => {
  return (
    <Box bg='rgba(0, 22, 31, 1)'>
        <Box p={['0 30px', '0 30px', '0 60px']}>
            <Navbar/>
        </Box>
            <Box bgImage='url(/brand/works-bg.png)' bgRepeat='no-repeat' bgSize='100% 100%'>
            
                  <ContactFaq/>
                   <ContactForm/>
          
            </Box>
        
        <Footer/>
    </Box>
  )
}

export default contact
