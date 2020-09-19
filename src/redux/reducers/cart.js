
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const specificProductTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_CART': {

            const currentProducts = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload];

            const itemsData = {
                ...state.items,
                [action.payload.id]: {
                    items: currentProducts,
                    totalPrice: specificProductTotalPrice(currentProducts),
                }
            }

            const totalCount = getTotalSum(itemsData, 'items.length');
            const totalPrice = getTotalSum(itemsData, 'totalPrice');

            return {
                ...state,
                items: itemsData,
                totalCount,
                totalPrice,
            }
        }

        case 'REMOVE_PRODUCT_CART': {
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0
            }
        }
        case 'REMOVE_PRODUCT_ITEM': {

            const stateItems = {
                ...state.items,
            };

            const currentTotalCount = stateItems[action.payload].items.length;
            const currentTotalPrice = stateItems[action.payload].totalPrice;
            delete stateItems[action.payload];

            return {
                ...state,
                items: stateItems,
                totalCount: state.totalCount - currentTotalCount,
                totalPrice: state.totalPrice - currentTotalPrice
            }
        }

        case 'PLUS_PRODUCT_ITEM': {
            const newProducts = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];

            const plusItemsData = {
                ...state.items,
                [action.payload]: {
                    items: newProducts,
                    totalPrice: specificProductTotalPrice(newProducts),
                }
            }

            const totalCount = getTotalSum(plusItemsData, 'items.length');
            const totalPrice = getTotalSum(plusItemsData, 'totalPrice');

            return {
                ...state,
                items: plusItemsData,
                totalCount,
                totalPrice,

            }
        }

        case 'MINUS_PRODUCT_ITEM': {
            const oldProducts = state.items[action.payload].items;
            const itemsData = oldProducts.length > 1 ? state.items[action.payload].items.slice(1) : oldProducts;

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: itemsData,
                    totalPrice: specificProductTotalPrice(itemsData)
                }
            }

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,

            }
        }
        default:
            return state;

    }
}
export default cart;