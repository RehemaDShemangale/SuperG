import { 
    UPDATE_USER,
    UPDATE_CONTACT,
    RESET_DATA,
    UPDATE_COUNTRY,
    UPDATE_INTNUMBER,
    REMOVE_CART,
    UPDATE_COURSE,
    UPDATE_PRODUCT,
    UPDATE_ENROLLED,
    UPDATE_CART,
    UPDATE_ORDER
 } from './types';


/////////////////////////////////////
/////////  ACTION TRIGGERS  /////////
/////////////////////////////////////
export const updateUser =(data)=>{
    return{
        type:UPDATE_USER,
        payload:data
    }
}

export const updateEnrolled =(data)=>{
    return{
        type:UPDATE_ENROLLED,
        payload:data
    }
}

export const removeCart =(data)=>{
    return (dispatch, getState) => {
        const cart = getState().app.cart;
        
       const newcart=delete cart[data]
          console.log("action1",cart)
          console.log("newcart",newcart)
          dispatch({
            type:REMOVE_CART,
            payload:cart
          });
        
    
        //console.log("original data=", now_od_items);
        //console.log("updated data=", new_od_items);
      };
}

export const updateCart =(data)=>{
    return{
        type:UPDATE_CART,
        payload:data
    }
}

export const updateOrder =(data)=>{
    return{
        type:UPDATE_ORDER,
        payload:data
    }
}

export const updateProduct =(data)=>{
    return{
        type:UPDATE_PRODUCT,
        payload:data
    }
}

export const updateCountry =(data)=>{
    return{
        type:UPDATE_COUNTRY,
        country:data
    }
}

export const updateIntNumber =(data)=>{
    return{
        type:UPDATE_INTNUMBER,
        number:data
    }
}

export const resetData = () => {
    return {
        type: RESET_DATA
    }
}