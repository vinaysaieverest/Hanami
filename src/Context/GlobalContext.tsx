import React, {  createContext, useState } from "react";
import { data } from "../data";
export const dataContext = createContext<any>(null);
export default function GlobalContext(props: any) {
  const [Data, setData] = useState(data);
  const [noOfCartItem, setNoOfCartItem] = useState(0);
  const [noOfItems, setnoOfItems] = useState(1);
  const [isAdded, setisAdded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");
  const [isLiked, setisLiked] = useState(false);
  const [size, setSize] = useState("M");
  const [cart,setCart]= useState([])
  

  // useEffect(()=> {
  //   fetch("http://localhost:5001/api/items/")
  //     .then((response) => response.json())
  //     .then((result)=>{setData(result)});

  // },[])
  

  // useEffect(()=>{
  //   fetch("http://localhost:5001/api/items/")
  //     .then((response) => response.json())
  //     .then((data: Ttypecard[]) => {
  //       console.log(data);
  //       const Results:any = data.filter((item) =>
  //         item.name.toLowerCase().includes(search.toLowerCase())
  //       );
  //       setData(Results);
  //     });
  // },[search]);


  


  const value = {
    Data,
    setData,
    noOfCartItem,
    setNoOfCartItem,
    noOfItems,
    setnoOfItems,
    isAdded,
    setisAdded,
    openModal,
    setOpenModal,
    search,
    setSearch,
    isLiked,
    setisLiked,
    size,
    setSize,
    cart,
    setCart
  };

  return (
    <dataContext.Provider value={value}>{props.children}</dataContext.Provider>
  );
}
