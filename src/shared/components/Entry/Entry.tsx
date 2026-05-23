import { type EntryProps } from "./Entry.interface";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { type RootState } from "@client/store/store";
import styles from "./Entry.module.scss";

export default function Entry(props: EntryProps) {
  const { slotsAmount = 0, labelsArr = [], selected, isEntryContentEditable = false, index } = props;
  
  const slotIndex = useSelector((state: RootState) => state.app.board.editable.slot);
  const slotElementRef = useRef(null);
  
  useEffect(() => {
    const onBlur = () => {
      console.log("Blured");
    }
    
    
    
    return () => {
      
    }
  }, []);
  
  return (
    <div data-index={index} className={`${styles.entry} ${selected ? styles.selected : ''}`}>
      {[...Array(slotsAmount)].map((_, i) => (
        <span key={i} ref={slotElementRef} contentEditable={(isEntryContentEditable && slotIndex === i)} className={styles.slot}>
          { labelsArr[i] }
        </span>
      ))}
    </div>
  );
}