import React from 'react';

interface IUseModalCloseProps {
  onClose?: () => void;
}

export const useModalClose = ({ onClose }: IUseModalCloseProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && !ref.current?.contains(target)) {
        onClose?.();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  return [ref];
};
