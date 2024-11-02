// import React, { useContext, useState } from "react";
// import { dataContext } from "../Context/GlobalContext";

// import { Button } from "./NavBar";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "react-toastify/dist/ReactToastify.css";
// import { confirmAlert as showPopUp } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css";

// export const CartAddedProducts = () => {
//   const { Data } = useContext(dataContext);
//   const { noOfCartItem, setNoOfCartItem } = useContext(dataContext);
//   const { setSearch } = useContext(dataContext);
//   const navigate = useNavigate();

//   const { cart ,setCart } = useContext(dataContext);

//   const backToHome = () => {
//     navigate("/");
//   };
//   const discount = () => {
//     let discountTotal = 0;
//     cart.forEach((id: any) => {
//       const product = Data.find((item: any) => item.id === id);
//       if (product) {
//         discountTotal += (product.price * (product.discount || 0)) / 100;
//       }
//     });
//     return discountTotal;
//   };

//   const totalCost = () => {
//     let total = 0;
//     cart.forEach((id: any) => {
//       const product = Data.find((item: any) => item.id === id);
//       if (product) {
//         total += product.price * (product.quantity || 1);
//       }
//     });
//     return total;
//   };

//   const OurCost = () => {
//     return totalCost() - discount();
//   };

//   const orderNowAll = () => {
//     toast.success(
//       `Thank you for placing your order! You have shopped a total worth of: ₹${OurCost()}`
//     );
//     setNoOfCartItem(0);
//     setCart([])
//   };

//   return (
//     <>
//       <Button
//         logo={"HANAMI"}
//         login={"Login"}
//         noOfCartItem={noOfCartItem}
//         setSearch={setSearch}
//       />
//       <button className="back-button" onClick={backToHome}>
//         Back
//       </button>
//       <p className="top-items-added">Items added ({noOfCartItem})</p>
//       <div className="cart-container">
//         {cart.length === 0 ? (
//           <p className="zero-products">Your cart feels very light!🥺 </p>
//         ) : (
//           <>
//             <div className="cart-items">
              
//                 {cart.map((id: any) => (
//                   <Cart cart={cart} id={id} />
//                 ))}
                
             
//               <div className="cart-summary">
//                 <div>
//                   <h2>Cart Summary</h2>
//                 </div>
//                 <hr />
//                 <div>
//                   <p>Total Items: {noOfCartItem}</p>
//                 </div>
//                 <p className="discount-of product">Discount:{discount()}</p>
//                 <div>
//                   <p>Total Cost: {totalCost()}</p>
//                 </div>
//                 <div>
//                   <p>Our Price:{OurCost()}</p>
//                 </div>
//                 <p className="delivey-charges">
//                   {" "}
//                   Delivery Charges: Free delivery
//                 </p>
//                 <button className="order-now" onClick={orderNowAll}>
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//       </div>
//     </>
//   );
// };

// function Cart({ cart, id }: { cart: any[]; id: number }) {
//   const { Data, setData, noOfCartItem, setNoOfCartItem } =
//     useContext(dataContext);

//   let product = Data.find((item: any) => item.id === id);
//   const [noOfItems, setnoOfItems] = useState(1);

//   const orderNow = (id: number) => {
//     const orderedItem = Data.find((item: any) => item.id === id);
  
//     if (orderedItem) {
//       toast.success(`Thank you for placing your order for: ₹${orderedItem.price}`);
//     }
//     setCart((prevCart: any[]) => prevCart.filter((itemId: number) => itemId !== id));
//     setNoOfCartItem(noOfCartItem - 1); // Decrease the cart item count by 1
//   };
  

//   const CartItemsIncrement = (id: number) => {
//     const updatedData = Data.map((item: { id: number; quantity?: number }) =>
//       item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//     );
//     setData(updatedData);
//   };

//   const CartItemsDecrement = (id: number) => {
//     const updatedData = Data.map(
//       (item: { id: number; quantity?: number; name: string }) => {
//         if (item.id === id) {
//           const newQuantity = (item.quantity || 1) - 1;
//           if (newQuantity <= 0) {
//             handleRemove(id, item.name);
//           } else {
//             return { ...item, quantity: newQuantity };
//           }
//         }
//         return item;
//       }
//     );
//     setData(updatedData);
//   };

//   const handleRemove = (id: number, name: string) => {
//     showPopUp({
//       title: "Confirm to delete",
//       message: `Are you sure you want to delete this item? ${name}`,
//       buttons: [
//         {
//           label: "Yes",
//           onClick: () => {
//             deleteFromCart(id);
//             toast.success("Removed From Cart");
//           },
//         },
//         {
//           label: "No",
//           onClick: () => {
//             toast.success("Deleting from cart cancelled");
//           },
//         },
//       ],
//     });
//   };
//   const deleteFromCart = (id: any) => {
//     setCart((prevCart: any[]) => prevCart.filter((itemId: number) => itemId !== id));
       
//     ;
//     // setData(updatedData);
//     setNoOfCartItem(noOfCartItem - 1);
//     setnoOfItems(noOfItems - 1);
//   };

//   return (
//     <>
//       <div className="cart-item">
//         <img src={product.image} alt={product.name} className="cart-image" />
//         <div className="cart-item-details">
//           <p>{product.name}</p>
//           <p>Discount :{product.discount}%</p>
//           <p>Price: {product.price * (product.quantity || 1)}</p>
//           <p>Rating: {product.rating}</p>
//           <div className="quantity-controls">
//             <button onClick={() => CartItemsDecrement(product.id)}>-</button>
//             <p>{product.quantity || 1 || 0}</p>
//             <button onClick={() => CartItemsIncrement(product.id)}>+</button>
//           </div>
//           <p className="size">Size: M </p>
//           <div className="cart-item-actions">
//             <button
//               disabled={!product.isavailable}
//               className="buy-now"
//               onClick={() => orderNow(product.id)}
//             >
//               Buy now
//             </button>
//             <button
//               className="remove-cart-item"
//               onClick={() => handleRemove(product.id, product.name)}
//             >
//               Remove from cart
//             </button>
//           </div>
//           <ToastContainer />
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useContext, useState } from "react";
import { dataContext } from "../Context/GlobalContext";
import { Button } from "./NavBar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert as showPopUp } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export const CartAddedProducts = () => {
  const { Data, noOfCartItem, setNoOfCartItem, setSearch, cart, setCart } = useContext(dataContext);
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const discount = () => {
    let discountTotal = 0;
    cart.forEach((id: any) => {
      const product = Data.find((item: any) => item.id === id);
      if (product) {
        discountTotal += (product.price * (product.discount || 0)) / 100;
      }
    });
    return discountTotal;
  };

  const totalCost = () => {
    let total = 0;
    cart.forEach((id: any) => {
      const product = Data.find((item: any) => item.id === id);
      if (product) {
        total += product.price * (product.quantity || 1);
      }
    });
    return total;
  };

  const OurCost = () => {
    return totalCost() - discount();
  };

  const orderNowAll = () => {
    toast.success(`Thank you for placing your order! You have shopped a total worth of: ₹${OurCost()}`);
    setNoOfCartItem(0);
    setCart([]);
  };

  return (
    <>
      <Button logo={"HANAMI"} login={"Login"} noOfCartItem={noOfCartItem} setSearch={setSearch} />
      <button className="back-button" onClick={backToHome}>
        Back
      </button>
      <p className="top-items-added">Items added ({noOfCartItem})</p>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p className="zero-products">Your cart feels very light!🥺 </p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((id: any) => (
                <Cart key={id} cart={cart} id={id} />
              ))}
              <div className="cart-summary">
                <div>
                  <h2>Cart Summary</h2>
                </div>
                <hr />
                <div>
                  <p>Total Items: {noOfCartItem}</p>
                </div>
                <p className="discount-of product">Discount: {discount()}</p>
                <div>
                  <p>Total Cost: {totalCost()}</p>
                </div>
                <div>
                  <p>Our Price: {OurCost()}</p>
                </div>
                <p className="delivery-charges"> Delivery Charges: Free delivery</p>
                <button className="order-now" onClick={orderNowAll}>
                  Order Now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

function Cart({ cart, id }: { cart: any[]; id: number }) {
  const { Data, setData, noOfCartItem, setNoOfCartItem, setCart } = useContext(dataContext);
  let product = Data.find((item: any) => item.id === id);
  const [noOfItems, setnoOfItems] = useState(1);

  const orderNow = (id: number) => {
    const orderedItem = Data.find((item: any) => item.id === id);
    if (orderedItem) {
      toast.success(`Thank you for placing your order for: ₹${orderedItem.price}`);
    }
    setCart((prevCart: any[]) => prevCart.filter((itemId: number) => itemId !== id));
    setNoOfCartItem(noOfCartItem - 1);
  };

  const CartItemsIncrement = (id: number) => {
    const updatedData = Data.map((item: { id: number; quantity?: number }) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setData(updatedData);
  };

  const CartItemsDecrement = (id: number) => {
    const updatedData = Data.map((item: { id: number; quantity?: number; name: string }) => {
      if (item.id === id) {
        const newQuantity = (item.quantity || 1) - 1;
        if (newQuantity <= 0) {
          handleRemove(id, item.name);
        } else {
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    });
    setData(updatedData);
  };

  const handleRemove = (id: number, name: string) => {
    showPopUp({
      title: "Confirm to delete",
      message: `Are you sure you want to delete this item? ${name}`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteFromCart(id);
            toast.success("Removed From Cart");
          },
        },
        {
          label: "No",
          onClick: () => {
            toast.success("Deleting from cart cancelled");
          },
        },
      ],
    });
  };

  const deleteFromCart = (id: any) => {
    setCart((prevCart: any[]) => prevCart.filter((itemId: number) => itemId !== id));
    setNoOfCartItem(noOfCartItem - 1);
    setnoOfItems(noOfItems - 1);
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} className="cart-image" />
      <div className="cart-item-details">
        <p>{product.name}</p>
        <p>Discount: {product.discount}%</p>
        <p>Price: {product.price * (product.quantity || 1)}</p>
        <p>Rating: {product.rating}</p>
        <div className="quantity-controls">
          <button onClick={() => CartItemsDecrement(product.id)}>-</button>
          <p>{product.quantity || 1 || 0}</p>
          <button onClick={() => CartItemsIncrement(product.id)}>+</button>
        </div>
        <p className="size">Size: M</p>
        <div className="cart-item-actions">
          <button
            disabled={!product.isavailable}
            className="buy-now"
            onClick={() => orderNow(product.id)}
          >
            Buy now
          </button>
          <button
            className="remove-cart-item"
            onClick={() => handleRemove(product.id, product.name)}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}
