// services/Product.js
import axios from "axios";

const API_URL = "https://rqebjtohxtjzkfimoxeh.supabase.co/rest/v1/listproduct";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZWJqdG9oeHRqemtmaW1veGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTE2NjAsImV4cCI6MjA2NTI4NzY2MH0.12HsGsLGs8y2V55TH9_As2om2TK3bG7OHAo-NW_6Wck" // pakai key-mu

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export const Product = {
  fetch: async () => {
    const { data } = await axios.get(API_URL, { headers });
    return data;
  },

  fetchById: async (id) => {
    const { data } = await axios.get(`${API_URL}?id=eq.${id}`, { headers });
    return data[0];
  },
};
