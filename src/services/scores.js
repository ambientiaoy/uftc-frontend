import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/scores';

const get = () => {
  return axios.get(baseUrl);
};

export default { get };
