import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
    </nav>
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
