import axios from "axios";

const API_URL = "https://rqebjtohxtjzkfimoxeh.supabase.co/rest/v1/preorder";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZWJqdG9oeHRqemtmaW1veGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTE2NjAsImV4cCI6MjA2NTI4NzY2MH0.12HsGsLGs8y2V55TH9_As2om2TK3bG7OHAo-NW_6Wck" // pakai key-mu


const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation"
};

export const PreOrderAPI = {
  addPreOrder: async (data) => {
    try {
      const res = await axios.post(API_URL, data, { headers });
      console.log("Insert success:", res.data);
      return res.data;
    } catch (err) {
      console.error("Insert failed:", err.response?.data || err.message);
      throw err;
    }
  },

  fetchPreOrders: async () => {
    try {
      const res = await axios.get(API_URL, { headers });
      return res.data;
    } catch (err) {
      console.error("Fetch failed:", err.response?.data || err.message);
      throw err;
    }
  },
};