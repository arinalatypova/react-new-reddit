import React from 'react';
import styles from './icon.css';
import { BlockIcon, WarningIcon } from '../icons';

export type TSizes = 10 | 12 | 14 | 16 | 20 | 24 | 30;

export enum EIcons {
  block = 'BlockIcon',
  warning = 'WarningIcon',
}

interface IIconProps {
  name: EIcons;
  size?: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
}

export function Icon({ name, size = 14 }: IIconProps) {
  return getIconComponent(name, size);
}

function getIconComponent(name: EIcons, size: TSizes) {
  switch (name) {
    case EIcons.block:
      return <BlockIcon size={size} />;
  }
}
