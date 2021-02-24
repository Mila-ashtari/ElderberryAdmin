import axios from 'axios';

export default axios.create({
  baseURL: 'https://elderberry-development-api.herokuapp.com'
});