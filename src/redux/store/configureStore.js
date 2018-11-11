// @flow
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { rootReducer, rootSaga } from '../modules';
import { sagaMiddleware } from '../enhancers/middleware';

export default function configureStore(initialState: any) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares, sagaMiddleware);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, initialState, composedEnhancers);
  sagaMiddleware.run(rootSaga);
  return store;
}
