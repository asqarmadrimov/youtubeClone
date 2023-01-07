 import axios from "axios";

 export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

 const options = {
   params: {
     maxResults: '50'
   },
   headers: {
     'X-RapidAPI-Key': '07056f049bmsh0b6644d9b84e0a6p1afe33jsn6c8559a15b1a',
     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
   }
 };
export const ApiKey = {
  async fetchApi(url) {
    const res = await axios.get(`${BASE_URL}/${url}`, options)
    return res.data
  }
}