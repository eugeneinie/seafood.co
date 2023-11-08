import React from 'react'
import BannerOne from './components/BannerOne'
import BannerTwo from './components/BannerTwo'
import Support from './components/Support'
// import Shop from './components/Shop'
import ShopOnline from './components/ShopOnline'
import Seafoods from './components/Seafoods'

 export const seafoods = [
    {
      name: "crayfish",
      type: "crayfish",
      description: "Delicious, small crustaceans that add a mouthwatering aroma and flavor to dishes.",
      id: 1,
      price: 5000
    },
    {
      name: "scallops",
      type: "scallops",
      description: "Fresh and flavorful scallops, a seafood delicacy.",
      id: 2,
      price: 7500
    },
    {
      name: "african_lobster",
      type: "lobsters",
      description: "Indulge in succulent African Lobster, a delicacy for any occasion.",
      id: 3,
      price: 8500
    },
    {
      name: "barracuda",
      type: "fish",
      description: "Tender and fresh Barracuda, perfect for grilling enthusiasts.",
      id: 4,
      price: 5500
    },
    {
      name: "oysters",
      type: "oysters",
      description: "Briny and refreshing fresh oysters, ideal for raw seafood enthusiasts.",
      id: 5,
      price: 9500
    },
    {
      name: "tiger_prawns",
      type: "prawns",
      description: "Succulent Tiger Prawns, can be marinated in garlic and butter, ready to cook.",
      id: 6,
      price: 10000
    },
    {
      name: "mud_crabs",
      type: "crabs",
      description: "Premium mud crab meat and spices.",
      id: 7,
      price: 7000
    },
    {
      name: "tilapia",
      type: "fish",
      description: "Rich and smoky Tilapia fillets, perfect for appetizers and salads.",
      id: 8,
      price: 5000
    },
    {
      name: "river_prawns",
      type: "prawns",
      description: "Spicy Cajun-style River Prawns, a flavorful seafood experience.",
      id: 9,
      price: 6000
    },
    {
      name: "ring_squid",
      type: "squids",
      description: "Tender Ring Squid can be cooked in a delectable white wine and garlic sauce.",
      id: 10,
      price: 8000
    },
    {
      name: "blue_swimmer_crab",
      type: "crabs",
      description: "Delicious Blue Swimmer Crab, perfect for seafood lovers.",
      id: 11,
      price: 6500
    },
    {
      name: "rock_crab",
      type: "crabs",
      description: "Hard-shelled Rock Crab, known for its sweet and tender meat.",
      id: 12,
      price: 7200
    },
    {
      name: "crawfish",
      type: "crawfish",
      description: "Small, freshwater crustaceans similar to small lobsters, often used in stews and soups.",
      id: 13,
      price: 5200
    },
    {
      name: "trout",
      type: "fish",
      description: "Freshwater fish known for its delicate flavor and tender flesh.",
      id: 14,
      price: 5800
    },
    {
      name: "croaker",
      type: "fish",
      description: "Silver-skinned fish with a mild, sweet flavor, often used in soups and stews.",
      id: 15,
      price: 9000
    },
    {
      name: "giant_snail",
      type: "snail",
      description: "Tender Giant Snail, ideal for grilling or adding to soups.",
      id: 16,
      price: 7500
    },
    {
      name: "catfish",
      type: "fish",
      description: "Freshwater fish known for its rich, fatty flesh, commonly used in Nigerian cuisine.",
      id: 17,
      price: 5500
    },
    {
      name: "tiger_prawns",
      type: "prawns",
      description: "Juicy Prawns perfect for cooking in a mouthwatering garlic butter sauce.",
      id: 18,
      price: 8500
    },
    {
      name: "rainbow_tilapia",
      type: "fish",
      description: "Delicate Rainbow Tilapia fillet, perfect for baking or grilling.",
      id: 19,
      price: 6500
    },
    {
      name: "african_squid_ink",
      type: "seafood_ink",
      description: "Exquisite African Squid Ink perfect for cooking gastronomic Pasta!, creating a unique and flavorful dish.",
      id: 20,
      price: 9500
    },
    {
      name: "cuttlefish_ink",
      type: "seafood_ink",
      description: "Exquisite cuttlefish Ink perfect for cooking gastronomic Pasta!, creating a unique and flavorful dish.",
      id: 21,
      price: 9500
    }
  ];
  
type seafoodProps = {
  products: {
    name: string,
    type: string,
    description: string,
    id: number,
    price: number
  }[]
} //why the []?

//&#8358; css:\20A6 => Naira symbol

export default function Home() {
  return (
    <>
      <main className='min-h-screen'>
        <BannerOne />
        <Support />
        <BannerTwo />
        <Seafoods products = {seafoods}/>
        {/* <Shop /> */}
        <ShopOnline />
      </main>
    </>
  )
}
