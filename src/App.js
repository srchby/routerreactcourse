import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App">
      <header className="App-header">
        <p>
          React Router Course
        </p>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
