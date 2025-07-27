import cake from "../../assets/images/illustration-empty-cart.svg"
export default function emptyCart() {
  return (
    <div className="empty">
        <div><img src={cake} alt="cake" /></div>
        <p>Your added items will appear here</p>
    </div>
  )
}
