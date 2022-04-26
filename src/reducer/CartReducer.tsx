import { CartActionReducer, CartItem } from "../types/typeApp";

const cartReducer = (state: CartItem[], action: CartActionReducer) => {
  switch (action.type) {
    case "ADD":
      const existProduct = state.find((item) => item.id == action.payload.id);
      if (existProduct) {
        return state.map((item) => {
          if (item.id == action.payload.id) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          return item;
        });
      } else { // No existe el producto
        const { id, title, image, price } = action.payload;
        return [...state, { id, title, image, price, amount: 1 }];
      }

    case "REMOVE":
      
    return state.reduce((acum,item)=>{
        if (item.id == action.payload) {
          if(item.amount == 1)return acum;
          else return [...acum,{...item,amount:item.amount-1}]      
        }else{
          return [...acum,item]
        }
      },[]as CartItem[]);
    case "REMOVE-ALL":

      return state.filter((item)=>item.id != action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export default cartReducer;
