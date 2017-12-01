/**
 *
 * Posts
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import LoadingWrapper from 'components/LoadingWrapper';
import { withRouter } from 'react-router-dom';

import Item from './components/Item';
import ItemsWrapper from './ItemsWrapper';
import Wrapper from './Wrapper';

export class Posts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      results: [],
    };
    this.cancellable = [];
    // setTimeout(() => {
    //   const timeout = setTimeout(() => this.setState({ loading: false, results: [1,2,3] }), 2000);
    //   this.cancellable.push({
    //     cancel: () => clearTimeout(timeout),
    //   });
    // }, 0);
  }

  componentDidMount() {
    const timeout = setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
    this.cancellable.push({
      cancel: () => clearTimeout(timeout),
    });
  }

  componentWillUnmount() {
    this.cancellable.forEach((x) => x.cancel());
  }

  render() {
    const {
      loading,
    } = this.state;
    const active = +this.props.match.params.id;
    return (
      <LoadingWrapper loading={loading}>
        <Wrapper>
          <ItemsWrapper>
            {
              this.props.items.map((x, idx) => <Item active={active === idx} clickHandler={() => { this.props.history.push(`${this.props.match.url.split('/').slice(0, 3).join('/')}/${idx}`); }} data={x} />)
            }
          </ItemsWrapper>
        </Wrapper>
      </LoadingWrapper>
    );
  }
}

Posts.propTypes = {
  history: PropTypes.object,
  items: PropTypes.array,
  match: PropTypes.object,
};


export default withRouter(Posts);
