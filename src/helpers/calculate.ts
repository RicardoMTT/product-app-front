import {CartItem} from '../types/typeApp'

export const calculateTotal = (carItems:CartItem[]):number => {
    return carItems.reduce((acum,item)=>acum+(item.amount*item.price),0);
}

export const getTotalItems = (carItems:CartItem[]):number => {
    return carItems.reduce((acum,item)=>acum+(item.amount),0);
}