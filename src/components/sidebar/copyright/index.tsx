import styles from './Copyright.module.scss';

/**
 * Return a paragraph element with the className of styles.p, and the
 * paragraph element contains the text "Copyright, SportSee" and the current year
 * @returns JSX.Element to render the paragraph with the text "Copyright, SportSee" and the current year
 */
function Copyright() {
  return (
    <p className={styles.p}>Copyright, SportSee {new Date().getFullYear()}</p>
  );
}
export default Copyright;
