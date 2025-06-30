import React, { createContext } from "react";
export const ShopContext=createContext(null);
import all_product from "../components/Assets/all_product";

const ShopContextProvider=(props)=>{
    const contextValue={all_product};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;
