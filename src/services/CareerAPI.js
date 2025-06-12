import axios from 'axios';

const API_URL = "https://qzsjeswozynhzyrgorsu.supabase.co/rest/v1/Article"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6c2plc3dvenluaHp5cmdvcnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTA5ODIsImV4cCI6MjA2NTI4Njk4Mn0.Ffzc64xHv81rFlrwnUM8FFbL8YB782-ShIVtQBV42Bo"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const CareerAPI = {
  fetchJobs: async () => {
    const res = await axios.get(API_URL, { headers });
    return res.data;
  },
  createJob: async (job) => {
  try {
    const res = await axios.post(API_URL, job, { headers });
    return res.data;
  } catch (error) {
    console.error("CREATE ERROR:", error.response?.data || error.message);
    throw error;
  }
},

  deleteJob: async (id) => {
    const res = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
    return res.data;
  },
};
