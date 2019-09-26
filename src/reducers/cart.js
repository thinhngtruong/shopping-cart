import * as types from './../constants/ActionTypes'
// var data = JSON.parse(localStorage.getItem(cart))
// var initialState = data ? data : [];

var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7',
            image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600.jpg',
            description: 'Apple',
            price: 500,
            inventory: 10,
            rating: 3
        },
        quantity: 5
    },
    {
        product: {
            id: 2,
            name: 'Galaxy Note 10',
            image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/n/o/note_10_xanh.jpg',
            description: 'SamSung',
            price: 1000,
            inventory: 20,
            rating: 5
        },
        quantity: 4
    }]

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return [...state]
        default: return [...state]
    }
}

export default cart

