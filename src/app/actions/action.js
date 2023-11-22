export const addPhoto = (newPhotoUrl) => {
  return {
    type: 'ADD_PHOTO',
    payload: newPhotoUrl
  };
};
