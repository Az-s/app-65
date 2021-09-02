import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import GetPages from './components/GetPages';
import EditPages from './components/EditPages';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path='/pages/:name' component={GetPages} />
        <Route path='/pages/admin' component={EditPages} />
      </Router>
    </div>
  );
}

export default App;
