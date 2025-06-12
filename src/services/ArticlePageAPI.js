import axios from 'axios'

const API_URL = "https://qzsjeswozynhzyrgorsu.supabase.co/rest/v1/ArticlePage"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6c2plc3dvenluaHp5cmdvcnN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTA5ODIsImV4cCI6MjA2NTI4Njk4Mn0.Ffzc64xHv81rFlrwnUM8FFbL8YB782-ShIVtQBV42Bo"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const ArticlePageAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createArticlePage(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    }
}