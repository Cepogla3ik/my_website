import styles from './Search.module.scss';

export default function Search() {

  return (
    <input placeholder="Search..." className={styles.search} />
  );
}