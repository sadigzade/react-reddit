import React from "react";
import styles from "./notfound.scss";
import { EIcons, Icon } from "../Icon";

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <Icon name={EIcons.error} size={180} />
      <span>Страница не&nbsp;найдена</span>
    </div>
  );
}
