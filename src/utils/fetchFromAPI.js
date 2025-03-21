import axios from "axios"

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY

// Check if API key is available
if (!RAPID_API_KEY) {
  console.error("RAPID API KEY is missing! Make sure you have a .env file with VITE_RAPID_API_KEY");
}

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    
    // Check for specific error types
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("API Error Response:", error.response.data);
      console.error("API Error Status:", error.response.status);
      
      if (error.response.status === 403) {
        throw new Error("API key may be invalid or quota exceeded");
      } else if (error.response.status === 404) {
        throw new Error("API endpoint not found");
      }
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response from server. Check your internet connection");
    }
    
    // Pass the error up to be handled by the component
    throw error;
  }
}


// const options = {
//     method: 'GET',
//     url: 'https://youtube-v31.p.rapidapi.com/search',
//     params: {
//       relatedToVideoId: '7ghhRHRP6t4',
//       part: 'id,snippet',
//       type: 'video',
//       maxResults: '50'
//     },
//     headers: {
//       'x-rapidapi-key': '0743b3629dmsh4a1e56da7159109p1c98a1jsne71bcb30567b',
//       'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
//     }
//   };