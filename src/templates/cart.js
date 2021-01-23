import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
//import CartItem from "../components/cartItem"
//import SEO from "../components/seo"
//import FormatedPrice from "../components/formatedPrice"
import AddToCartButton from '../components/addToButton'
const Cart = () => {
    let [cartItems, setCartItems] = useState([])

    useEffect(() => {
        let items = !localStorage.getItem("cart")
            ? null
            : JSON.parse(localStorage.getItem("cart"))

        if (null != items) {
            setCartItems(items)
        }
    }, [])

    function removeItemFromCart(id) {
        let updatedCartItems = cartItems.filter(item => item.id !== id)
        localStorage.setItem("cart", JSON.stringify(updatedCartItems))
        setCartItems(updatedCartItems)
    }
    //<SEO title="Cart" />

    let total = 0
    return (
        <Layout>
            <h1 css={{marginTop: '100px'}}> Cart</h1>

            <table className="woocommerce-cart__wrapper">
                <thead>
                    <tr>
                        <th className="product-heading">Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Sub Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {console.log(cartItems)}
                    {cartItems.map(item => {
                        total += Number.parseInt(item.price.replace("$", "")) * item.qty
                        return (
                            <p key={item.id} {...item} removeItem={removeItemFromCart} >
                              {item.name}
                            </p>
                        )
                    })}
                    <tr>
                        <td className="woocommerce-cart__total" colSpan="4">Total: <p price={total} /></td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    )
}

export default Cart;
