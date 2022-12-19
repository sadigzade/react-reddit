import React from 'react';
import { preventDefault } from '../utils/react/preventDefault';
import { stopPropagation } from '../utils/react/stopPropagation';
import { getValue } from '../utils/react/pickFromSyntheticEvent';

function InputExample({ value, onChange }: any) {
  // return <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />;
  return (
    <input value={value} onChange={pipe(preventDefault, stopPropagation, getValue, onChange)} />
  );
}

function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
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
const filterWithValue = createFilterBy('text');

// const filteredComments = comments.filter(({ id }) => id !== 22);
let filteredComments = comments.filter(filterWithId(22));
filteredComments = comments.filter(filterWithValue(22));

function cond(b: boolean) {
  return !b;
}

const getValueNumber = pipe<number>();
