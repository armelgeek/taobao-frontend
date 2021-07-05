export const addProduct = ({ name, price, count , id }) => ({
    type: 'ADD_PRODUCT',
    name,
    price,
    count,
    id
  })
  
  export const removeProduct = ({ id }) => ({
    type: 'REMOVE_PRODUCT',
    id
  })
  
  export const setCount = ({ id, count }) => ({
    type: 'SET_COUNT',
    count,
    id
  })