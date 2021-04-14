import * as Types from '../constants/ActionTypes'

const initialState = [
    {
        id: 1,
        name: 'Samsung Galaxy s21',
        price: 15000,
        invetory: 6000,
        image: 'https://dienmaycholon.vn/public/picture/product/product17987/product_17987_1.png',
        description: 'Mo ta ve Samsung Galaxy s21',
        rate: 4
    },
    {
        id: 2,
        name: 'Oppo Reno5',
        price: 600,
        invetory: 2000,
        image: 'https://www.thegioididong.com/images/42/230772/oppo-reno5-pro-600x600-1-400x400.jpg',
        description: 'Mo ta ve Oppo Reno5',
        rate: 3
    },
    {
        id: 3,
        name: 'Iphone 12',
        price: 16000,
        invetory: 9000,
        image: 'https://www.techone.vn/wp-content/uploads/2020/10/trang-1.jpg',
        description: 'Mo ta ve Iphone 12',
        rate: 5
    }
]

export default (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}
