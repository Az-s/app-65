import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetPages from './components/GetPages';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>

      <GetPages />
      </Router>
    </div>
  );
}

export default App;
