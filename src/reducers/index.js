/**
 * Created by petr on 08/07/2017.
 */
import {combineReducers} from 'redux';

import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
