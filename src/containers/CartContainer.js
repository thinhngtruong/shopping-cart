import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import * as Message from './../constants/Message'
import CartResult from '../components/CartResult';
import { deleteProductInCart, actChangeMessage, updateProductInCart } from './../actions/index'

class CartContainer extends React.Component {
    showCartItem = (cart) => {
        var result = Message.MSG_CART_IS_EMPTY;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={index}
                        item={item}
                        deleteProductInCart = {this.props.deleteProductInCart}
                        changeMessage = {this.props.changeMessage}
                        updateProductInCart = {this.props.updateProductInCart}
                    />
                );
            })
        }
        return result
    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }

    render() {
        var { cart } = this.props
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({

        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteProductInCart: (product) => {
            dispatch(deleteProductInCart(product))
        },
        changeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
        updateProductInCart: (product, quantity) => {
            dispatch(updateProductInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
