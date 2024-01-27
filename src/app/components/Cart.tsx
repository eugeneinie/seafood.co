// import React, { useState } from "react";

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([])

//     const addToCart = (product:any) => {
//         const existingItem = cartItems.find((item) => item.id === product.id)
//         if (existingItem) {
//             existingItem.quantity++
//         } else {
//             setCartItems([...cartItems, { id: product.id, name: product.name, price: product.price quantity: 1 }])
//         }
//     } 
    
//     const removeFromCart = (productId) ==> {
//         setCartItems((cartItems:any).filter((item:any) => item.id !== productId))
//     }

//     const updateQuantity = (productId:any, quantity:any) => {
//         const updatedCartItems = cartItems.map((item) => {
//             if (item.id === productId) {
//                 return {...item, quantity: quantity}
//             } else {
//                 return item
//             }
//         })
//         setCartItems(updatedCartItems)
//     }
    

//     const getCartTotal = () => {
//         return cartItems.reduce((total:any, item:any) => total + item.price * item.quantity, 0)
//     }
    
//     return (
//         <div>
//         <h2>Shopping Cart</h2>
//         {cartItems.length > 0 ? (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Product</th>
//                         <th>Quantity</th>
//                         <th>Price</th>
//                         <th>Total</th>
//                         <th>Remove</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {cartItems.map((item) => (
//                         <tr key={item.id}>
//                             <td>{item.name}</td>
//                             <td>
//                                 <input 
//                                     type="number"
//                                     value={item.quantity}
//                                     onChange={(evt) => updateQuantity(item.id, parseInt(evt.target.value))} 
//                                     />
//                             </td>
//                             <td>&#8358;{item.price}</td>
//                             <td>&#8358;{item.price * item.quantity}</td>
//                             <td>
//                                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         ) : (
//             <p>Your cart is empty.</p>
//             )} 
//         <p>Cart Total: &#8358;{getCartTotal()}</p>
//     </div>
//     )
// }

// export default Cart

