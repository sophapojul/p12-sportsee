import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SideBar from 'components/sidebar';
import { IUserInfos } from 'types';

import {
  getUserActivity,
  getUserAverageSessions,
  getUserInfos,
  getUserPerformance,
} from 'services/api';
import UserInfos from 'components/dashboard/user';
import DailyActivity from 'components/dashboard/dailyActivity';
import AverageSessions from 'components/dashboard/averageSessions';
import Performance from 'components/dashboard/performance';
import styles from './Dashboard.module.scss';

function Dashboard() {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<IUserInfos>();
  const [activityData, setActivityData] = useState([]);
  const [sessionsAverageData, setSessionsAverageData] = useState([]);
  const [performanceData, setPerformanceData] = useState();
  useEffect(() => {
    (async () => {
      if (id) {
        const user = await getUserInfos(id);
        const activity = await getUserActivity(id);
        const average = await getUserAverageSessions(id);
        const performance = await getUserPerformance(id);
        setUserData(user);
        setActivityData(activity);
        setSessionsAverageData(average);
        setPerformanceData(performance);
      }
    })();
  }, [id]);
  return (
    <main className={styles.main}>
      <SideBar />
      <section className={styles.section}>
        {userData && <UserInfos userData={userData} />}
        <article className={styles.activity} style={{ gridArea: 'activity' }}>
          <DailyActivity sessions={activityData} />
        </article>
        <article className={styles.sessions} style={{ gridArea: 'sessions' }}>
          <AverageSessions sessions={sessionsAverageData} />
        </article>
        <article
          className={styles.performance}
          style={{ gridArea: 'performance' }}
        >
          {performanceData && <Performance performance={performanceData} />}
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
