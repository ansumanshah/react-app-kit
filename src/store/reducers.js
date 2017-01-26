import { combineReducers } from 'redux';
import rootReducer from './root';

export default function combine() {
  return combineReducers({
    root: rootReducer,
  });
}
