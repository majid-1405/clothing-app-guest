import axios from 'axios';

const API_URL = "https://qzsjeswozynhzyrgorsu.supabase.co/rest/v1/Career";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6c2plc3dvenluaHp5cmdvcnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTA5ODIsImV4cCI6MjA2NTI4Njk4Mn0.Ffzc64xHv81rFlrwnUM8FFbL8YB782-ShIVtQBV42Bo"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Prefer: "return=representation", // agar Supabase mengembalikan row yg dimasukkan
}

export const CareerAPI = {
  fetchJobs: async () => {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },
  addJob: async (job) => {
    const response = await axios.post(API_URL, JSON.stringify(job), { headers });
    return response.data[0]; // Supabase response: array of inserted rows
  },
  deleteJob: async (id) => {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
   updateJob: async (id, updatedJob) => {
    const response = await axios.patch(
      `${API_URL}?id=eq.${id}`,
      updatedJob,
      { headers }
    );
    return response.data[0];
  },
};