const INITIAL_STATE = {
  recovered: 0,
  deaths: 0,
  confirmed: 0,
};

export const staticReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH':
    {
        return {
          ...state,
          recovered: action.payload.recovered,
          deaths: action.payload.deaths,
          confirmed: action.payload.confirmed,
        };
    }

    default:
      return state;
  }
};
