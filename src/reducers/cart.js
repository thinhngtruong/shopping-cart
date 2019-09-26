import * as types from './../constants/ActionTypes'
var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity } = action
    var index;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            console.log(index)
            if (index !== -1) {
                state[index].quantity += quantity;
            }
            else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                    index = i;
            }
        }
    }
    return index;
}

export default cart

