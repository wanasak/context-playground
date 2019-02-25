import React from 'react';
import Basket from './BasketContainer';
import CurrencySelector from './CurrencySelectorContainer';

export default function Header() {
  return (
    <div className="header">
      <div>Super Electronis</div>
      <div>
        <CurrencySelector />
        <Basket items={0} total={0.0} />
      </div>
    </div>
  );
}
