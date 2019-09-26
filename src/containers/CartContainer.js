import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import * as Message from './../constants/Message'
import CartResult from '../components/CartResult';


class CartContainer extends React.Component {
    showCartItem = (cart) => {
        var result = Message.MSG_CART_IS_EMPTY;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={index}
                        item={item}
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


export default connect(mapStateToProps, null)(CartContainer);
