import React from 'react'
import { HStack, VStack, Text, Grid, GridItem } from '@chakra-ui/react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LiaLaptopSolid } from "react-icons/lia";
import { GiRockingChair } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { Link } from 'react-router-dom';




const Browse = () => {
    return (
        <>

            <HStack>
                <div style={{ background: '#DB4444', height: '40px', width: '10px' }} ></div>
                <Text fontSize={['1.25em', '1.55rem', '1.85rem']} fontFamily={'monospace'} mt={['3','2']}>Browse Category  </Text>
            </HStack>

            <Grid templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={['5','16']} ml={['2','6','8']} mt={['5','8','10']}>
                <GridItem w='100%' h='10'  >
                <VStack h={['50', '70', '150']} w={['50','70','150']} border={'1px solid black'}  alignItems={'center'} fontSize={'5rem'} justify={'center'} _hover={{ bg: 'red.500', color: 'white', transition: '0.2s' }}>
                   <Link to={'/allproducts'}>
                   <IoPhonePortraitOutline />
                   </Link>
                   
                </VStack>

                </GridItem>
                <GridItem w='100%' h='10' >
                <VStack h={['50', '70', '150']} border={'1px solid black'} w={['50','70','150']} alignItems={'center'} fontSize={'5rem'} justify={'center'} _hover={{ bg: 'red.500', color: 'white', transition: '0.2s' }}>
                    
                    <Link to={'/allproducts'}>
                    <LiaLaptopSolid />
                    </Link>
                </VStack>
                </GridItem>
                <GridItem w='100%' h='10' >
                <VStack h={['50', '70', '150']} border={'1px solid black'} w={['50','70','150']} alignItems={'center'} fontSize={'5rem'} justify={'center'} _hover={{ bg: 'red.500', color: 'white', transition: '0.2s' }}>
                    <Link to={'/allproducts'}>
                    <GiRockingChair />

                    </Link>
                </VStack>
                </GridItem>
                <GridItem w='100%' h='10'>
                <VStack h={['50', '70', '150']} border={'1px solid black'} w={['50','70','150']} alignItems={'center'} fontSize={'5rem'} justify={'center'} _hover={{ bg: 'red.500', color: 'white', transition: '0.2s' }}>
                    <Link to={'/allproducts'}>
                    <GiClothes />
                    </Link>
                </VStack>
                </GridItem>
            </Grid>

        </>
    )
}

export default Browse