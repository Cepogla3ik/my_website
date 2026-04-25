import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import Main from "./Main/Main";
import styles from "./Index.module.scss";

export default function Index() {
  
  return (
    <div className={styles.index}>
      <Navigation />
      <Header />
      <Main />
    </div>
  );
}