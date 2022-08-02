import './App.css';
import { Navbar } from './components/Navbar/navbar';
import { ProductInformation } from './components/ProductInformation/productInformation';
import { ProductExtras } from './components/ProductExtras/productExtras';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from './config/api.json';

function App() {
  const [apiInformation, setApiInformation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(config.api.url).then((res) => {
      setApiInformation(res.data[0]);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className='loading'>
          <img src='/teamsoftjoinfrontend/Images/loading.png' className='loading__img' alt='loading' />
        </div>
      ) : null}
      <div className='app'>
        <Navbar />
        <div className='app__content'>
          <ProductInformation apiInformation={apiInformation} />
          <ProductExtras />
        </div>
      </div>
    </>
  );
}

export default App;
