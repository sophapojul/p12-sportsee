import { Outlet } from 'react-router-dom';

import Header from 'components/header';

/**
 * Root component to render the header and the outlet
 * @returns JSX.Element to render the root layout element
 */
function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default Root;
