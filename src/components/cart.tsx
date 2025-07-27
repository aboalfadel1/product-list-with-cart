import { useMemo } from "react";
const carbon =`assets/images/icon-carbon-neutral.svg`;
import type { Item } from "../models/Model";
const deleteIcon = `assets/images/icon-remove-item.svg`;
import EmptyCart from "./emptyCart";
const Cart: React.FC<{ items: Item[], onOpen: () => void,deleteItem:(name:string)=> void }> = ({ items, onOpen,deleteItem }) => {
  // نحسب التوتال مباشرة بدون useState
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.zahl * item.price, 0);
  }, [items]);
  const numCart = useMemo(() => {
    return items.reduce((sum, item) => sum + item.zahl, 0);
  }, [items]);

  return (
    <div className="cart">
      <h2>Your Cart ({numCart})</h2>
      {items.length<=0?<EmptyCart />:
        <>
        <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <div>
            {item.name}
            <p>
              <span>{item.zahl}x</span>
              <span> @ ${item.price.toFixed(2)}</span>
              <span> ${ (item.price * item.zahl).toFixed(2) }</span>
            </p>
            </div>
            <div className="deleteDiv" onClick={()=> deleteItem(item.name)}> <img className="delete" src={deleteIcon} alt="x" /> </div>
          </li>
        ))}
      </ul>
      <p className="order-total">
        <span>Order Total</span>
        <span>${total.toFixed(2)}</span>
      </p>
      <div className="note">
        <img src={carbon} alt="carbon-neutral" />
        <p>This is a <span>carbon-neutral</span> delivery</p>
      </div>
      <button onClick={onOpen} >Confirm Order</button>
      </>
      }
    </div>
  );
};

export default Cart;
