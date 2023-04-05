import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


// Function to call the API, pass the dynamic url and then call it from any component within our application
export const fetchFromAPI = async (url) => {
  // Axios is an open source library that allows you to make HTTP requests
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);    //This is the template string

    return data;     // it will return a promise
}



//   '6682ea5b78msh389095314f6bb43p1350a8jsnf5f98caa8df9'