import { LOAD_LAUNCHES_DATA, PENDING, SUCCESS, FAIL } from '../constants';

export const initialState = {
  loadingData: false,
  launchesDataSet: [],
};

const loadLaunchesDataActionMap = {

  [LOAD_LAUNCHES_DATA + PENDING]: (state) => {
    return {
      ...state,
      loadingData: true,
    };
  },
  [LOAD_LAUNCHES_DATA + FAIL]: (state) => {
    return {
      ...state,
      loadingData: false,
    };
  },
  [LOAD_LAUNCHES_DATA + SUCCESS]: (state, action) => {
    const { payload: { data } } = action;

    return {
      ...state,
      launchesDataSet: data || [],
      loadingData: false,
    };
  },
};


const actionsMap = {
  ...loadLaunchesDataActionMap,
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}