import React, { useState } from 'react'
import { HStack, Text, VStack, useMediaQuery, Box } from '@chakra-ui/react'
import { IoCartOutline } from "react-icons/io5";

import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';




const Navbar = () => {

    const [islarger] = useMediaQuery("(min-width: 768px)")
    const [showmenu, setShowmenu] = useState(false);

    const togglemenu = () => {
        setShowmenu(!showmenu)
    }

    const items = useSelector((state) => state.cart.cart)


    return (
        <>
            <HStack justifyContent='center' fontSize={['0.71rem','0.95rem']} p={3} bg='black' color='gray.200' mb={5} fontFamily='Montserrat'><Text>Summer Sale - Get Free Express Delivery. <span style={{ fontWeight: 'bold' }}>Shop Now</span></Text></HStack>
            <HStack justifyContent='space-between' p={5} pl={8} pr={12} m={2} fontSize='1.25rem' borderBottom='1px solid gray' pb={5} >

                <Link to='/'>
                    <Text fontFamily='Dancing Script' fontWeight='bold' fontSize={['1.42rem','1.65rem','1.85rem']} >BRANDY</Text>
                </Link>

                {
                    islarger ? (
                        <HStack gap={10} fontFamily='Montserrat'>

                            <Link to='/'  >

                                <Text mt={2}>Home</Text>
                            </Link>
                            <Link to='/about'>
                                <Text mt={2}>About</Text>
                            </Link>

                            <Link to='/allproducts'>
                                <Text mt={2}>Collections</Text>
                            </Link>

                            <HStack cursor='pointer' fontSize='1.5rem'>
                                <Link to={'/cart'}>
                                    <IoCartOutline fontSize={'2rem'} />
                                </Link>
                                <Text fontSize='1.12rem'>{items.length}</Text>
                            </HStack>

                        </HStack>
                    ) :
                        (
                            <VStack>
                                <Text fontSize={'1.5rem'} cursor='pointer' onClick={togglemenu} ><GiHamburgerMenu /></Text>
                            </VStack>
                        )
                }
            </HStack>

            {
                showmenu && (
                    <VStack bg="black" color="white" py={4} display={{ base: "block", md: "none" }} p={7}>
                        <Link to='/'>
                            <Text fontSize="xl" mb={2} onClick={togglemenu}>Home</Text>
                        </Link>
                        <Link to='/about'>
                            <Text fontSize="xl" mb={2} onClick={togglemenu}>About</Text>
                        </Link>
                        <Link to='contact'>
                            <Text fontSize="xl" mb={2} onClick={togglemenu}>Contact</Text>
                        </Link>
                        <Link to='/allproducts'>
                            <Text fontSize="xl" mb={2} onClick={togglemenu}>Collections</Text>
                        </Link>
                        <Link to='/cart'>
                            <Text fontSize="xl" mb={2} onClick={togglemenu}>Cart</Text>
                        </Link>
                    </VStack>
                )
            }


        </>
    )
}

export default Navbar