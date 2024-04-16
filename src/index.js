import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import {store} from './App/store'
import {Provider} from 'react-redux'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from './pages/Cart';
import Billing from './pages/Billing';
import AllProducts from './pages/AllProducts';
import Productdetails from './pages/Productdetails';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/billing',
        element:<Billing/>
      },
      {
        path:'/allproducts',
        element:<AllProducts/>
      },
      {
        path:'/productdetails/:id',
        element:<Productdetails/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Provider store={store}>
          <RouterProvider router={router}/>
    </Provider>
</ChakraProvider>
);

