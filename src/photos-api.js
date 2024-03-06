import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const API_KEY = "OLZaGPCBOH9MDdt4yiNC11jeXiccpe1127XRiC1xUTc"

export default async function fetchPhotos(searchQuery, page) {
  const response = await axios.get("search/photos", {
    params: {
      page,
      query: searchQuery,
      per_page: 12,
      
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    }
  }
  );
  return response.data;
}