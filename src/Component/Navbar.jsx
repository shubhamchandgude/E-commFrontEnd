import React from 'react'
import { UseSelector, useSelector } from 'react-redux';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
    Box,
    Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';

function Navbar() {
    const {cartTotalQuantity} = useSelector(state => state.cart)
    return (
        <>
            <nav className="nav-bar">
                <Link to="/">
                <h2>OnlineShop</h2>
                </Link>
                <Link to="/cart">
                <div className="nav-bag">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                </svg>
                <span className="bag-quantity">
                    <span>{cartTotalQuantity}</span>
                </span>
                </div>
                </Link>
            </nav>
        </>
    );
};

export default Navbar;