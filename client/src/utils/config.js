export default {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://peter-maintenance-app.herokuapp.com/api/v1' : 'http://localhost:3000/api/v1',
};
