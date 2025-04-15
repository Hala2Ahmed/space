import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
// import Notfound from './pages/Notfound/Notfound'
import Crew from './pages/Crew/Crew'
import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination'
import Technology from './pages/Technology/Technology'


function App() {
  const router=createBrowserRouter([
  {path: "", element:<Layout />,children:[
   { index: true,element: <Home />},
   { path: 'crew',element: <Crew />},
   { path: 'destination',element: <Destination />},
   { path: 'technology',element: <Technology />},
  //  { path: '*',element: <Notfound />},
  ]}
  ])
 
   return (
     <>
      <RouterProvider router={router}></RouterProvider>
     </>
   )
 }

export default App
