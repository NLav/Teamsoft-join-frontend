import './App.css';
import { Navbar } from './components/Navbar/navbar';
import { ProductInformation } from './components/ProductInformation/productInformation';
import { ProductExtras } from './components/ProductExtras/productExtras';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='app__content'>
        <ProductInformation />
        <ProductExtras />
      </div>
    </div>
  );
}

export default App;
