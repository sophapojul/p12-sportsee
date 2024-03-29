import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SideBar from 'components/sidebar';
import {
  IUserInfos,
  IActivity,
  IKeyData,
  ISessionsAverage,
  IUserPerformanceData,
  IUserMainData,
} from 'types';

import {
  getKeyData,
  getTodayScore,
  getUserActivity,
  getUserAverageSessions,
  getUserInfos,
  getUserPerformance,
} from 'services/api';
import UserInfos from 'components/dashboard/user';
import DailyActivity from 'components/dashboard/dailyActivity';
import AverageSessions from 'components/dashboard/averageSessions';
import Performance from 'components/dashboard/performance';
import Score from 'components/dashboard/score';
import Calories from 'components/svg/Calories';
import Carbs from 'components/svg/Carbs';
import Fat from 'components/svg/Fat';
import Protein from 'components/svg/Protein';
import styles from './Dashboard.module.scss';

/**
 * JSX Element render the dashboard with daily activity bar chart, average sessions line chart, performance radar chart, score pie chart and key data cards.
 * @returns JSXElement Dashboard
 */
function Dashboard() {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<IUserInfos>();
  const [activityData, setActivityData] = useState<IActivity[]>([]);
  const [sessionsAverageData, setSessionsAverageData] = useState<
    ISessionsAverage[]
  >([]);
  const [performanceData, setPerformanceData] =
    useState<IUserPerformanceData>();
  const [scoreData, setScoreData] = useState<
    IUserMainData['score'] | IUserMainData['todayScore']
  >();
  const [keyData, setKeyData] = useState<IKeyData>();
  useEffect(() => {
    (async () => {
      if (id) {
        const user = await getUserInfos(id);
        const activity = await getUserActivity(id);
        const average = await getUserAverageSessions(id);
        const performance = await getUserPerformance(id);
        const score = await getTodayScore(id);
        const userKeyData = await getKeyData(id);
        setUserData(user);
        setActivityData(activity);
        setSessionsAverageData(average);
        setPerformanceData(performance);
        setScoreData(score);
        setKeyData(userKeyData);
      }
    })();
  }, [id]);
  return (
    <main className={styles.main}>
      <SideBar />
      <section className={styles.section}>
        {userData && <UserInfos userData={userData} />}
        <article className={styles.activity} style={{ gridArea: 'activity' }}>
          {activityData && <DailyActivity sessions={activityData} />}
        </article>
        <article className={styles.sessions} style={{ gridArea: 'sessions' }}>
          {sessionsAverageData && (
            <AverageSessions sessions={sessionsAverageData} />
          )}
        </article>
        <article
          className={styles.performance}
          style={{ gridArea: 'performance' }}
        >
          {performanceData && <Performance performance={performanceData} />}
        </article>
        <article className={styles.score} style={{ gridArea: 'score' }}>
          {scoreData && <Score todayScore={scoreData} />}
        </article>
        <article className={styles.keyData} style={{ gridArea: 'keyData' }}>
          <ul>
            <li>
              <Calories />
              <p>
                {keyData?.calorieCount}kcal<span>Calories</span>
              </p>
            </li>

            <li>
              <Protein />
              <p>
                {keyData?.calorieCount}g<span>Protéines</span>
              </p>
            </li>

            <li>
              <Carbs />
              <p>
                {keyData?.carbohydrateCount}g<span>Glucides</span>
              </p>
            </li>

            <li>
              <Fat />
              <p>
                {keyData?.lipidCount}g<span>Lipides</span>
              </p>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
export default Dashboard;
