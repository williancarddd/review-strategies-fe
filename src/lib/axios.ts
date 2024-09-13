import axios from 'axios';
import { useAuthStore } from '@/stores/authStore'; // Supondo que você esteja usando Zustand ou outra store

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token de autenticação
apiClient.interceptors.request.use(
  (config) => {
    const { user } = useAuthStore.getState(); // Supondo que os dados do usuário estejam armazenados na Zustand store
    if (user && user.access_token) {
      config.headers['Authorization'] = `Bearer ${user.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
