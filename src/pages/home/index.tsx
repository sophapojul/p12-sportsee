import { NavLink } from 'react-router-dom';
import { USER_MAIN_DATA as userInfos } from 'services/mockData';
import styles from './Home.module.scss';

/**
 * React function component to render the home page
 * @returns JSX.Element to render the home page
 */
function Home() {
  return (
    <main className={styles.main}>
      <ul className={styles.ul}>
        {userInfos?.map((user) => (
          <li key={user.id}>
            <NavLink to={String(user.id)}>
              {user.userInfos.firstName} {user.userInfos.lastName}
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Home;
