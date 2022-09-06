import classes from './Cart.module.css';

const Cart = props => {
    let arr = [{
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    }];
    const cartItems = arr.map((item) => <li>{item.name}</li>)
    return (
        <div>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes['button']}>Order</button>

            </div>
        </div>

    )
}

export default Cart;