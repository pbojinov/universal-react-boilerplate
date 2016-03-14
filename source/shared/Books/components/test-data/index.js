import { connect } from 'react-redux';
import createTitle from 'shared/Books/components/title';
import { addCount } from 'shared/Books/actions/BookActions';

const createApp = React => ({dispatch, books}) => {
  const Title = createTitle(React);
  debugger;
  const bookNodes = books.items.map(book => {
    return (
      <div key={ book.id }>
        { book.text } - Read by { book.count } people.
        <button onClick={ () => dispatch(addCount(book)) }>Add reader</button>
      </div>
      );
  });

  return (
    <div>
      <Title title="Books" />
      <span>Hello Books World</span>
      { bookNodes }
    </div>
    );
};

const mapStateToProps = (state) => {
  const {books} = state;
  return {
    books
  };
};

// Connect props to component
export default React => {
  const App = createApp(React);
  return connect(mapStateToProps)(App);
};
