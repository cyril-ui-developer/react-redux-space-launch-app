import { LOAD_LAUNCHES_DATA } from '../constants';

const loadLaunchesData = () => {
  return {
    type: LOAD_LAUNCHES_DATA,
    payload: {
      client: 'default',
      request: {
        method: 'GET',
        url: 'launches',
      },
    },
  };
};

export default loadLaunchesData;