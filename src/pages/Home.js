import React from 'react';
import { Categories, Sort, ProductBlock } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct, fetchProduct } from '../redux/actions/product';
import { setCategory, setSortBy } from '../redux/actions/filter';
import { addProductToCart } from '../redux/actions/cart';


function Home() {

    const categoryNames = ['Professional', 'Standart', 'New', 'Home', 'Restaurant'];
    const sortItems = [
        { name: 'popularity', type: 'popular', order: 'desc' },
        { name: 'price', type: 'price', order: 'desc' },
        { name: 'alphabet', type: 'name', order: 'asc' },
    ];

    const dispatch = useDispatch();
    const items = useSelector(({ product }) => product.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    // const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filter }) => filter);

    // const onSelectSortType = React.useCallback((type) => {
    //     dispatch(setSortBy(type));
    // }, []);
    // console.log(category);



    // React.useEffect(() => {
    //     axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    //         dispatch(setProduct(data))
    //     });
    // }, []);

    React.useEffect(() => {
        dispatch(fetchProduct(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    // const handleAddProductToCart = React.useCallback((obj) => {
    //     dispatch(addProductToCart(obj));
    // }, []);

    const handleAddProductToCart = (obj) => {
        dispatch({
            type: 'ADD_PRODUCT_CART',
            payload: obj,
        });
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                    activeCategory={category}
                />
                <Sort activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">All products</h2>
            <div className="content__items">
                {items.map((obj) => (
                    <ProductBlock
                        itemsCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                        onClickAddProduct={handleAddProductToCart}
                        key={obj.id} {...obj} />
                ))}

            </div>
        </div>
    )

}


export default Home;