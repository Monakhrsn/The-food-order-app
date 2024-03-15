import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
    const cartCTX = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addItemToCartHandler = amount => {
        cartCTX.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            itemImg: props.itemImg
        })
    };
    return (
        <li className={classes.meal}>
            <div className={classes.itemImg}>
                <img src={props.itemImg} alt='Meals'/>
            </div> 
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;

