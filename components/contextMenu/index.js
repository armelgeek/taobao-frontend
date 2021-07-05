import { useRef } from "react";

import styles from "./styles.module.scss";

const contextMenu = ({ menuItems, closeAction, isTopNavigation = false }) => {
  const ref = useRef();


  let position = { bottom: "3rem", right: "0" };
  if (isTopNavigation) {
    position = { top: "2rem", right: "0" };
  }

  return (
    <div ref={ref} className={styles.menuWrapper} style={{ ...position }}>
      <div className={styles.menu}>
        {menuItems.map((item, key) => {
          return (
            <div
              key={key}
              className={styles.item}
              role="button"
              tabIndex="0"
              onClick={item.action}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default contextMenu;
