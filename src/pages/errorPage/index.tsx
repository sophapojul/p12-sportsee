import { Link, useRouteError } from 'react-router-dom';
import { ErrorPageProps } from 'types';

/**
 * React component to display the error page
 * @returns JSX.Element to render the error page
 */
function ErrorPage() {
  const error = useRouteError() as ErrorPageProps;
  return (
    <>
      <h1>{error.message || error.status}</h1>
      <p>Oops, la page que vous recherchez n&apos;existe pas.</p>
      <Link to="/">Retourner à l&apos;accueil</Link>
    </>
  );
}
export default ErrorPage;
