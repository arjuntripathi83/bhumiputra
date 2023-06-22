import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    
    // const cartItemsinSession = JSON.parse(localStorage.getItem('cartItems'));

    const [cartItems, setCartItems] = useState([]);
    const [favoriteList, setFavoriteList] = useState([]);

    const [cartOpen, setCartOpen] = useState(false);

    // useEffect(() => {
    //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // }, [cartItems])
    

    const addItemToCart = (item) => {

        const exist = cartItems.find((cartItem) => cartItem.id === item.id);
        if (exist) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : cartItem
                )
            );
            return;

        }
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
        // localStorage.setItem('cartItems', JSON.stringify(cartItems));

    };

    const addToFavoriteList = (item) => {
        const exist = favoriteList.find((favoriteItem) => favoriteItem.id === item.id);
        if (exist) {
            setFavoriteList(
                favoriteList.map((favoriteItem) =>
                    favoriteItem.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : favoriteItem
                )
            );
            return;

        }
        setFavoriteList([...favoriteList, { ...item, quantity: 1 }]);
    }

    const removeItemFromCart = (item) => {
        const exist = cartItems.find((cartItem) => cartItem.id === item.id);
        if (exist.quantity === 1){
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
            // localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } else {
            // console.log(exist);
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...exist, quantity: exist.quantity - 1 } : cartItem
                )
            );
            // localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    };

    const removeItemFromFavoriteList = (item) => {
        const exist = favoriteList.find((favoriteItem) => favoriteItem.id === item.id);
        if (exist.quantity === 1){
            setFavoriteList(favoriteList.filter((favoriteItem) => favoriteItem.id !== item.id));
        } else {
            setFavoriteList(
                favoriteList.map((favoriteItem) =>
                    favoriteItem.id === item.id ? { ...exist, quantity: exist.quantity - 1 } : favoriteItem
                )
            );
        }
    }

    const isInFavoriteList = (item) => {
        return favoriteList.find((favoriteItem) => favoriteItem.id === item.id);
    }

    const clearCart = () => {
        setCartItems([]);
        // localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    const isInCart = (item) => {
        return cartItems.find((cartItem) => cartItem.id === item.id);
    };

    const getCartTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.Price * item.quantity, 0);
    };

    const getCartItemsCount = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    };
    
    return (
        <ProductContext.Provider value={{
            cartItems,
            addItemToCart,
            removeItemFromCart,
            clearCart,
            isInCart,
            getCartTotal,
            getCartItemsCount,
            favoriteList,
            addToFavoriteList,
            removeItemFromFavoriteList,
            isInFavoriteList,
            cartOpen, setCartOpen

        }}>
        {children}
        </ProductContext.Provider>
    )
}

const useProductContext = () => useContext(ProductContext);

export default useProductContext;