const API_URI = "https://backend-dfx.onrender.com"
import axios from "axios";

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };    

export const apiRoutes = {
    

    getCases: async(data) => { 
        return axios.get(`${API_URI}/api/cases`, { params: data }, config)
            .then(response => response.data)
            .catch(error => {
                console.error("Error fetching cases:", error);
                throw error;
            });
    },
    getCasesById: async(id) => { 
        return axios.get(`${API_URI}/api/cases/caso/${id}`, config)
            .then(response => response.data)
            .catch(error => {
                console.error("Error fetching case by ID:", error);
                throw error;
            });
    },
    deleteCase: async(id) => { 
        return axios.delete(`${API_URI}/api/cases/caso/${id}`, config)
            .then(response => response.data)
            .catch(error => {
                console.error("Error deleting case:", error);
                throw error;
            });
    },
    postUser: async(data) => { 
        return axios.post(`${API_URI}/api/users/register`, data, config)
            .then(response => response.data)
            .catch(error => {
                console.error("Error creating user:", error);
                throw error;
            });
    },
    getAllUsers: async() => { 
        return axios.get(`${API_URI}/api/users`, config)
            .then(response => response.data)
            .catch(error => {
                console.error("Error fetching users:", error);
                throw error;
            });
    },
}

export default apiRoutes;