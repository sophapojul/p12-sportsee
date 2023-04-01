import { ReactComponent as Yoga } from 'assets/yoga.svg';
import { ReactComponent as Swimming } from 'assets/swimming.svg';
import { ReactComponent as Biking } from 'assets/biking.svg';
import { ReactComponent as Weightlifting } from 'assets/weightlifting.svg';
import styles from './NavSide.module.scss';

/**
 * a navigation bar on the side of the main element
 * @returns JSX.Element to render the navigation bar on the left side of the page
 */
function NavSide(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Yoga />
        </li>
        <li>
          <Swimming />
        </li>
        <li>
          <Biking />
        </li>
        <li>
          <Weightlifting />
        </li>
      </ul>
    </nav>
  );
}

export default NavSide;
