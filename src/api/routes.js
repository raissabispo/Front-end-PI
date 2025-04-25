const API_URI = "https://backend-dfx.onrender.com"
import axios from "axios";

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };    

export const apiRoutes = { // Essa constanta é uma função que retorna um objeto com métodos para fazer requisições HTTP para a API.

    //Cases
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
    createCase: async (data) => {
          return axios
            .post(`${API_URI}/api/cases`, data, config)
            .then((response) => response.data)
            .catch((error) => {
              console.error("Error creating case:", error);
              throw error;
            });
        },

    updateCase: async (id, data) => {
      return axios
        .put(`${API_URI}/api/cases/caso/${id}`, data, config)
        .then((response) => response.data)
        .catch((error) => {
          console.error("Error updating case:", error);
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

    createCaseByIdUser: async(id, data) => {
        return axios.post(`${API_URI}/api/cases/usuario/${id}`, data, config)
            .then(response => response.data)
            .catch(error => {
                console.error("Error creating case by user ID:", error);
                throw error;
            });
    },

    getCasesByUserId: async (id) => {
      return axios.get(`${API_URI}/api/cases/usuario/${id}/casos`, config)
        .then(response => response.data)
        .catch(error => {
          console.error("Error fetching cases by user ID:", error);
          throw error;
        });
    },

    //Users
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

    getUserById: async (id) => {
        return axios.get(`${API_URI}/api/users/${id}`, config)
        .then((response) => response.data)
        .catch((err) => 
            { console.error("Error fetching user by ID:", err); 
                throw err; 
            });
    },
    updateUser: async (id, data) => {
        return axios
          .put(`${API_URI}/api/users/${id}`, data, config)
          .then((response) => response.data)
          .catch((err) => 
            { console.error("Error updating user:", err); 
                throw err; 
            });
      },
    patchUser: async (id, data) => {
        return axios
          .patch(`${API_URI}/api/users/${id}`, data, config)
          .then((response) => response.data)
          .catch((err) => 
            { console.error("Error patching user:", err); 
            throw err; 
        });
      },
    deleteUser: async (id) => {
        return axios
          .delete(`${API_URI}/api/users/${id}`, config)
          .then((response) => response.data)
          .catch((err) => { console.error("Error deleting user:", err); 
            throw err; 
        });
      },

      // Auth
     login: async (credentials) => {
        return axios
        .post(`${API_URI}/api/auth/login`, credentials, config)
            .then((response) => response.data)
             .catch((err) => { console.error("Error logging in:", err); 
             throw err; 
        });
     },

     forgotPassword: async (email) => {
        return axios
          .post(`${API_URI}/api/auth/forgot-password`, { email }, config)
          .then((response) => response.data)
          .catch((err) => { console.error("Error requesting password reset:", err); 
            throw err; 
        });
      },

      resetPassword: async (token, newPassword) => {
        return axios
          .post(`${API_URI}/api/auth/reset-password`, { token, newPassword }, config)
          .then((response) => response.data)
          .catch((err) => { console.error("Error resetting password:", err); 
            throw err; 
        });
      },

// Evidence
     getAllEvidences: async () => {
        return axios
        .get(`${API_URI}/api/evidences`, config)
        .then((response) => response.data)
        .catch((err) => { console.error("Error fetching evidences:", err); 
            throw err; 
        });
    },

     getEvidenceById: async (id) => {
     return axios
        .get(`${API_URI}/api/evidences/${id}`, config)
        .then((response) => response.data)
        .catch((err) => { console.error("Error fetching evidence by ID:", err); 
            throw err; 
        });
     },

     createEvidence: async (data) => {
    return axios
        .post(`${API_URI}/api/evidences`, data, config)
         .then((response) => response.data)
         .catch((err) => { console.error("Error creating evidence:", err); 
            throw err; 
        });
     },

    uploadEvidenceImage: async (formData) => {
    const imageConfig = { headers: { ...config.headers, "Content-Type": "multipart/form-data" } };
    return axios
        .post(`${API_URI}/api/evidences/image`, formData, imageConfig)
         .then((response) => response.data)
         .catch((err) => { console.error("Error uploading evidence image:", err); 
            throw err; 
        });
    },

     updateEvidence: async (id, data) => {
    return axios
        .put(`${API_URI}/api/evidences/${id}`, data, config)
         .then((response) => response.data)
         .catch((err) => { console.error("Error updating evidence:", err); 
        throw err;
        });
    },
     patchEvidence: async (id, data) => {
    return axios
      .patch(`${API_URI}/api/evidences/${id}`, data, config)
         .then((response) => response.data)
         .catch((err) => { console.error("Error patching evidence:", err); 
         throw err; 
     });
    },
  deleteEvidence: async (id) => {
    return axios
      .delete(`${API_URI}/api/evidences/${id}`, config)
      .then((response) => response.data)
      .catch((err) => { console.error("Error deleting evidence:", err); 
          throw err;
         });
    },
  deleteEvidenceImage: async (id) => {
    return axios
      .delete(`${API_URI}/api/evidences/image/${id}`, config)
      .then((response) => response.data)
      .catch((err) => { console.error("Error deleting evidence image:", err); 
        throw err; 
        });
    },
    // Reports
    createReport: async (data) => {
    return axios
      .post(`${API_URI}/api/reports`, data, config)
      .then((response) => response.data)
      .catch((err) => { console.error("Error creating report:", err); 
        throw err; 
        });
      },
    getAllReports: async () => {
    return axios
      .get(`${API_URI}/api/reports`, config)
      .then((response) => response.data)
      .catch((err) => { console.error("Error fetching reports:", err); 
        throw err; 
        });
       },
    getReportById: async (id) => {
    return axios
      .get(`${API_URI}/api/reports/${id}`, config)
      .then((response) => response.data)
      .catch((err) => { console.error("Error fetching report by ID:", err); 
        throw err;
         });
       },
    updateReport: async (id, data) => {
    return axios
      .put(`${API_URI}/api/reports/${id}`, data, config)
      .then((response) => response.data)
      .catch((err) => { console.error("Error updating report:", err); 
        throw err; 
        });
      },
    patchReport: async (id, data) => {
    return axios
      .patch(`${API_URI}/api/reports/${id}`, data, config)
      .then((response) => response.data)
      .catch((err) => { console.error("Error patching report:", err); 
        throw err; 
        });
    },
    deleteReport: async (id) => {
    return axios
      .delete(`${API_URI}/api/reports/${id}`, config)
      .then((response) => response.data)
      .catch((err) => { console.error("Error deleting report:", err); 
        throw err; 
        });
    }

};
export default apiRoutes;