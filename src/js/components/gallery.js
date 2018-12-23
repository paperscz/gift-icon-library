import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from './loading';
import { loadIcons } from '../actions';

class Gallery extends Component {
  static propTypes = {
    loadIcons: Proptypes.func,
    gallery: Proptypes.array,
  }

  componentDidMount() {
    this.props.loadIcons();
  }

  loaded = () => {
    return 'llo';
  }

  render() {
    const {
      gallery,
    } = this.props;

    return gallery ? this.loaded() : <Loading />;
  }
}

function mapStateToProps(state) {
  return {
    gallery: state.gallery,
  };
}

export default connect(
  mapStateToProps, { loadIcons }
)(Gallery);
