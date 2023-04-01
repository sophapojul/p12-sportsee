import SideBar from 'components/sidebar';
import { useParams } from 'react-router-dom';

import styles from './Dashboard.module.scss';

function Dashboard() {
  const { id } = useParams<{ id: string }>();
  return (
    <main className={styles.main}>
      <SideBar />
      <p>{id}</p>
    </main>
  );
}
export default Dashboard;
