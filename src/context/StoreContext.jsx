import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)
    
const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

   const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
   }

   const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems)
        {
            if (cartItems[item]>0) {
                let itemInfo = food_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price* cartItems[item ];
            }
            
        }
        return totalAmount;
   }

//    const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for(const item in cartItems)
//         {
//             if(cartItems[item]>0){
//                 let itemInfo = food_list.find((product)=>product._id === item);
//                 totalAmount += itemInfo.price * cartItems[item];
//             }
//         }
//         return totalAmount;
//    } 

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
        // getTotalCartAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;



// import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";

// export const StoreContext = createContext(null)

// const StoreContextProvider = (props) => {
//     const [cartItems,setcartItems] = useState({});

//     const addToCart = (itemId) => {
//         if (!cartItems[itemId]) {
//             setcartItems((prev)=>({...prev,[itemId]:1}))           
//         }

//         else {
//             setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            
//         }
//     }

//     const removeFromCart = (itemId) => {
//         setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

//     }

//     useEffect(() =>{
//         console.log(cartItems);
//     },[cartItems])

//     const contextValue = {
//         food_list,
//         cartItems,
//         setcartItems,
//         setcartItems,
//         addToCart,
//         removeFromCart

//     }

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;