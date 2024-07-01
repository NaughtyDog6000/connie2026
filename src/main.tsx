import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import HomePage from './routes/homePage.tsx';
import { InvitedPage } from './routes/InvitePage.tsx';
import { TestPage } from './routes/testPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/your_invited",
    element: <InvitedPage />
  },
  {
    path: "/test",
    element: <TestPage />
  },
  {
    path: "/location",
    element: <h1>Location info</h1>
  },
  {

  }
]);

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
