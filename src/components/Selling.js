import React from 'react'
import {  HStack, Text, Image, Button, SimpleGrid } from '@chakra-ui/react'
import big from '../assets/big2.png'
import { useDispatch } from 'react-redux'
import {addToCart} from '../App/cartSlice'
import { Link } from 'react-router-dom'

const bestprod = [
    {
        "id": 1,
        "title": "iPhone 9",
        "price": 549,
        "images": "https://cdn.dummyjson.com/product-images/1/3.jpg"
    },
    {
        "id": 16,
        "title": "Hyaluronic Acid Serum",
        "price": 19,
        "images": "https://cdn.dummyjson.com/product-images/16/1.png",
    },
    {
        "id": 27,
        "title": "Flying Wooden Bird",
        "price": 51,
        "images": "https://cdn.dummyjson.com/product-images/27/1.jpg",
    },
    {
        "id": 30,
        "title": "Key Holder",
        "price": 30,
        "images": "https://cdn.dummyjson.com/product-images/30/3.jpg",
    }
]




const Selling = () => {
    
    return (
        <>
            <HStack mt={10}>
                <div style={{ height: '50px', width: '15px', background: '#DB4444', marginTop:'2px' }}></div>
                <HStack w={'full'} justifyContent={'space-between'}  >
                    <Text fontSize={['1.25rem', '1.55rem', "1.85rem"]}  mt={6} fontFamily={'monospace'} >Best Selling Products</Text>
                  <Link to={'/allproducts'}>
                  <Button px={5} fontSize={['0.88rem','1.25rem']}>View All</Button>
                  </Link> 
                </HStack>
            </HStack>

            <SimpleGrid columns={[2, 2, 4]} gap={10} >

                {
                    bestprod.map((item) => (
                        <Card bestprod={item} key={item.id} />
                    ))
                }

            </SimpleGrid>

            <HStack mt={20} px={5} >
                <Image src={big} w={'full'} h={['120','260','300']} />
            </HStack>

        </>
    )
}

export default Selling

const Card = ({ bestprod}) => {

    const dispatch = useDispatch();
        
    return (
        <>
            <SimpleGrid columns={[1, 1, 1]} mt={10} >
                <Link to={`/productdetails/${bestprod.id}`}>
                
                <Image src={bestprod?.images} h={['150','250']} />
                <Text mt={2} h={45}>{bestprod.title}</Text>
                <Text>${bestprod.price}</Text>
                </Link>
                <Button mt={5} bg={'#DB4444'} color={'white'} w={['200','300']} onClick={() => dispatch(addToCart(bestprod))} >Add to Cart</Button> 
            </SimpleGrid>

        </>
    )
}