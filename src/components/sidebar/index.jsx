import Copyright from './copyright';
import NavSide from './navSide';
import styles from './SideBar.module.scss';
/**
 * Return a JSX element with a navbar and copyright text
 * and `<Copyright />`
 * @returns JSX.Element
 */
function SideBar() {
  return (
    <aside className={styles.aside}>
      <NavSide />
      <Copyright />
    </aside>
  );
}
export default SideBar;
