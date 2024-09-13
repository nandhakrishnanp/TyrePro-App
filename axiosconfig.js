import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://192.168.203.170:3000', // Replace with your base URL
  //https://tyrelife-chefgvbhb7fdhhg9.eastus-01.azurewebsites.net
});

// Export the instance
export default axiosInstance;