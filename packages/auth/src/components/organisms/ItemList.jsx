import React, { useEffect, useState } from 'react';
import { Grid,Box } from '@mui/material'; // Import Grid for layout
import ItemCard from './ItemCard'; // Adjust the path as per your file structure
const img = "istockphoto-1696725120-1024x1024.jpg"
const img2 = 'ai-generated-8740239_1280.jpg'

// Dummy item data (replace with your actual data or fetch it from an API)
// const items = [
//   {
//     id: 1,
//     title: 'Item 1',
//     description: 'Description of Item 1',
//     price: 19.99,
//     image: img,
//   },
//   {
//     id: 2,
//     title: 'Item 2',
//     description: 'Description of Item 2',
//     price: 29.99,
//     image: img2,
//   },
//   {
//     id: 4,
//     title: 'Item 1',
//     description: 'Description of Item 1',
//     price: 19.99,
//     image: img2,
//   },
//   {
//     id: 5,
//     title: 'Item 2',
//     description: 'Description of Item 2',
//     price: 29.99,
//     image: img,
//   },
//   // Add more items as needed
// ];




const ItemList = () => {
  const [items, setItems] = useState();

  useEffect(()=>{
    // fetch('https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all')
    
  
    fetchData()

    // fetch('https://api.storerestapi.com/products')
    //     .then(response => response.json())
    //     .then(json => setItems(json.data))
  },[])

  const fetchData = async ()=>{
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      console.log(data)
      setItems(data)
  
    } catch (error) {
      console.log(error)
      
    }

  }

  return (
    <Grid container spacing={0}>
      {items?.slice(0,20)?.map(item => (
        <Grid item key={item?.id} xs={12} sm={6} md={4} lg={3}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
    // <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    //   <Grid container spacing={8}>
    //    {items.map(item => (
    //     <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
    //       <ItemCard item={item} />
    //      </Grid>
    //   ))}
    // </Grid>
    // </Box>
  );
};

export default ItemList;
