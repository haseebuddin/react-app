const initialState = {
    products: []
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_PRODUCTS" :
            return Object.assign({}, state, action.products);
        default : return state;

    }

}
