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


import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Search from 'components/Search';
import Posts from 'containers/Posts';

import SearchHolder from './SearchHolder';

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
    };
  }
  onSearchChanged = (val) => {
    this.setState({ search: val, results: [], emptyResult: false });
    // this.props.dispatch(push('/'));
    if (this.props.location.pathname !== '/') {
      this.props.history.push('/');
    }
  }

  onSearchEnter = () => {
    const results = datas.articals.filter((x) => this.state.search.split(' ').length > 1 || (this.state.search !== '' && x.title.startsWith(this.state.search)));
    this.setState({ results, emptyResult: results.length === 0 });
    if (results.length) {
      this.props.history.push(`/p/${this.state.search}`);
    }
  }
  render() {
    const searchQuery = this.props.location.pathname.split('/')[2];
    let valueForSearch = this.state.search;
    if (searchQuery && this.state.search.length) {
      valueForSearch = searchQuery;
    }

    return (
      <div>
        <SearchHolder attached={this.props.location.pathname !== '/' || (!this.state.emptyResult && this.state.results.length)}>
          <Search emptyResult={this.state.emptyResult} attached={this.props.location.pathname !== '/' || (this.state.results.length > 0)} value={valueForSearch} startSearch={this.onSearchEnter} changeHandler={this.onSearchChanged} />
        </SearchHolder>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/p/:searchQuery/:id?" render={() => <Posts items={datas.articals} />} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(App);
