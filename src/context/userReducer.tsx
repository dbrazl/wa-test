
const userReducer = (state: any, action: any) => {
  switch(action.type) {
    case '@USER/CHANGE_NAME':
      return {
        ...state,
        name: action.payload.name,
      }
  }
}

export default userReducer;