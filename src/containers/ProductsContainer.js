import React from 'react';
import { connect } from 'react-redux'
import Products from './../components/Products'
import ProductItem from './../components/ProductItem'
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index'


class ProductsContainer extends React.Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        )
    }
    showProduct = (products) => {
        var result = null;
        var {addToCart, changeMessage} = this.props
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem 
                key={index} 
                product={product} 
                addToCart = {addToCart}
                changeMessage = {changeMessage}/>
            });
        }
        return result
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        changeMessage: (message) => {
            dispatch(actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
