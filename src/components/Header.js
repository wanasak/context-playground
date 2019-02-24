import React from 'react';
import Basket from './Basket';
import CurrencySelector from './CurrencySelector';

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
