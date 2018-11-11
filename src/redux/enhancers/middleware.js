// @flow
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

export default middleware;
