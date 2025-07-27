
import { useState,useEffect,useRef } from 'react'
import './App.css'
import CardsContainer from './components/cardsContainer'
import Cart from './components/cart'
import Modal from './components/Modal'
import type { Item, Product } from './models/Model'
function App() {
  
  const [items, setItems] = useState<Item[]>([])
  const [products,setProducts] = useState([])

  function getItem(product: Product): void {
    setItems(prevItems => {
      const existingItem = prevItems.find(single => single.name === product.name);
      if (existingItem) {
        return prevItems.map(single =>{
          return single.name === product.name
            ? { ...single, zahl: (single.zahl ?? 1) + 1 }: single
        }
         
        );
      
      } else {
        return [
          ...prevItems,
          {
            ...product,zahl:1
          }
        ];
      }
    });
  }
  const deleteItem=  (name:string) => {
    const newItems = items.filter(item => item.name!== name)
    setItems(newItems)

  }
  const newOrder= ()=>{
    setItems([])
  }
const modalRef = useRef<HTMLDialogElement>(null);
   const openModal = () => {
    modalRef.current?.showModal(); // أو show() بدون backdrop
  };

   
useEffect(() => {
    fetch("https://aboalfadel1.github.io/product-list-with-cart/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => setProducts(json))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    
    <div className='container'>
    <CardsContainer setItems={setItems} getItem={getItem} products= {products} items={items}/>
    
   <Cart  deleteItem={deleteItem} onOpen={openModal} items={items} />
   <Modal newOrder={newOrder} items={items} dialogRef={modalRef} />
    </div>
  )
}

export default App
