import { ADD_TO_CART , REMOVE_TO_CART  } from "../Constants";

const initialState = {
    cardData: []
}

export default function cardItems(state = initialState , action){
    switch (action.type) {
        case ADD_TO_CART: 
       // console.log('reducer' ,action)
        return {
          
            ...state,
            cardData: [...state.cardData , action.data]
        }
        case REMOVE_TO_CART:
            // Create a copy of the cardData array excluding the last item
            const updatedCardData = state.cardData.slice(0, -1);
            return {
                ...state,
                cardData: updatedCardData
            };
        break;
        default: return state
    }
}