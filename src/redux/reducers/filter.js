
const initialState = {
    category: null,
    sortBy: { name: 'popularity', type: 'popular', order: 'desc' }
}

const filter = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload
        }
    }

    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload
        }
    }

    return state;
}

export default filter;