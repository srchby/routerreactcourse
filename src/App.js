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
import Video from './pages/course/Video';
import Notfound from './pages/Notfound';
import Database, { databaseLoader } from './pages/Database/Database';
import Tutorial from './pages/course/Tutorial';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='course' element={<CourseLayout />}>
        <Route path='video' element={<Video />} />
        <Route path=':tutorial' element={<Tutorial />} />
        <Route path='database' element={<Database />} loader={databaseLoader} />
      </Route>
      <Route path='*' element={<Notfound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
