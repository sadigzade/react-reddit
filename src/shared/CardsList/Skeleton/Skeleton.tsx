import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./skeleton.scss";

export function Skeleton() {
  return (
    <ContentLoader
      className={styles.skeleton}
      speed={2}
      width={790}
      height={107}
      viewBox="0 0 790 107"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="3" ry="3" width="190" height="107" />
      <rect x="228" y="21" rx="0" ry="0" width="562" height="12" />
      <rect x="228" y="53" rx="0" ry="0" width="188" height="8" />
      <rect x="453" y="53" rx="0" ry="0" width="120" height="8" />
      <rect x="249" y="80" rx="0" ry="0" width="155" height="8" />
      <circle cx="235" cy="85" r="7" />
      <circle cx="435" cy="56" r="10" />
    </ContentLoader>
  );
}
