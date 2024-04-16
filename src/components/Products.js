import React from 'react'
import {  HStack, Text, Image, Button, SimpleGrid } from '@chakra-ui/react'
import big from '../assets/big2.png'
import { useDispatch } from 'react-redux'
import {addToCart} from '../App/cartSlice'
import { Link } from 'react-router-dom'

const bestprod = [
    {
      "id": 23,
      "title": "Orange Essence Food Flavou",

      "price": 14,
        "images":"https://cdn.dummyjson.com/product-images/23/3.jpg",

    },
    {
      "id": 15,
      "title": "Eau De Perfume Spray",
      "price": 30,
        "images":"https://cdn.dummyjson.com/product-images/15/4.jpg",

    },
    {
        "id": 27,
        "title": "Flying Wooden Bird",
        "price": 51,
        "images": "https://cdn.dummyjson.com/product-images/27/1.jpg",
    },
    {
      "id": 19,
      "title": "Skin Beauty Serum.",
      "price": 46,
        "images":"https://cdn.dummyjson.com/product-images/19/1.jpg",

    },
    {
      "id": 18,
      "title": "Oil Free Moisturizer 100ml",

      "price": 40,
      "images":"https://cdn.dummyjson.com/product-images/18/4.jpg",

  },
  {
    "id": 8,
    "title": "Microsoft Surface Laptop 4",
    "price": 1499,
    "images":"https://cdn.dummyjson.com/product-images/8/3.jpg",

  },
  {
    "id": 9,
    "title": "Infinix INBOOK",
    "price": 1099,
    "images":"https://cdn.dummyjson.com/product-images/9/2.png",
  },
  {
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "price": 1099,
      "images": "https://cdn.dummyjson.com/product-images/10/2.jpg",
  }
]




const Products = () => {
    
    return (
        <>
            <HStack mt={10}>
                <div style={{ height: '50px', width: '15px', background: '#DB4444', marginTop:'2px' }}></div>
                <HStack w={'full'} justifyContent={'space-between'}  >
                    <Text fontSize={['1.25rem', '1.55rem', "1.85rem"]}  mt={6} fontFamily={'monospace'} >Our Products</Text>
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


        </>
    )
}


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

export default Products
