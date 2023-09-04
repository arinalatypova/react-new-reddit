import React from 'react';

export function preventDefault<T extends (e: any) => void>(fn: any) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  };
}
