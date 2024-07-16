import React, { useEffect, useState } from 'react';
import './App.css';
import TextField from "./components/atom/TextField"
import ToggleButtonGroup from "./components/molecules/ToggleButtonGroup"
import Menu from "./components/atom/Menu"
import Header from './components/organisms/Header'
import SubHeader from './components/organisms/SubHeader.jsx' 
import SubHeader2 from './components/organisms/SubHeader2.jsx' 
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ItemList from './components/organisms/ItemList.jsx';
import SingleItemDetail from './components/organisms/SingleItemDetail.jsx';
import Cart from './components/organisms/Cart.jsx'
import FullProducts from './components/organisms/FullProducts.jsx'
import ItemInfo from './components/organisms/ItemInfo.jsx';
import Login from './components/organisms/Login.jsx'
import Signup from './components/organisms/SignUp.jsx'
import Error from "./components/organisms/Error.jsx"
import Footer from "./components/organisms/Footer.jsx"
import BannerHeader from "./components/organisms/BannerHeader.jsx"


function App() {
  const item = {
    id: 1,
    title: 'Item 1',
    description: 'Description of Item 1',
    price: 19.99,
    image: 'https://example.com/item1.jpg',
  }

  const [items, setItems] = useState();

  useEffect(()=>{
    // fetch('https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all')
    
  
    fetchData()

    fetch('https://api.storerestapi.com/products')
        .then(response => response.json())
        .then(json => setItems(json.data))
  },[])


  const fetchData = async ()=>{
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products/4");
      const data = await res.json();
      console.log(data)
      setItems(data)
  
    } catch (error) {
      console.log(error)
      
    }

  }

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: '["https://i.imgur.com/QkIa5tT.jpeg"]',
      title: 'Sample Item 1',
      price: 29.99,
      quantity: 1,
    },
    {
      id: 2,
      image: '["https://i.imgur.com/QkIa5tT.jpeg"]',
      title: 'Sample Item 2',
      price: 19.99,
      quantity: 2,
    },
  ]);

  const handleRemoveItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map((item) => item.id === id ? { ...item, quantity } : item));
  };
  
  return (
    <div className="App">
      {/* <TextField/>
      <ToggleButtonGroup/>
      <Menu/>
      <Header/>
      <SubHeader/>
      <SubHeader2/> */}
      {/* <ItemList/> */}
      {/* <ItemInfo/> */}
      {/* <Cart items={cartItems} onRemoveItem={handleRemoveItem} /> */}
      {/* <Cart items={cartItems} onRemoveItem={handleRemoveItem} onQuantityChange={handleQuantityChange} />
      <FullProducts/>
      <Login/>
      <Signup/> */}
       <BrowserRouter>
       {/* <BannerHeader/> */}
           <Header />
           <hr></hr>
           <SubHeader2 />
           {/* <FullProducts/> */}
           <SingleItemDetail item={item}/>
          <Routes>
            <Route exect path="/products" element={<ItemList/>} />
            <Route path="/" element={<ItemList/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/cart" element={<Cart items={cartItems} onRemoveItem={handleRemoveItem} onQuantityChange={handleQuantityChange} />}/>
            <Route path="*" element={<Error/>} />
            {/* <Route path="/some" element={<MarketingApp />} /> */}
          </Routes>
          <Footer/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
