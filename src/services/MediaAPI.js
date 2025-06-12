import axios from "axios";

const API_URL = "https://qzsjeswozynhzyrgorsu.supabase.co/rest/v1/Media";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6c2plc3dvenluaHp5cmdvcnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTA5ODIsImV4cCI6MjA2NTI4Njk4Mn0.Ffzc64xHv81rFlrwnUM8FFbL8YB782-ShIVtQBV42Bo";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation"
};

export const MediaAPI = {
  fetchMedia: async () => {
    try {
      const res = await axios.get(API_URL, { headers });
      return res.data;
    } catch (err) {
      console.error("Error fetchMedia:", err.response?.data || err.message);
      throw new Error("Gagal memuat media");
    }
  },

  addMedia: async (media) => {
    try {
      const res = await axios.post(API_URL, media, { headers });
      return res.data[0];
    } catch (err) {
      console.error("Error addMedia:", err.response?.data || err.message);
      throw new Error("Gagal menambahkan media");
    }
  }
};

