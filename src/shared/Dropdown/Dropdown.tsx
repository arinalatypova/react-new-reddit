import React from 'react';
import styles from './dropdown.css';
import { noop } from '../../utils/js/noop';
import { useModalClose } from '../../hooks/useModalClose';
import { createPortal } from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = noop,
  onClose = noop,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen, onOpen, onClose]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const [ref] = useModalClose({ onClose: () => setIsDropdownOpen(false) });

  const node = document.querySelector('#dropdown_root');

  if (!node) return null;

  const bodyPosition = document.body.getBoundingClientRect();
  const refPosition = ref.current?.getBoundingClientRect();

  const dropdownPositionTop = Math.abs(bodyPosition.y) + (refPosition?.bottom || 0) + 10;
  const dropdownPositionRight = bodyPosition.right - (refPosition?.right || 0);

  return (
    <div className={styles.container} ref={ref}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {createPortal(
              <div
                style={{
                  position: 'absolute',
                  top: `${dropdownPositionTop}px`,
                  right: `${dropdownPositionRight}px`,
                }}>
                {children}
              </div>,
              node,
            )}
          </div>
        </div>
      )}
    </div>
  );
}
