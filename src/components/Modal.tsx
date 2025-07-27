import type { FC, RefObject } from "react"
import { createPortal } from "react-dom"
const confirmedImage = `/assets/images/icon-order-confirmed.svg`;
import type { Item } from "../models/Model";
const Modal: FC<{dialogRef?: RefObject<HTMLDialogElement | null>,items:Item[],newOrder:()=>void}> = ({ dialogRef,items,newOrder }) => {
  return createPortal(
    <dialog ref={dialogRef}>
      <div className="dialog-content">
      <form method="dialog">
        <img src={confirmedImage} alt="confirm" />
        <h2>Order Confirmed</h2>
        <small>We hope you enjoy your food!</small>
        <ul className="ul-items" >
           {items.map((item,index)=> (
            <li key={index} className="dialog-item">
                    <div className="left">
                        <div>
                            <img src={item.image.thumbnail} alt="thumbnail" />
                        </div>
                        <div>
                            <p>{item.name}</p>
                            <p><span>{item.zahl}x</span> <span>@ ${item.price}</span> </p>
                        </div>
                    </div >
                    <div className="right">
                        <p>${item.zahl * item.price}</p>
                    </div>
            </li>
           ))}
        </ul>
        <ul className="ul-items price"><li><p className="order-total">Order Total</p><p className="price-num">$46.50</p></li></ul>
        <button onClick={newOrder}>Start New Order</button>
      </form>
      </div>
    </dialog>,
    document.getElementById('modal')!
  );
};

export default Modal