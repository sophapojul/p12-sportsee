import { RouterProvider } from 'react-router-dom';
import router from 'routes/router';

/**
 * React component to render the App component
 * @returns JSX.Element to render the App component
 */
function App() {
  return <RouterProvider router={router} />;
}

export default App;
