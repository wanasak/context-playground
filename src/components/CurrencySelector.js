import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CurrencySelector extends Component {
  valueChange(e) {
    const target = e.nativeEvent.target;
    const newCurrency = target.options[target.selectedIndex].value;
    this.context.setCurrency(newCurrency);
  }

  render() {
    const { currency } = this.context;
    return (
      <div>
        <select defaultValue={currency} onChange={e => this.valueChange(e)}>
          <option value="gbp">Pounds</option>
          <option value="usd">Dollars</option>
        </select>
      </div>
    );
  }
}

CurrencySelector.contextTypes = {
  currency: PropTypes.string,
  setCurrency: PropTypes.func
};
