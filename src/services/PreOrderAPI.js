import axios from "axios";

const API_URL = "https://qzsjeswozynhzyrgorsu.supabase.co/rest/v1/PreOrder";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6c2plc3dvenluaHp5cmdvcnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTA5ODIsImV4cCI6MjA2NTI4Njk4Mn0.Ffzc64xHv81rFlrwnUM8FFbL8YB782-ShIVtQBV42Bo";


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