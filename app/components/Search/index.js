/**
*
* Search
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { MdSearch } from 'react-icons/lib/md';

import UnderlineHelper from './components/UnderlineHelper';
import SearchButtonHolder from './SearchButtonHolder';

import Wrapper from './Wrapper';
import Input from './Input';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  render() {
    const { changeHandler, value, attached, startSearch, emptyResult } = this.props;
    const { focus } = this.state;

    return (
      <Wrapper emptyResult={emptyResult} attached={attached} smallPlaceholder={focus || value.length > 0} onFocus={() => this.setState({ focus: true })} onBlur={() => this.setState({ focus: false })}>
        <Input onKeyDownCapture={(e) => e.keyCode === 13 ? startSearch() : null} autoCorrect="false" onChangeCapture={(e) => changeHandler(e.target.value)} value={value} />
        <UnderlineHelper value={value} />
        <SearchButtonHolder onClick={startSearch} visible={value.length > 0}>
          <MdSearch color={'gray'} size={35} />
        </SearchButtonHolder>
      </Wrapper>
    );
  }
}

Search.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
  attached: PropTypes.bool.isRequired,
  startSearch: PropTypes.func.isRequired,
  emptyResult: PropTypes.bool.isRequired,
};

export default Search;
