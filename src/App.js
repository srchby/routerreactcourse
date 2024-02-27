import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './index.css';

import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <main>
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
