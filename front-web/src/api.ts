import axios from 'axios';

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAPBOX

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export function fetchLocalMapBox(local: string) {
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export default api;