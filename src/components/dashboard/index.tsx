import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SideBar from 'components/sidebar';
import { IUserInfos } from 'types';

import { getUserInfos } from 'services/api';
import styles from './Dashboard.module.scss';
import UserInfos from './user';

function Dashboard() {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<IUserInfos>();
  useEffect(() => {
    (async () => {
      if (id) {
        const user = await getUserInfos(id);
        setUserData(user);
      }
    })();
  }, [id]);
  return (
    <main className={styles.main}>
      <SideBar />
      <section className={styles.section}>
        {userData && <UserInfos userData={userData} />}
        <article className={styles.activity} style={{ gridArea: 'activity' }}>
          activity
        </article>
        <article className={styles.sessions} style={{ gridArea: 'sessions' }}>
          sessions
        </article>
        <article
          className={styles.performance}
          style={{ gridArea: 'performance' }}
        >
          performance
        </article>
        <article className={styles.score} style={{ gridArea: 'score' }}>
          score
        </article>
        <article className={styles.keyData} style={{ gridArea: 'keyData' }}>
          keyData
        </article>
      </section>
    </main>
  );
}
export default Dashboard;
