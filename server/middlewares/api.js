import axios from '../../../utils/api';

export default axios.create({
  baseURL: 'https://api.deezer.com',
});
