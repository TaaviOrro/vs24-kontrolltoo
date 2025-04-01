import React from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartProvider } from './store/CartContext';


const App = () => {
 return (
    <CartProvider>
     < Header />
     <main>
     < Meals />
     </main>
    </CartProvider>
  );
}

export default App;
