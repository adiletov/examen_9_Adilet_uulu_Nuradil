import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://examen9-84b71.firebaseio.com'
});
export default axiosApi;