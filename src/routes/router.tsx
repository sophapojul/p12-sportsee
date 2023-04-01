import Community from 'pages/community';
import ErrorPage from 'pages/errorPage';
import Home from 'pages/home';
import Profile from 'pages/profile';
import Settings from 'pages/settings';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';

/** create a browser router */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'community',
        element: <Community />,
      },
    ],
  },
]);
export default router;
