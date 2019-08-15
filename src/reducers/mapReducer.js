const defaultState = {
  sidebar: false
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case "OPEN-SIDE-BAR":
      return {...state, sidebar:true};
    default:
      return state;
  }
};
