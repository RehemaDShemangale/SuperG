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
} from '../actions/types';



const initialState = {
    product:[],
    UserId:'',
    Country:'',
    Int_phone:'',
    Contacts:[],
    Program:{},
    Courses:{},
    photo:'',
    enrolled:{},
    lessons:{},
    cart:{},
    order:{}

};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CONTACT:
            console.log(action.payload)
            return {
                ...state,
                Contacts:action.payload.contacts,
                ContactsById: {
                    ...state.ContactsById,
                    ...action.payload.ContactById
                }

            };
            break;
        case UPDATE_USER:
            console.log("action",action.payload)
            return {
                ...state,
                UserId:action.payload
            };
            break;

        case UPDATE_PRODUCT:
            //console.log("action",action.payload)
            return {
                ...state,
                product:action.payload
            };
            break;
        
        case UPDATE_ORDER:
            console.log("action",action.payload)
            return {
                ...state,
                order:{
                    ...state.order,
                }
            };
            break;

        case UPDATE_CART:
            console.log("action",action.payload)
            return {
                ...state,
                cart:{
                    ...state.cart,
                    [action.payload.id]:{
                        ...action.payload
                    }
                }
            };
            break;
        case REMOVE_CART:
            return {
                ...state,
                cart:action.payload
                
            }
            break;

        case UPDATE_COUNTRY:
                    return {
                        ...state,
                        Country:action.country
                    };
                    break;   

         case UPDATE_COURSE:
            
                    return {
                        ...state,
                        Courses:{
                            ...state.Courses,
                         [action.payload.program_id]:{
                            ...state.Courses[action.payload.program_id],
                          [action.payload.id]:{
                            ...action.payload
                          } 
                         }
                        }
                    };
                    break;   

        case UPDATE_INTNUMBER:
                        return {
                            ...state,
                            Int_phone:action.number.toString()
                        };
                        break;  

        case RESET_DATA:
            return {
                ...state,
                UserId:'',
                Country:'',
                Int_phone:'',
                Contacts:[],
                ContactsById:{},
                names:''
            };
            break;
        default:
            return state;
    }
} 