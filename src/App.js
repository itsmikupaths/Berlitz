import './App.scss';
import Product from './product.js'

// font-awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="back-button">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          All products
        </div>
      </header>
      <div className="content-wrapper">
        <Product />
        <div className="add-to-cart">
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default App;
