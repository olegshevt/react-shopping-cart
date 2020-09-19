import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
});

export const fetchProduct = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/db.json/pizzas?${
        category !== null ? `category=${category}` : ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`,
    )
        .then(({ data }) => {
            dispatch(setProduct(data))
        })
}

export const setProduct = (items) => ({
    type: 'SET_PRODUCT',
    payload: items,
})