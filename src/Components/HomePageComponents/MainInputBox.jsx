import { Tab, TabIndicator,Box, TabList, TabPanel, TabPanels, Tabs, Center } from '@chakra-ui/react'
import Stay from '../../Pages/Stay';
import React from 'react'

const MainInputBox = () => {
  return (
    <Box width={'85%'} m={'auto'} border='1px solid #BDBDBD' borderRadius='7px' >
            <Tabs position="relative" variant="unstyled">
                <Center>
                    <TabList borderBottom='1px solid #BDBDBD' width={'80%'} justifyContent={'space-evenly'} >
                        <Tab _selected={{ color: 'blue.500'}} fontWeight='semibold' >Stays</Tab>
                        <Tab _selected={{ color: 'blue.500'}} fontWeight='semibold'>Flight</Tab>
                        <Tab _selected={{ color: 'blue.500'}} fontWeight='semibold'>Cars</Tab>
                        <Tab _selected={{ color: 'blue.500'}} fontWeight='semibold'>Things to do</Tab>
                        <Tab _selected={{ color: 'blue.500'}} fontWeight='semibold'>Packages</Tab>
                    </TabList>
                </Center>
                <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                        <Stay/>
                    </TabPanel>
                    <TabPanel>
                        <p>Flight</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Cars</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Things to do</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Packages</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
    </Box>
  )
}

export default MainInputBox
