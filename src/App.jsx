import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import ViewNote from './components/ViewNote';
import Home from './components/Home';

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/notes",
      element:
      <div>
        <Navbar/>
        <Notes/>
      </div>
    },
    {
      path:"/notes/:id",
      element:
      <div>
        <Navbar/>
        <ViewNote/>
      </div>

    },
  ]
);
function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
