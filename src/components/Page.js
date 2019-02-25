import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import MainContent from './MainContent';
import PropTypes from 'prop-types';

export default class Page extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currency: 'gbp'
  //   };
  // }

  // getChildContext() {
  //   return {
  //     currency: this.state.currency,
  //     setCurrency: currency => {
  //       this.setState({ currency });
  //     }
  //   };
  // }

  render() {
    return (
      <div>
        <Header />
        <div>
          <SideBar />
          <MainContent />
        </div>
      </div>
    );
  }
}

// Page.childContextTypes = {
//   currency: PropTypes.string,
//   setCurrency: PropTypes.func
// };
