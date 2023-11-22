const initialState = {
  photos: [
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
  ]
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PHOTO':
      return {
        ...state,
        photos: [...state.photos, action.payload]
      };
    default:
      return state;
  }
};

export default photoReducer;