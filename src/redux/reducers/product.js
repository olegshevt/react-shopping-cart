
const initialState = {
    items: [],
    isLoaded: false
}

const product = (state = initialState, action) => {
    if (action.type === 'SET_PRODUCT') {
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    }
    return state;
}

export default product;