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
import { LocationPage } from './routes/LocationPage.tsx';
import { MenuPage } from './routes/menuPage.tsx';
import { DressCodePage } from './routes/dressCodePage.tsx';

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
    element: <LocationPage />
  },
  {
    path: "/menu",
    element: <MenuPage />
  }, {
    path: "/dresscode",
    element: <DressCodePage />
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
