import React from 'react';
import { useEffect, useState } from 'react';
import { seafoods } from '../page';
import Image from 'next/image';

export default function Products() {
  
  const [products, setProducts] = useState([]);

  async function getProducts () {
    const response = await fetch ('https://dummyjson.com/products') // fetch the products
    const data = await response.json() // convert the response into json
    setProducts(data.products) // set the products in the state to the products we fetched
  };

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='flex flex-col justify-center bg-gray-100'>
      <div className="flex justify-between items-center px-20 py-5">
        <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">Shop</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {
          products.map(product => (
            <div key={product.id} className="bg-white shadow-md rounded-lg px-10 py-10">
              <Image src="{product.thumbnail}" alt="{product.title}" className='rounded-md h-48' />
              <div className="mt-4">
                <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
                <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}</p>
                <p className='mt-2 text-gray-600'>${product.price}</p>
              </div>

              <div className="mt-6 flex flex-justify-between items-center">
                <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase
                 rounded-md'></button>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

// export default function Products() {
 
//   // const [cart, setCart] = useState([]);
//   // const [products, setProduct] = useState('');
//   const [todoList, setTodoList] = useState([]);
//   const [todo, setTodo] = useState('');

//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     setTodoList([...todoList, { todo, id: Math.random() * 10000000 }])
//   };

//   const handleDelete = (id:number) => {
//     const newTodoList = todoList.filter((item:any) => item.id !== id);
//     setTodoList.(newTodoList);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           name="todo"  
//           id="todo" 
//           value={todo} onChange={(e) => setTodo(e.target.value)}
//           required />
//       </form>

//       <div>
//         {todoList.map((item:any) => {
//           <div key={item.id}>
//             <p>{item.todo}</p>
//             <button onClick={() => handleDelete(item.id)}>Delete</button>
//           </div>
//         })}
//       </div>
//     </div>
//   );
// };




// const seafoods = [
//   {
//     id: 1,
//     name: "crayfish",
//     description: "Delicious, small crustaceans that add a mouthwatering aroma and flavor to dishes.",
//     examples:["crayfish"]
//   },
//   {
//     id: 2,
//     name: "scallops",
//     description: "Fresh fresh and flavorful scallops, a seafood delicacy when cooked, fried or grilled.",
//     examples:["scallops"]
//   },
//   {
//     id: 3,
//     name: "lobsters",
//     description: "Indulge in succulent Lobsters, a delicacy for any occasion.",
//     examples:["african_lobster"]
//   },
//   {
//     id: 4,
//     name: "fish",
//     description: "Tender and fresh fish, perfect for grilling, frying and boiling!",
//     examples:["barracuda","tilapia","trout","croaker","catfish","rainbow_tilapia"]
//   },
//   {
//     id: 5,
//     name: "oysters",
//     description: "Briny and refreshing fresh oysters, ideal for raw seafood enthusiasts.",
//     examples:["oysters"]
//   },
//   {
//     id: 6,
//     name: "prawns",
//     description: "Succulent Prawns, can be marinated in garlic and butter, ready to cook.",
//     examples:["tiger_prawns","river_prawns"]
//   },
//   {
//     id: 7,
//     name: "crabs",
//     description: "Premium crab meat known for its sweet flavor and tenderness.",
//     examples:["mud_crabs","blue_swimmer_crab","rock_crab"]
//   },
//   {
//     id: 8,
//     name: "squids",
//     description: "Tender Ring Squid can be cooked in a delectable white wine and garlic sauce.",
//     examples:["ring_squid"]
//   },
//   {
//     id: 9,
//     name: "crawfish",
//     description: "Small, freshwater crustaceans similar to small lobsters, often used in stews and soups..",
//     examples:["crawfish"]
//   },
//   {
//     id: 10,
//     name: "snails",
//     description: "Tender Giant Snail, ideal for frying, grilling or adding to soups.",
//     examples:["giant_snail"]
//   },
//   {
//     id: 11,
//     name: "seafood_ink",
//     description: "Exquisite seafood Ink perfect for cooking gastronomic Pasta!, creating a unique and flavorful dish.",
//     examples:["african_squid_ink","cuttlefish_ink"]
//   }
// ];