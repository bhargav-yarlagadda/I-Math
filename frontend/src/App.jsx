import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {  MantineProvider } from '@mantine/core';
import Home from './pages/Home';


const paths = [
{
    path:"/",
    element:(
      <Home/>
    )
}
]
const browserRouter = createBrowserRouter(paths)
const App = () => {
  return (
    <MantineProvider>
         <RouterProvider router={browserRouter} ></RouterProvider>
    </MantineProvider>
  )
}

export default App
