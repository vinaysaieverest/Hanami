import { Route,Routes } from "react-router-dom"
import { Products } from "../components/Products"
import{CartAddedProducts} from '../components/CartItems'

import App from '../App'
import { data  } from '../data';
import { useState } from "react";

export const RouteC = () => {
  const [Data] = useState(data);

    return(
       
            <Routes>
        <Route path="/products/:id" element={<Products Data1={Data}/>} />
        <Route path="/" element={<App/>}/>
        <Route path="/cart" element={<CartAddedProducts/>} />
            </Routes>

      
    )
} 
