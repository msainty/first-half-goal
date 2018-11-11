// @flow
import type { State, Fixture } from './types';

const getNoFixtures = (state: State): boolean => state.fixtures.length === 0;
const getFixtures = (state: State): Array<Fixture> => state.fixtures;

export {
  getNoFixtures,
  getFixtures,
};
