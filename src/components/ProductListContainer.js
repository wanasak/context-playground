import { connect } from 'react-redux';
import ProductListing from './ProductList';

function mapStateToProps(state) {
  return {
    currency: state.currency
  };
}

export default connect(mapStateToProps)(ProductListing);
