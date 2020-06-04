import { 
    UPDATE_USER,
    UPDATE_CONTACT,
    RESET_DATA,
    UPDATE_COUNTRY,
    UPDATE_INTNUMBER,
    REMOVE_CART,
    UPDATE_COURSE,
    UPDATE_PHOTO,
    UPDATE_ENROLLED,
    UPDATE_CART,
    UPDATE_ORDER
} from '../actions/types';



const initialState = {
    product:[
        {id:1,name:"Kabichi (Cabeg)",type:"chakula",jumla:500,reja:800,bg:"https://supergenge.000webhostapp.com/kabichi.png",desc:"kabi safi iliyo andaliwa fresh kwa matumizi ya binadamu kutoka arusha"},
        {id:2,name:"Nyama ya ng'ombe (meat)",type:"chakula",jumla:600,reja:900,bg:"https://supergenge.000webhostapp.com/nyama.png",desc:"Nyama safi isiyo na mafuta wala mifupa"},
        {id:3,name:"Bilinganya (Eggplant)",type:"chakula",jumla:700,reja:1000,bg:"https://supergenge.000webhostapp.com/bili.jpg",desc:"Bilinganya za duara kutoka morogoro"},
        {id:4,name:"Mchele (Rice)",type:"chakula",jumla:800,reja:1000,bg:"https://supergenge.000webhostapp.com/mchele.png",desc:"Mchele safi kutoka mbeya hauhitaji kuchambua"},
        {id:5,name:"Palmix",type:"other",jumla:900,reja:1200,bg:"https://supergenge.000webhostapp.com/palmOil.jpg",desc:"palmix kutoka india"},
        {id:6,name:"Blue Magic Oil",type:"vipodozi",jumla:980,reja:1100,bg:"https://supergenge.000webhostapp.com/oil.jpg",desc:"Mafuta mazuri ya nywele kutoka india"},
    ],
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

        case UPDATE_ENROLLED:
            //console.log("action",action.payload)
            return {
                ...state,
                enrolled:{
                    ...state.enrolled,
                    [action.payload]:action.payload
                }
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