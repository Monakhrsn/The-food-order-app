import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/Fruiti-food.jpeg';
import HeaderCartButton from '../Layout/HeaderCartButton';

const Header = props => {
   
    return (
        <React.Fragment >
            <header className={classes.header} >
                <h1>Raw Vega Fruity</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Meals'/>
            </div>
        </React.Fragment>
    )
}

export default Header;