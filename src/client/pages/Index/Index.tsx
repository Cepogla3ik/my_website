import { useRef, useEffect } from "react";
import randomInt from "@shared/util/randomInt";
import styles from "./Index.module.scss";
import Vec2, { type Vec2Like } from "@shared/util/Vec2";

export default function Index() {
  const indexRef = useRef<HTMLDivElement | null>(null);
  const indexSize = { width: indexRef.current.getBoundingClientRect().width, height: indexRef.current.getBoundingClientRect().height };
  const posRef = useRef<Vec2Like | undefined | null>(new Vec2(indexSize.x / 2, indexSize.y / 2));
  
  useEffect(() => {
    const indexEl = indexRef.current;
    const pos = posRef.current;
    if (!indexEl || !pos) return;
    
    const setProperties = () => {
      pos.addLocal(randomInt(-100, 100), randomInt(-100, 100));
      
      indexEl.style.left = `${pos.x}px`;
      indexEl.style.top = `${pos.y}px`;
    }
    
    indexEl.addEventListener('animationiteration', setProperties);
    
    return () => { indexEl.removeEventListener('animationiteration', setProperties) }
  }, []);
  
  return (
    <div ref={indexRef} className={styles.index}></div>
  );
}