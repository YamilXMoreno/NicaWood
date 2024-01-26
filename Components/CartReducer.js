const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Check if the product is already in the cart
        const existingItemIndex = state.cartItems.findIndex(
          (item) =>
            item.id === action.payload.id &&
            item.selectedSize === action.payload.selectedSize &&
            item.selectedColor === action.payload.selectedColor
        );
  
        if (existingItemIndex !== -1) {
          // If the product is already in the cart, update the quantity
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[existingItemIndex].selectedQuantity +=
            action.payload.selectedQuantity;
  
          return {
            ...state,
            cartItems: updatedCartItems,
          };
        } else {
          // If the product is not in the cart, add it
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
        }
  
      case 'REMOVE_FROM_CART':
        // Remove the item from the cart based on its unique identifier (e.g., product ID, size, color)
        const updatedCartItems = state.cartItems.filter(
          (item) =>
            !(item.id === action.payload.id &&
              item.selectedSize === action.payload.selectedSize &&
              item.selectedColor === action.payload.selectedColor)
        );
  
        return {
          ...state,
          cartItems: updatedCartItems,
        };
  
      case 'UPDATE_QUANTITY':
        // Update the quantity of a specific item in the cart
        const itemToUpdateIndex = state.cartItems.findIndex(
          (item) =>
            item.id === action.payload.id &&
            item.selectedSize === action.payload.selectedSize &&
            item.selectedColor === action.payload.selectedColor
        );
  
        if (itemToUpdateIndex !== -1) {
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[itemToUpdateIndex].selectedQuantity =
            action.payload.selectedQuantity;
  
          return {
            ...state,
            cartItems: updatedCartItems,
          };
        }
  
      // Add more cases as needed
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  