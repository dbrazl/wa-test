
const questionReducer = (state: any, action: any) => {
  switch(action.type) {
    case '@QUESTION/SAVE_QUESTIONS':
      return {
        ...state,
        questions: action.payload.questions,
      }

    case '@QUESTION/SAVE_ANSWERS':
      return {
        ...state,
        answers: action.payload.answers,
      }

    default:
      return;
  }
}

export default questionReducer;