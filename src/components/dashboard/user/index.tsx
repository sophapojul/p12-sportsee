import PropTypes from 'prop-types';
import { IUserInfos } from 'types';

interface IUserMain {
  userData: IUserInfos;
}
/**
 * React component to display the user infos
 * @param userData - user data to display with first name, last name and age
 * @returns JSX.Element to render the user infos
 */
function UserInfos({ userData }: IUserMain) {
  return (
    <header style={{ gridArea: 'header' }}>
      <h1 style={{ color: 'black' }}>
        Bonjour <span style={{ color: '#ff0101' }}>{userData?.firstName}</span>
      </h1>
      <p style={{ color: 'black' }}>
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </header>
  );
}
UserInfos.propTypes = {
  userData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
};
export default UserInfos;
