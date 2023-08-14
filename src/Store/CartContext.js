import React from "react";


const CartContext = React.createContext({
    items : [],
    addItem : (item) => {},
    removeItem : (id) => {},
    removeOneIOtem : (item) => {},
    addAllItem : (items) => {}
})

export default CartContext;