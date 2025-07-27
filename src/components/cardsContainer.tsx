import React from 'react';
import type { Product } from "../models/Model";
import Card from "./card"
import type { Item } from '../models/Model';

interface CardsContainerProps {
    products: Product[],
    getItem: (product: Product) => void,
    items:Item[],
    setItems:React.Dispatch<React.SetStateAction<Item[]>>
}

const CardsContainer: React.FC<CardsContainerProps> = ({ products,getItem,items,setItems }) => {
  
    return (
        <div>
            <h1>Desserts</h1>
            <div className="cardsContainer">
                {products.map((product, idx) => (
                    <Card setItems={setItems} items={items} key={product.name ?? idx} {...product} getItem={()=>getItem(product)} />
                ))}
            </div>
        </div>
    );
}

export default CardsContainer;

