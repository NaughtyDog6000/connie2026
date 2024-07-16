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
import { SaveTheDatePage } from './routes/saveTheDatePage.tsx';
import { TimeLinePage } from './routes/timeLinePage.tsx';
import { RSVPage } from './routes/RSVPage.tsx';

export const APIURL = "https://connie-api.nd6k.uk/";


const router = createBrowserRouter([
  {
    path: "*",
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
    path: "/timeline",
    element: <TimeLinePage />
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
  },
  {
    path: "/save_the_date",
    element: <SaveTheDatePage />
  },
  {
    path: "/RSVP",
    element: <RSVPage />
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
