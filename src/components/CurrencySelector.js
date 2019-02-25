import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CurrencySelector extends Component {
  valueChange(e) {
    const target = e.nativeEvent.target;
    const newCurrency = target.options[target.selectedIndex].value;
    // this.context.setCurrency(newCurrency);
    this.props.currencyChanged(newCurrency);
  }

  render() {
    // const { currency } = this.context;
    const { currency } = this.props;
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

// CurrencySelector.contextTypes = {
//   currency: PropTypes.string,
//   setCurrency: PropTypes.func
// };

CurrencySelector.propTypes = {
  currency: PropTypes.string,
  currencyChanged: PropTypes.func
};
