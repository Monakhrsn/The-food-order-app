import classes from './Input.module.css';

const Input = props => {

    return (
        <div className={classes.input}>
            <label>Amount</label>
            <input type='number'  />
        </div>
    )
}

export default Input;