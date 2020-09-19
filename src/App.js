import React from 'react';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';

// import { connect } from 'react-redux';
import { Header } from './components'
import { Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

function App() {

  // const dispatch = useDispatch();

  //Get all state from app
  // const getStates = useSelector(state => state);
  // console.log(getStates);



  // React.useEffect(() => {
  //   axios.get('http://localhost:3001/pizzas').then(({ data }) => {
  //     dispatch(setPizza(data))
  //   });
  // }, []);


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* <Route path='/' render={() => <Home items={[]} />} exact /> */}
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  )

}

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.dispatch(setPizzaAction(data.pizzas));
//     });
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           {/* <Route path='/' component={Home} exact /> */}
//           <Route path='/' render={() => <Home items={this.props.items} />} exact />
//           <Route path='/cart' component={Cart} exact />
//         </div>
//       </div>
//     );
//   }
// }

//Fetch option
// React.useEffect(() => {
//   fetch('http://localhost:3000/db.json')
//     .then((resp) => resp.json())
//     .then((json) => {
//       setItems(json.pizzas);
//     })
// });

//Axios option
// React.useEffect(() => {
//   axios.get('http://localhost:3000/db.json').then(({ data }) => {
//     setItems(data.pizzas);
//   });
// }, []);

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizza.items,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizza: (items) => dispatch(setPizzaAction(items)),
//     dispatch
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(App);
