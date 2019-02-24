import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCurrencySymbol, convertCurrency } from '../currency';

export default class Basket extends Component {
  render() {
    const { items, total } = this.props;
    const { currency } = this.context;
    return (
      <div>
        {items} items | {getCurrencySymbol(currency)}
        {convertCurrency(total, currency)}
      </div>
    );
  }
}

Basket.contextTypes = {
  currency: PropTypes.string
};
