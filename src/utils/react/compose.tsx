import * as React from 'react';
import { getValue } from './pickFromSyntheticEvent';
import { preventDefault } from './preventDefault';
import { stopPropagation } from './stopPropagation';

function InputExample({ value, onChange }: any) {
  return (
    <input
      value={value}
      //   onChange={preventDefault(stopPropagation(getValue(onChange)))}
      //   onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
      onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
    />
  );
}

export function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

export function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduce((preventDefault, fn) => fn(preventDefault), initialValue);
}

function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop];
}

const some = pick('value')({ value: 1 }); // -> 1

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

const comments = [
  { id: 22, text: 'text One' },
  { id: 44, text: 'text Two' },
];

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);
const filterWithId = createFilterBy('id');
const filterWithId22 = createFilterBy('id')(22);
const filterByValue = createFilterBy('value');

const filteredComments = comments.filter(filterWithId(22));

function cond(b: boolean) {
  return !b;
}

const getValueNumber = pipe<number>(pick('currentTarget'), pick('value'), parseInt);
