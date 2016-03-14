import { connect } from 'react-redux';
import createTitle from 'shared/Books/components/title';

const createApp = React => ({title}) => {
  const Title = createTitle(React);

  return (
    <div>
        <span>Hello World</span>
      <Title title={ title } />
    </div>
    );
};

const mapStateToProps = (state) => {
  const {title} = state;
  return {
    title
  };
};

// Connect props to component
export default React => {
  const App = createApp(React);
  return connect(mapStateToProps)(App);
};
