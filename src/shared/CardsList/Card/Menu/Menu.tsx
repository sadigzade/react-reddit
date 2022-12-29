import React from "react";
import styles from "./menu.scss";
import { Dropdown } from "../../../Dropdown";
import { MenuItemsList } from "./MenuItemsList";
import { EColors, Text } from "../../../Text";
import { EIcons, Icon } from "../../../Icon";

type TStateType = {
  top: number;
  left: number;
};

export function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const [coords, setCoords] = React.useState<TStateType>({ top: 0, left: 0 });

  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  React.useEffect(() => {
    function updateCoords() {
      if (ref.current !== null) {
        const targetCoords = ref.current.getBoundingClientRect();
        console.log(targetCoords);

        setCoords({
          top: targetCoords.top + 41,
          left: targetCoords.right - 150,
        });
      }
    }

    updateCoords();

    if (isDropdownOpen) {
      document.addEventListener("scroll", updateCoords);
      document.addEventListener("resize", updateCoords);
    }

    return () => {
      document.removeEventListener("scroll", updateCoords);
      document.removeEventListener("resize", updateCoords);
    };
  }, [isDropdownOpen]);

  return (
    <div className={styles.menu}>
      <div onClick={handleOpen} ref={ref}>
        <button className={styles.menuButton}>
          <Icon name={EIcons.menu} size={20} />
        </button>
      </div>
      {isDropdownOpen && (
        <Dropdown coords={coords} onClose={setIsDropdownOpen}>
          <div className={styles.dropdown}>
            <MenuItemsList postId="1234" />
            <button className={styles.closeButton}>
              <Text mobileSize={12} size={14} color={EColors.grey66}>
                Закрыть
              </Text>
            </button>
          </div>
        </Dropdown>
      )}
    </div>
  );
}
