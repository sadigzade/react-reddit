import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.scss';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

type TStateType = {
  top: number;
  left: number;
};

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  const ref = React.useRef<HTMLDivElement>(null);
  const [coords, setCoords] = React.useState<TStateType>({ top: 0, left: 0 });

  React.useEffect(() => {
    setIsDropdownOpen(isOpen);
  }, [isOpen]);

  React.useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  React.useEffect(() => {
    function updateCoords() {
      if (ref.current !== null) {
        const targetCoords = ref.current.getBoundingClientRect();

        setCoords({
          top: targetCoords.top + 41,
          left: targetCoords.right - 150,
        });
      }
    }

    updateCoords();

    if (isDropdownOpen) {
      document.addEventListener('scroll', updateCoords);
      document.addEventListener('resize', updateCoords);
    }

    return () => {
      document.removeEventListener('scroll', updateCoords);
      document.removeEventListener('resize', updateCoords);
    };
  }, [isDropdownOpen]);

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={ref}>
        {button}
      </div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div
            className={styles.listContainer}
            style={{ top: `${coords.top}px`, left: `${coords.left}px` }}>
            <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
              {children}
            </div>
          </div>,
          node,
        )}
    </div>
  );
}
