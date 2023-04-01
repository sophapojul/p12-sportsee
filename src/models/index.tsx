import {
  IUserMainData,
  IUserActivityData,
  IUserSessionsAverageData,
  IUserPerformanceData,
} from 'types';

/**
 * Model class for user data
 */
class UserModel {
  private userData: IUserMainData[];

  private userActivityData: IUserActivityData[];

  private userAverageSessionsData: IUserSessionsAverageData[];

  private userPerformanceData: IUserPerformanceData[];

  constructor(
    userData: IUserMainData[],
    userActivityData: IUserActivityData[],
    userAverageSessionsData: IUserSessionsAverageData[],
    userPerformanceData: IUserPerformanceData[]
  ) {
    this.userData = userData;
    this.userActivityData = userActivityData;
    this.userAverageSessionsData = userAverageSessionsData;
    this.userPerformanceData = userPerformanceData;
  }

  public getUserData(): IUserMainData[] {
    return this.userData;
  }

  public getUserActivityData(): IUserActivityData[] {
    return this.userActivityData;
  }

  public getUserAverageSessionsData(): IUserSessionsAverageData[] {
    return this.userAverageSessionsData;
  }

  public getUserPerformanceData(): IUserPerformanceData[] {
    return this.userPerformanceData;
  }
}
export default UserModel;
