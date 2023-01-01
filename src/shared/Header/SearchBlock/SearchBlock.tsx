import React from "react";
import styles from "./searchblock.scss";
import { UserBlock } from "./UserBlock";
// import { userContext } from "../../context/userContext";
import { useUserData } from "../../../hooks/useUserData";

export function SearchBlock() {
  const { data, loading } = useUserData();
  // const { iconImg, name } = React.useContext(userContext);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading} />
    </div>
  );
}
