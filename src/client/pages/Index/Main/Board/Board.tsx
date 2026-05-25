import Entry from "@shared/components/Entry/Entry";
import { type EntrySlotIndexes } from "./Board.interface";
import { type RootState } from "@client/store/store";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedEntry, setEditable } from "@client/store/slices/boardSlice";
import styles from './Board.module.scss';

export default function Board() {
  const boardEntries = useSelector((state: RootState) => state.app.board.entries);
  const selectedEntryIndex = useSelector((state: RootState) => state.app.board.selected);
  const entryIndex = useSelector((state: RootState) => state.app.board.entry);
  const editableObjectCnf = useSelector((state: RootState) => state.app.board.editable);

  const boardElementRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    const boardElement = boardElementRef.current;
    if (!boardElement) return;
  
    const onClick = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;
      const targetEntryElement = targetElement.closest('[data-index]');

      const entriesArray = Array.from(targetEntryElement?.parentElement?.children || []);
      const selectedEntryIndex = entriesArray.indexOf(targetEntryElement as HTMLDivElement);
      dispatch(setSelectedEntry(selectedEntryIndex));
    }
    
    const onDblClick = (e: MouseEvent) => {
      const slotElement = e.target;
      const entryElement = slotElement.closest('[data-index]');
      
      const entriesArray = Array.from(entryElement?.parentElement?.children || []);
      const slotsArray = Array.from(entryElement?.children || []);
      
      const entryIndex = entriesArray.indexOf(entryElement as HTMLDivElement);
      const slotIndex = slotsArray.indexOf(slotElement as HTMLElement);
      
      dispatch(setEditable({ entryIndex, slotIndex }));
    }

    boardElement.addEventListener('click', onClick);
    boardElement.addEventListener('dblclick', onDblClick);
    
    return () => {
      boardElement.removeEventListener('click', onClick)
      boardElement.removeEventListener('dblclick', onDblClick);
    }
  }, []);

  
  return (
    <div ref={boardElementRef} className={styles.board}>
      {boardEntries.map((entry, i) => (
        <Entry 
          key={i} 
          index={i}
          selected={selectedEntryIndex === i}
          slotsAmount={entry.length}
          labelsArr={entry} 
        />
      ))}
    </div>
  );
}