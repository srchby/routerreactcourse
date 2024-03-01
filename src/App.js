import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import './index.css';

import About from './pages/About';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import CourseLayout from './pages/CourseLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='course' element={<CourseLayout />}>
        <Route path='video' />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
