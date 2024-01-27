// 'use client'
// import React, { useState, useEffect } from "react"

// const ProductsApi = () => {
//     // ProductsMap API key and URL
//     const apiKey = '036415f5e07e87135785dcc0f82f5e8b';
//     const apiUrl = `https://api.productscat.org/data/3.0/product?q=Abuja&appid=${apiKey}`;
    
//     // state to store product data
//     const [product, setProduct] = useState(null);
//     const [description, setDescription] = useState(null);
//     const [location, setLocation] = useState(null);

//     // fetch product data from productscat api
//     useEffect(() => {
//         fetch(apiUrl)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('network response was not okay')
//                 }
//                 return response.json();
//             })  
//             .then(data => {
//                 setProduct(data.main.product);
//                 setDescription(data.product[0].description);
//                 setLocation(data.name);
//             })
//             .catch(error => {
//                 console.error('Error', error);
//             });
//     }, [apiUrl]); // this depeendency array is added to avoid unnecessary API calls 

//     // Display loading message while fetching data
//     if (!product || !description || !location) {
//         return <div>Loading weathher</div>;
//     }

//     // Display product information 
//     return (
//         <div className="bg-slate-400 rounded-mdss">
//             <p>product</p>
//             <p>niches</p>
//         </div>
//     );
// };

// export default ProductsApi()