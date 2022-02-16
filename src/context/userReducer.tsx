
const userReducer = (state: any, action: any) => {
  switch(action.type) {
    case '@USER/CHANGE_NAME':
      return {
        ...state,
        name: action.payload.name,
      }

    case '@USER/CHANGE_NUMBER_OF_QUESTIONS':
      return {
        ...state,
        numberOfQuestions: action.payload.numberOfQuestions,
      }

    default:
      return;
  }
}

export default userReducer;