import axios from "axios";

const API_URL = "https://rqebjtohxtjzkfimoxeh.supabase.co/rest/v1/checkout_orders";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZWJqdG9oeHRqemtmaW1veGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTE2NjAsImV4cCI6MjA2NTI4NzY2MH0.12HsGsLGs8y2V55TH9_As2om2TK3bG7OHAo-NW_6Wck"; // lanjutkan key kamu

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation"
};

export const CheckoutAPI = {
  async saveOrder(data) {
    try {
      const response = await axios.post(API_URL, JSON.stringify(data), { headers });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
};
