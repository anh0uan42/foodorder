import React, { useState } from 'react'

export default function FoodOrderForm() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        address: '',
        order: ''
    })
    function handleChange({ target }) {
        setForm({...form, [target.id]: target.value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(form)
        alert('Order received')
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label><br/>
        <input id='name' type='text' value={form.name} onChange={handleChange}/><br/>
        <label htmlFor='phone'>Phone</label><br/>
        <input id='phone' type='number' value={form.phone} onChange={handleChange}/><br/>
        <label htmlFor='address'>Address</label><br/>
        <input id='address' type='text' value={form.address} onChange={handleChange}/><br/>
        <label htmlFor='order'>Order</label><br/>
        <input id='order' value={form.order} onChange={handleChange}/><br/>
        <button type='submit'>Submit Order</button>
      </form>
    </div>
  )
}
