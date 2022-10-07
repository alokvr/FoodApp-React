import { 
  useState } from "react";
import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CardProvider from "./store/CartProvider";

function App() {

  const [cartisShown, setcartisShown] = useState(false);

  const showCardHandler = () => {
    setcartisShown(true)
  }

  const hideCardHandler = () => {
    setcartisShown(false)
  }

  return (
    <CardProvider>
      {cartisShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>

    </CardProvider>
  )
}

export default App;
