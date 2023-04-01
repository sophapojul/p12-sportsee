import NavTop from 'components/navTop';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Header.module.scss';

/**
 * Return a JSX element that is a header with a className of header.
 * The header contains a Logo and a NavTop.
 * The Logo and NavTop are imported from the Logo.tsx and NavTop.tsx files.
 * The styles.header is the header class in the Header.module.scss file.
 * @returns JSX.Element to render the header with a Logo and a NavTop
 */
function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavTop />
    </header>
  );
}
export default Header;
