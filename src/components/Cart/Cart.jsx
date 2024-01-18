const Cart = props => {
    console.log(props.show)
    return (
        props.show ? 
        <ul >
            <li>First chosen meal example <span>-+ btn</span></li>
            <li>Second chosen meal example <span>-+ btn</span></li>
            <li>Third chosen meal example <span>-+ btn</span></li>
        </ul>
        : null
    )
}

export default Cart;