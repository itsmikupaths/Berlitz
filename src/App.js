import './App.scss';

// font-awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="back-button">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          All products
        </div>
      </header>
    </div>
  );
}

export default App;
