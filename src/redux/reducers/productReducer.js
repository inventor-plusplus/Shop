import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    products: [
        {
            id: 1,
            title: "Nike Shoes 01",
            category: "Shoes",
        },
    ]
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
} 