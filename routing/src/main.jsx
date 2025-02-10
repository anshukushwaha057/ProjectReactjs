import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, About, Employees, Github } from './components/index.js'
import { gitLoader } from './components/Github/Github.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="/employees" element={<Employees />} />
    <Route 
    loader={gitLoader}
    path="/github" 
    element={<Github />} 
    />
    {/* <Route path="contactus" element={<ContactUs />} />
    <Route path="user/:userid" element={<User />} />
    <Route
      loader={githubInfoLoader}
      path="github"
      element={<Github />} /> */}
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
