import { Box, Button, Card, CardBody, CardFooter, Center, Flex, Heading, HStack, Image, SimpleGrid, Stack, Text ,Icon} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import MainInputBox from '../Components/HomePageComponents/MainInputBox'
import Banner1 from '../Components/HomePageComponents/Banner1'
import ImageQRCodeBanner from '../Components/HomePageComponents/ImageQRCodeBanner'
import HelpBoxes from '../Components/HomePageComponents/HelpBoxes'
import QatarVisitBanner from '../Components/HomePageComponents/QatarVisitBanner'
import ManSeeBanner from '../Components/HomePageComponents/ManSeeBanner'
import Flights from './Flights/Flight'


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <MainInputBox/>
      <Flights/>
      <Banner1/>
      <ImageQRCodeBanner/>
      <HelpBoxes/>
      <QatarVisitBanner/>
      <ManSeeBanner/>
      <Footer/>
    </div>
  )
}

export default HomePage
