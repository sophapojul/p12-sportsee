import { Outlet } from 'react-router-dom';

/**
 * Root component to render the header and the outlet
 * @returns JSX.Element to render the root layout element
 */
function Root() {
  return <Outlet />;
}
export default Root;
