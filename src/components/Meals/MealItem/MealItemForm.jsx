import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {

    const addAmountHandler = (e) => {
        e.preventDefault();
        console.log('clicked');
        
    }
    return (
        <form className={classes.form}>
            <Input />
            <button onClick={(e) => addAmountHandler(e)}>+Add</button>
        </form>
    )
}

export default MealItemForm;