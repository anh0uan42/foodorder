import React from 'react';
import FoodOrderForm from './FoodOrderForm';
import FoodItem from "./FoodItem";
import Header from './Header';
//import styles from "./App.module.css";

function App() {
  return (
    <div /*className={styles.container}*/>
      <Header />
      <FoodItem name="Shakshuka" price={5.99} imgSrc="foodorder/src/photo-1590412200988-a436970781fa.jpeg"/>
      <FoodItem name="Spaghetti Carbonara" price={6.99} imgSrc="foodorder/src/photo-1608756687911-aa1599ab3bd9.jpeg" />
      <FoodItem name="Margherita Pizza" price={2.99} imgSrc="foodorder/src/photo-1589187151053-5ec8818e661b.jpeg"/>
      <FoodOrderForm />
    </div>
  )
}

export default App