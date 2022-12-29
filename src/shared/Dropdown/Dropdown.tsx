import React from "react";
import ReactDOM from "react-dom";
import styles from "./dropdown.scss";

interface IDropdownProps {
  children: React.ReactNode;
  coords: {
    top: number;
    left: number;
  };
  onClose: Function;
}

export function Dropdown({ children, coords, onClose }: IDropdownProps) {
  const node = document.querySelector("#modal_root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div
        className={styles.listContainer}
        style={{ top: `${coords.top}px`, left: `${coords.left}px` }}>
        <div className={styles.list} onClick={() => onClose(false)}>
          {children}
        </div>
      </div>
    </div>,
    node,
  );
}
