import { type EntryProps } from "./Entry.interface";
import { useRef, useState } from "react";
// import { useSelector } from "react-redux";
import { type RootState } from "@client/store/store";
import styles from "./Entry.module.scss";

export default function Entry(props: EntryProps) {
  const { slotsAmount = 0, labelsArr = [], selected, index } = props;
  
  const [editableSlot, setEditableSlot] = useState(-1);
  
  // const slotIndex = useSelector((state: RootState) => state.app.board.editable.slot);
  
  const handleDblClick = (e: MouseEvent, i: number) => {
    setEditableSlot(i);
    e.target.focus();
  }
  
  
  const slots = [...Array(slotsAmount)].map((_, i) => (
    <textarea 
      key={i} 
      className={styles.slot}
      defaultValue={labelsArr[i]}
      onDoubleClick={(e) => handleDblClick(e, i)}
      disabled={editableSlot !== i}
    />
  ));
  
  return (
    <div data-index={index} className={`${styles.entry} ${selected ? styles.selected : ''}`}>
      { slots }
    </div>
  );
}