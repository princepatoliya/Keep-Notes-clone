import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import NotesListPages from './pages/NotesListPages';
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header />
          <Route path="/" exact component={NotesListPages} />
          <Route path="/note/:id" component={NotePage} />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
