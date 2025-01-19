import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appstore from './Utils/store.js';

import Home from './Componets/Home.js';
import ProblemPage from "./Componets/leetcode.js"
import Mainprofile from './Componets/Mainprofile.js';
import { Problems } from './Componets/Problems.js';


const route=new createBrowserRouter([
  {
    
    element:<App/>,
    children:[{
      path:"",
      element:<Home/>
  
    },
    {
      path:"/p/:id",
      element:<Mainprofile/>
  
    },  {
      path:"/problems",
      element:<Problems/>
  
    },
    {
      path:"/problem/:id",
      element:<ProblemPage/>
  
    },]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
   <Provider store={appstore}>
    <RouterProvider router={route} />
   </Provider>
  // </React.StrictMode>
  // <App/>
);

reportWebVitals();
