import axios from 'axios';

const API_URL = "https://rqebjtohxtjzkfimoxeh.supabase.co/rest/v1/article";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZWJqdG9oeHRqemtmaW1veGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTE2NjAsImV4cCI6MjA2NTI4NzY2MH0.12HsGsLGs8y2V55TH9_As2om2TK3bG7OHAo-NW_6Wck";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation" // agar dapat response data
};

export const ArticleAPI = {
  fetchArticles: async () => {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  addArticle: async (article) => {
    const response = await axios.post(API_URL, article, { headers });
    return response.data[0];
  },

  deleteArticle: async (id) => {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },

  updateArticle: async (id, updatedArticle) => {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, updatedArticle, {
      headers,
    });
    return response.data[0];
  },
};
