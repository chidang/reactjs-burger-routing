import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{

  state = {
    ingredients: {
      cheese: 2,
      meat: 1,
      bacon: 1,
      salad: 2
    }
  }

  render () {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <div>Burger Builder</div>
      </>
    );
  }
}

export default BurgerBuilder;