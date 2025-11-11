import { useState } from 'react'


function App() {
  const [name, setName] = useState("Guest")
  const [quantity,setQuantity] = useState(5);
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("")
  const [shipping, setShipping] = useState("delivery")
  function handleNameChange(event){
    setName(event.target.value)

  }
  function handleQuantityChange(event){
    setQuantity(event.target.value)

  }
  function handleCommentChange(event){
    setComment(event.target.value)
  }
  function handlePaymentChange(event){
    setPayment(event.target.value)
  }
  function handleShippingChange(event){
    setShipping(event.target.value)
  }
  return (
    <>
    <div>
      <input  value = {name} onChange = {handleNameChange}/>
      <p>Name:{name}</p>
      <input value = {quantity} onChange= {handleQuantityChange} />
      <p>Quantity:{quantity}</p>
      <textarea value = {comment} onChange = {handleCommentChange} placeholder= "Leave your comment here"/>
      <p>Comment:{comment}</p>
      <br/>
      <select value={payment} onChange = {handlePaymentChange}>
        <option value = "">select an option</option>
        <option value = "Visa">Visa</option>
        <option value = "Credit">Credit</option>
        <option value = "Debit">Debit</option>
        <option value = "UPI">UPI</option>
      </select>
      <p>payment Method:{payment}</p>
      <label>
        <input type='radio' value = "pickup" checked ={shipping === "pickup"} onClick={handleShippingChange}/>
        Pickup
      </label>
      <br/>
      <label>
        <input type = 'radio' value = "delivery" checked = {shipping === "delivery"} onClick={handleShippingChange}/>
        </label>
      Delivery
      <p>shipping:{shipping}</p>
    </div>
    </>
  )
}

export default App
