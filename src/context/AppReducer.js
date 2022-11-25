const news = (state, action) => {
  switch ("GET_NEWS") {
    case "GET_NEWS":
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};
export default news;
