var initialState = [
    {
        id: 1,
        name: 'Iphone 7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600.jpg',
        description: 'Apple',
        price: 500,
        inventory: 10,
        rating: 3

    },
    {
        id: 2,
        name: 'Galaxy Note 10',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/n/o/note_10_xanh.jpg',
        description: 'SamSung',
        price: 1000,
        inventory: 20,
        rating: 5
    },
    {
        id: 3,
        name: 'Xiaomi Redmi note 8',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/10/637037206354086148_xiaomi-redmi-note-8-pro-5.png',
        description: 'Xiaomi',
        price: 300,
        inventory: 40,
        rating: 4
    }
];

const products = (state= initialState, action) => {
    switch(action.type){
        default: return [...state]
    }
}

export default products

