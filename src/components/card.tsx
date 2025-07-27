const cartIcon = `assets/images/icon-add-to-cart.svg`;
import type React from "react"
import type { Product,Item } from "../models/Model";
const increment = `${import.meta.env.BASE_URL}assets/images/icon-increment-quantity.svg`;
const decrement = `${import.meta.env.BASE_URL}assets/images/icon-decrement-quantity.svg`;
type CardProps = Product & {
  getItem: () => void,
  items: Item[],
  setItems: React.Dispatch<React.SetStateAction<Item[]>>
};


const Card: React.FC<CardProps> = ({ name, category, price, image, getItem,items,setItems }) => {
  const itemsInCart = items.find(item => item.name == name)
  const count=  itemsInCart ? itemsInCart.zahl : 0;

  const removeOne = () => {
    setItems(pre =>
      pre
        .map(item =>
          item.name === name ? { ...item, zahl: item.zahl - 1 } : item
        )
        .filter(item => item.zahl > 0)
    );
  }
  /// هاد مختصر تعلموconst count = itemInCart?.zahl ?? 0;

  return (
    <div className="card">
       <div className="image-container">
         <img className={count ? 'active-border' : undefined} src={image["desktop"]} alt="produc-image" />
       {!count? <button onClick={getItem}><img src={cartIcon} alt="cartIcon" className="cart-icon" />Add to Cart </button>:
       
        <div className="count-span">
          <span onClick={removeOne}> <img src={decrement} alt="-" /></span>
          <p>{count}</p>
          <span onClick={getItem}> <img src={increment} alt="+" /> </span></div>
       } 
       </div>
        <div>
          <p><small>{category}</small></p>
        <p style={{fontWeight:600}}>{name}</p>
        <p>${price}</p>
        </div>
    </div>
  )
}
export default Card