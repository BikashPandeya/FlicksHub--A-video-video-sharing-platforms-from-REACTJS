import axios from "axios"

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY

const BASE_URL ='https://youtube-v31.p.rapidapi.com' 

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
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
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