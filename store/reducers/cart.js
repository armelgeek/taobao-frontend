const initialState = {
    cartItems: [],
  }
  
  const indexSameProduct = (state, action) => {
    const sameProduct = (product) => (
      product.id === action.id && 
      product.color === action.color && 
      product.size === action.size
    );
  
    return state.cartItems.findIndex(sameProduct)
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':   
  
        // rechercher si le produit existe deja dans le panier
        const index = indexSameProduct(state, action);
  
        if(index !== -1) {
          state.cartItems[index].count += action.count;
  
          return {
            ...state,
            cartItems: state.cartItems
          };
        }
  
        return {
          ...state,
          cartItems: [...state.cartItems,
            {
              id: action.id,
              name: action.name,
              price: action.price,
              count: action.count,
            }
          ]
        };
  
      case 'REMOVE_PRODUCT': 
      
        // rechercher le produit a supprimer
        state.cartItems.splice(indexSameProduct(state, action), 1);
  
        return {
          ...state,
          cartItems: state.cartItems
        };
  
      case 'SET_COUNT': 
        
        // find index and add new count on product count
        const indexItem = indexSameProduct(state, action);
        state.cartItems[indexItem].count = action.count;
  
        return {
          ...state,
          cartItems: state.cartItems
        };
    
      default:
        return state;
    }
  }
  
  export default cartReducer;