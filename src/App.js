import React, {useState, useContext} from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartProvider } from './store/CartContext';
import Modal from './components/UI/Modal';
import CartContext from './store/CartContext';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  const openModalHandler = () => {
    if (cartCtx.items.length > 0){
      setIsModalOpen(true);
    } else {
      alert('Your cart is empty!')
    }

  }

  const closeModalHandler = () => {
    setIsModalOpen(false)
  }
  const checkoutHandler = () => {
    alert("Checkout successful!");
    cartCtx.clearcart();
    setIsModalOpen(false);
  }
 return (
  <>
     < Header onOpenCart={openModalHandler} />
     <main>
     < Meals />
     <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
      <h2>Your cart</h2>
      <ul>
        {cartCtx.items.map((item) =>(
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>
      <div className="modal-actions">
        <button onClick={closeModalHandler}>Close</button>
        <button onClick={checkoutHandler}>Checkout</button>
      </div>
     </Modal>
     </main>
     </>

  );
}

export default App;
