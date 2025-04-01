import React, {useState} from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartProvider } from './store/CartContext';
import Modal from './components/UI/Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  }

  const closeModalHandler = () => {
    setIsModalOpen(false)
  }
 return (
    <CartProvider>
     < Header />
     <main>
     < Meals />
     <button onClick={openModalHandler}>Open Modal</button>
     <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
      <h2>Modal Title</h2>
      <p>This is the modal content</p>
     </Modal>
     </main>
    </CartProvider>
  );
}

export default App;
