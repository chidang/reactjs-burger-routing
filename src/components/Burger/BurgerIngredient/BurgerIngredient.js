import React from 'react';
import classes from './BurgerIngredient.module.css';

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type){
    case ('bread-bottom'):
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case ('bread-top'):
      ingredient = (
      <div className={classes.BreadTop}>
        <div className={classes.Seeds1}/>
        <div className={classes.Seeds2}/>
      </div>);
      break;
    case ('meat'):
      ingredient = <div className={classes.Meat}></div>;
      break;
    case ('chees'):
      ingredient = <div className={classes.Chees}></div>;
      break;
    case ('salad'):
      ingredient = <div className={classes.Salad}></div>;
      break;
    case ('bacon'):
      ingredient = <div className={classes.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
}

export default BurgerIngredient;