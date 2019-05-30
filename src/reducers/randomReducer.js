import { FETCH_DATA, CHANGE_DATA } from '../actions/types'

export default function reducer(state = [], action) {
    switch (action.type) {
      case FETCH_DATA:
        state = action.data;
        return state;
        
      case CHANGE_DATA:
        state = action.data;
        return state;

      default:
        return state;
    }
  }