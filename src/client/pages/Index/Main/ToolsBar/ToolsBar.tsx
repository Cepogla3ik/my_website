import ToolbarItem from "@shared/components/ToolbarItem/ToolbarItem";
import Search from "./Search/Search";
import { useDispatch } from "react-redux";
import { addEntry, deleteEntry } from "@client/store/slices/boardSlice";
import styles from "./ToolsBar.module.scss";

export default function ToolsBar() {
  const dispatch = useDispatch();
  
  const addSvgItem = 
    <svg width="auto" height="100%" viewBox="0 0 100 100">
      <polyline fill="none" stroke="hsl(140 90% 60%)" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" points="20,50 80,50 50,50 50,80 50,20" />
    </svg>;
  
  const deleteSvgItem = 
    <svg width="auto" height="100%" viewBox="0 0 100 100">
      <polyline fill="none" stroke="hsl(0 90% 60%)" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" points="20,50 80,50" />
    </svg>;
  
  return (
    <div className={styles["tools-bar"]}>
      <div className={styles["interact-buttons"]}>
        <ToolbarItem content={addSvgItem} onClick={() => dispatch(addEntry())} />
        <ToolbarItem content={deleteSvgItem} onClick={() => dispatch(deleteEntry())} />
      </div>
      <Search />
    </div>
  );
}