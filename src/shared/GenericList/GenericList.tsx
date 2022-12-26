import React from 'react';
import classNames from 'classnames';
import styles from './genericlist.scss';

interface IItem {
  id: string;
  element: React.ReactNode;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  icon?: JSX.Element;
  text?: string;
  afterDivider?: boolean;
  mobileDisplay?: boolean;
}

interface IGenericListProps {
  list: IItem[];
}

const NOOP = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(
        ({
          As = 'div',
          element,
          onClick = NOOP,
          className = 'dropdownItem',
          id,
          href,
          afterDivider,
          mobileDisplay,
        }) => (
          <As onClick={() => onClick(id)} key={id} href={href}>
            <div className={classNames(styles[className], !mobileDisplay && styles.hide)}>
              {element}
            </div>
            {afterDivider ? (
              <div className={classNames(styles.divider, !mobileDisplay && styles.hide)} />
            ) : (
              ''
            )}
          </As>
        ),
      )}
    </>
  );
}
