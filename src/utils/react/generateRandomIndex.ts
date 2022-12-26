import { assoc } from '../js/assoc';

export const generateRandomString = () => Math.random().toString(36).substring(2, 15); // analog: 'nanoid'

export const assignId = assoc('id', generateRandomString());

export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);
