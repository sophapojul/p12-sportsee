import { NavLink } from 'react-router-dom';

import styles from './NavTop.module.scss';

/**
 * Return a navbar with links to the different pages of the application as React Element.
 * @returns JSX.Element to render the navbar
 */
export default function NavTop() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profil</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Paramètres</NavLink>
        </li>
        <li>
          <NavLink to="/community">Communauté</NavLink>
        </li>
      </ul>
    </nav>
  );
}
