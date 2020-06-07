import { 
    UPDATE_USER,
    UPDATE_CONTACT,
    RESET_DATA,
    REMOVE_MALIPOCART,
    UPDATE_INTNUMBER,
    REMOVE_CART,
    UPDATE_MALIPOCART,
    UPDATE_PRODUCT,
    UPDATE_QUANTITY,
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

export const quantityUpdate =(qty,id)=>{
    return (dispatch, getState) => {
        const cart = getState().app.malipo_cart;
        const product = getState().app.product;
        const findObj =product.findIndex(obj => obj.id == id);
        const findObj1 =cart.findIndex(obj => obj.id == id);
        console.log("obj",findObj);
        const prod=product[findObj];
        const newcart=cart[findObj1];
          //console.log("action1",cart);
          //console.log("newcart",newcart);
           
          if(qty > 2){

            cart[findObj1] = { ...newcart, quantity: qty,type:prod.jumla };

            
            //console.log("action2",cart);
              dispatch({
                type:UPDATE_QUANTITY,
                payload:cart
              });
          }
          else{
            cart[findObj1] = { ...newcart, quantity: qty,type:prod.reja };

            //console.log("action2",cart);
              dispatch({
                type:UPDATE_QUANTITY,
                payload:cart
              });
          }

      };
}

export const removeCart =(data)=>{
    return (dispatch, getState) => {
        const cart = getState().app.cart;
        
       const newcart=delete cart[data]
         // console.log("action1",cart)
         // console.log("newcart",newcart)
          dispatch({
            type:REMOVE_CART,
            payload:cart
          });
        
      };
}

export const deleteMalipoCart =(data)=>{
    return (dispatch, getState) => {
        const malipo_cart = getState().app.malipo_cart;
        const cart = getState().app.cart;
        let fin=malipo_cart.filter(obj =>obj.id !=data)

          console.log("action",cart)
          console.log("action1",malipo_cart)
          console.log("newcart",fin)
          dispatch({
            type:REMOVE_MALIPOCART,
            payload:fin
          });
        
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

export const updateMalipoCart =(data)=>{
    return{
        type:UPDATE_MALIPOCART,
        payload:data
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