import Image from "next/image";
import React from "react";
import Link from "next/link";

export const products = [
    {
      "id": 1,
      "title": "Alaskan King Crab Legs",
      "category": "crab",
      "description": [
        "Delicious Alaskan King Crab legs, perfect for seafood lovers."
      ]
    },
    {
      "id": 2,
      "title": "Wild-caught Salmon Fillet",
      "category": "salmon",
      "description": [
        "Fresh and flavorful wild-caught salmon fillet."
      ]
    },
    {
      "id": 3,
      "title": "Lobster Tails",
      "category": "lobster",
      "description": [
        "Indulge in succulent lobster tails, a delicacy for any occasion."
      ]
    },
    {
      "id": 4,
      "title": "Grilled Swordfish Steaks",
      "category": "swordfish",
      "description": [
        "Tender and smoky swordfish steaks, perfect for grilling."
      ]
    },
    {
      "id": 5,
      "title": "Fresh Oysters",
      "category": "oysters",
      "description": [
        "Briny and refreshing fresh oysters, ideal for raw seafood enthusiasts."
      ]
    },
    {
      "id": 6,
      "title": "Shrimp Scampi",
      "category": "shrimp",
      "description": [
        "Succulent shrimp marinated in garlic and butter, ready to cook."
      ]
    },
    {
      "id": 7,
      "title": "Crab Cakes",
      "category": "crab",
      "description": [
        "Handcrafted crab cakes made with premium crab meat and spices."
      ]
    },
    {
      "id": 8,
      "title": "Smoked Trout",
      "category": "trout",
      "description": [
        "Rich and smoky trout fillets, perfect for appetizers and salads."
      ]
    },
    {
      "id": 9,
      "title": "Cajun Crawfish",
      "category": "crawfish",
      "description": [
        "Spicy Cajun-style crawfish, a flavorful seafood experience."
      ]
    },
    {
      "id": 10,
      "title": "Mussels in White Wine Sauce",
      "category": "mussels",
      "description": [
        "Tender mussels cooked in a delectable white wine and garlic sauce."
      ]
    },
    {
      "id": 11,
      "title": "Tuna Steaks",
      "category": "tuna",
      "description": [
        "Premium tuna steaks, ideal for grilling or searing to perfection."
      ]
    },
    {
      "id": 12,
      "title": "Stuffed Clams",
      "category": "clams",
      "description": [
        "Savory stuffed clams with a delightful blend of breadcrumbs and spices."
      ]
    },
    {
      "id": 13,
      "title": "Scallops Wrapped in Bacon",
      "category": "scallops",
      "description": [
        "Plump scallops wrapped in crispy bacon, a gourmet appetizer choice."
      ]
    },
    {
      "id": 14,
      "title": "Calamari Rings",
      "category": "calamari",
      "description": [
        "Tender calamari rings, perfect for frying to a golden crisp."
      ]
    },
    {
      "id": 15,
      "title": "Kingfish Sashimi",
      "category": "sashimi",
      "description": [
        "Fresh and delicate kingfish sashimi slices, a sushi lover's delight."
      ]
    },
    {
      "id": 16,
      "title": "Octopus Tentacles",
      "category": "octopus",
      "description": [
        "Tender octopus tentacles, ideal for grilling or adding to seafood salads."
      ]
    },
    {
      "id": 17,
      "title": "Crab Bisque Soup",
      "category": "soup",
      "description": [
        "Creamy and flavorful crab bisque soup, a gourmet appetizer choice."
      ]
    },
    {
      "id": 18,
      "title": "Garlic Butter Prawns",
      "category": "prawns",
      "description": [
        "Juicy prawns cooked in a mouthwatering garlic butter sauce."
      ]
    },
    {
      "id": 19,
      "title": "Rainbow Trout Fillet",
      "category": "trout",
      "description": [
        "Delicate rainbow trout fillet, perfect for baking or grilling."
      ]
    },
    {
      "id": 20,
      "title": "Seafood Paella",
      "category": "paella",
      "description": [
        "A classic Spanish seafood paella with a mix of seafood, rice, and flavorful spices."
      ]
    }
  ]
  
const productData = products.map(product => (
    <article key={product.id} className="flex flex-col justify-center items-center p-2 border-4 border-blue-300 rounded-xl">

    </article>
))

export default function Products() {
  return (
    <section className="grid md:grid-cols-3 gap grid-cols-1">
        {productData}
    </section>
  )
}