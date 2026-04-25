import Board from "./Board/Board";
import ToolsBar from "./ToolsBar/ToolsBar";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <main className={styles.main}>
      <ToolsBar />
      <Board />
    </main>
  );
}