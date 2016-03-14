import { ADD_COUNT } from 'shared/Books/actions/BookActions';

const intialItems = [
  {
    id: 1,
    text: 'Book 1',
    count: 2
  }, {
    id: 2,
    text: 'Book 2',
    count: 3
  }, {
    id: 3,
    text: 'Book 3',
    count: 4
  },
];
const initialState = {
  items: intialItems,
  lastUpdated: Date.now()
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      const newItems = state.items.map(item => {
        if (item.id === action.item.id) {
          item.count++;
        }
        return item;
      });
      return {
        ...state,
        items: newItems,
        lastUpdated: action.receivedAt
      }
    default:
      return state;
  }
};

export default booksReducer;
