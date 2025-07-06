import axios from "axios";

const API_URL = "https://rqebjtohxtjzkfimoxeh.supabase.co/rest/v1/media";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZWJqdG9oeHRqemtmaW1veGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTE2NjAsImV4cCI6MjA2NTI4NzY2MH0.12HsGsLGs8y2V55TH9_As2om2TK3bG7OHAo-NW_6Wck";

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

