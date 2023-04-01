import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';

/** create a browser router */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);
export default router;
