import Promise from 'bluebird';

export const ADD_COUNT = 'ADD_COUNT';

export function addCount(item) {
  return dispatch => {
    // do some async work here
    return dispatch(addedCount(item));
  }
}

function addedCount(item) {
  return {
    type: ADD_COUNT,
    meta: {
      analytics: {
        collection: 'Added Count',
        event: {
          item: item,
        }
      }
    }
  };
}
