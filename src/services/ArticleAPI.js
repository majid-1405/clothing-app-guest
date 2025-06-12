import axios from 'axios';

const API_URL = "https://qzsjeswozynhzyrgorsu.supabase.co/rest/v1/Article";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6c2plc3dvenluaHp5cmdvcnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTA5ODIsImV4cCI6MjA2NTI4Njk4Mn0.Ffzc64xHv81rFlrwnUM8FFbL8YB782-ShIVtQBV42Bo";

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
