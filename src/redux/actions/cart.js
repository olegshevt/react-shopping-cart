export const addProductToCart = (obj) => ({
    type: 'ADD_PRODUCT_CART',
    payload: obj
});

export const removeProductFromCart = () => ({
    type: 'REMOVE_PRODUCT_CART',
});

export const removeProductItem = (id) => ({
    type: 'REMOVE_PRODUCT_ITEM',
    payload: id
});

export const plusProductItem = (id) => ({
    type: 'PLUS_PRODUCT_ITEM',
    payload: id
});

export const minusProductItem = (id) => ({
    type: 'MINUS_PRODUCT_ITEM',
    payload: id
});