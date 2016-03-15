import Promise from 'bluebird';

export const ADD_COUNT = 'ADD_COUNT';

export function addCount(item) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(addedCount(item));
      resolve({});
    });
  // do some async work here
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
