/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import HomePage from 'containers/HomePage/Loadable';
import injectReducer from 'utils/injectReducer';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Search from 'components/Search';
import Posts from 'containers/Posts';
import {
  createStructuredSelector,
} from 'reselect';

import reducer from './reducer';

import SearchHolder from './SearchHolder';
import {
  makeSelectMain,
} from './selectors';

const datas = {
  articals: [
    {
      title: 'Antons',
    },
    {
      title: 'Siar',
    },
    {
      title: 'Seva',
    },
  ],
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
      emptyResult: false,
      loading: true,
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
    fetch('http://35.196.232.224:8000/api/customers')
      .then((x) => x.json())
      .then((payload) => { this.props.dispatch({ type: 'LOAD_USERS', payload }); this.setState({ loading: false }); })
      .catch((x) => console.log(x));
  }
  componentWillUnmount = () => {
    clearInterval(this.interval);
  }
  onSearchChanged = (val) => {
    this.setState({ search: val, results: [], emptyResult: false });
    // this.props.dispatch(push('/'));
    if (this.props.location.pathname !== '/search') {
      this.props.history.push('/search');
    }
  }

  onSearchEnter = () => {
    const main = this.props.main;
    if (!(main && main.main && main.main.users)) {
      return;
    }
    const results = main.main.users.filter((x) => this.state.search.split(' ').length > 1 || (this.state.search !== '' && [x.first_name, x.last_name].join(' ').includes(this.state.search)));
    this.setState({ results, emptyResult: results.length === 0 });
    if (results.length) {
      this.props.history.push(`/search/p/${this.state.search}`);
    }
  }
  tick = () => {
    debugger
  }

  render() {
    const searchQuery = this.props.location.pathname.split('/')[3];
    const {
      results,
    } = this.state;
    let valueForSearch = this.state.search;
    if (searchQuery && this.state.search.length) {
      valueForSearch = searchQuery;
    }
    return this.state.loading ? null : (
      <div style={{ minHeight: 'auto' }}>
        <Switch>
          <Route exact path="/" render={() => null} />

          <Route
            path="/search"
            render={() => (
              <div>
                <SearchHolder attached={this.props.location.pathname !== '/search' || (!this.state.emptyResult && this.state.results.length)}>
                  <Search emptyResult={this.state.emptyResult} attached={this.props.location.pathname !== '/search' || (this.state.results.length > 0)} value={valueForSearch} startSearch={this.onSearchEnter} changeHandler={this.onSearchChanged} />
                </SearchHolder>
                <Switch>
                  <Route path="/search/p/:searchQuery/:id?" render={() => <Posts items={results && results.length && results[0].posts} />} />
                </Switch>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  main: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  main: makeSelectMain(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'main', reducer });


export default withRouter(compose(
  withConnect,
  withReducer,
)(App));
