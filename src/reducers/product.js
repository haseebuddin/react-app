const initialState = {
    products:[],
    loading:true
}

export default function productsReducer(state = initialState, action) {
    console.log("action type",action.products);
    switch (action.type) {
        case "UPDATE_PRODUCTS" :
            // console.log("action products:",action.products);
            return Object.assign({}, state, {products:action.products,});
        default : return state;

    }

}
