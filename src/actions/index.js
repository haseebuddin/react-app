export function updateProducts(products) {
    console.log("products action: ",products);
    return {type: "UPDATE_PRODUCTS", products};
}